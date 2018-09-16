var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var xml2js = require('xml2js'); //https://www.npmjs.com/package/xml2js
 
var app = express();
var jsonParser = bodyParser.json();
var FILE_NAME = "dictionary.xml";
 
//START APP COMMAND >>>node app.js
app.use(express.static(__dirname + "/public"));

app.get("/api/populate_test_data", function(req, res){
    var testData = {
        dictionary: {
            "писати": "write",
            "мама": "mother",
            "тато": "father",
            "історія": "history",
            "мишка": "mouse",
            "нога": "leg",
            "машина": "car"
        }
    };

    var builder = new xml2js.Builder();
    var xml = builder.buildObject(testData);
    fs.writeFile(FILE_NAME, xml, () => {
        res.status(200).send();
    });
});

var getDictionary = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + "\\" + FILE_NAME, (err, data) => {
            if(err){
                reject(err);
            }

            var parser = new xml2js.Parser();
            parser.parseString(data, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result.dictionary);
                }
            });
        });
    });
};

var saveDictionary = dictionary => {
    return new Promise((resolve, reject) => {
        var builder = new xml2js.Builder();
        var xml = builder.buildObject({ dictionary });
        fs.writeFile(__dirname + "\\" + FILE_NAME, xml, err => {
            if(err){
                reject();
            }
            else{
                resolve();
            }
        });
    });
};

var saveWord = (ua_word, en_word) => {
    return getDictionary().then(dictionary => {
        dictionary[ua_word] = en_word;
        return saveDictionary(dictionary);
    });
}

  
// Додати переклад українського слова
app.post("/api/dictionary/ua_word/:word", jsonParser, function(req, res){
    var ua_word = req.params.word;
    var en_word = req.body.en_word;

    saveWord(ua_word, en_word).then(() => {
        res.status(200).send();
    });
});

// Додати переклад англійського слова
app.post("/api/dictionary/en_word/:word", jsonParser, function(req, res){
    var en_word = req.params.word;
    var ua_word = req.body.ua_word;

    saveWord(ua_word, en_word).then(() => {
        res.status(200).send();
    });
});

// Дістати переклад українського слова
app.get("/api/dictionary/ua_word/translate/:word", function(req, res){
    var ua_word = req.params.word;
    
    getDictionary().then(dictionary => {
        if(!dictionary[ua_word]){
            res.status(404).send();
        } else{
            res.status(200).send(dictionary[ua_word][0]);
        }
    });
});

// Дістати переклад англійського слова
app.get("/api/dictionary/en_word/translate/:word", function(req, res){
    var en_word = req.params.word;
    var searched = "";

    getDictionary().then(dictionary => {
        for (ua_word in dictionary) {
            if(dictionary[ua_word] == en_word){
                searched = ua_word;
                break;
            }
        }

        if(searched == ""){
            res.status(404).send();
        } else{
            res.status(200).send(searched);
        }
    });
});

// Видалити переклад українського слова
app.delete("/api/dictionary/ua_word/:word", function(req, res){
    var ua_word = req.params.word;

    getDictionary().then(dictionary => {
        if(!dictionary[ua_word]){
            res.status(404).send();
        } else{
            delete dictionary[ua_word];

            saveDictionary(dictionary).then(() => {
                res.status(200).send();
            });
        }
    });
});

// Видалити переклад англійського слова
app.delete("/api/dictionary/en_word/:word", function(req, res){
    var en_word = req.params.word;

    getDictionary().then(dictionary => {
        for (ua_word in dictionary) {
            if(dictionary[ua_word] == en_word){
                delete dictionary[ua_word];
                return saveDictionary(dictionary);
            }
        }
    }).then(() => {
        res.status(200).send();
    });
});

app.listen(3000, function(){
    console.log("Conecting...");
});