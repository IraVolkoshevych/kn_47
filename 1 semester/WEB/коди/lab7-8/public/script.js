var elementIds = {
    ua_word: "ua_word",
    ua_word_translate: "ua_word_translate",
    en_word: "en_word",
    en_word_translate: "en_word_translate"
}

var baseUrl = "http://localhost:3000";
var requestUrls = {
    add_ua: baseUrl + "/api/dictionary/ua_word/", //:word
    add_en: baseUrl + "/api/dictionary/en_word/", //:word
    translate_ua: baseUrl + "/api/dictionary/ua_word/translate/", //:word
    translate_en: baseUrl + "/api/dictionary/en_word/translate/", //:word
    delete_ua: baseUrl + "/api/dictionary/ua_word/", //:word
    delete_en: baseUrl + "/api/dictionary/en_word/" //:word
}

function add_ua(){
    var en_word = $("#" + elementIds.ua_word_translate).val();
    var ua_word = $("#" + elementIds.ua_word).val();

    $.ajax({
        url: requestUrls.add_ua + ua_word,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ en_word })
    }).then(() => {
        alert("Переклад додано!");
    }).catch(() => {
        alert("Помилка!");
    });
}

function add_en(){
    var ua_word = $("#" + elementIds.en_word_translate).val();
    var en_word = $("#" + elementIds.en_word).val();

    $.ajax({
        url: requestUrls.add_en + en_word,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ ua_word })
    }).then(() => {
        alert("Переклад додано!");
    }).catch(() => {
        alert("Помилка!");
    });
}

function translate_ua(){
    var ua_word = $("#" + elementIds.ua_word).val();

    $.ajax({
        url: requestUrls.translate_ua + ua_word,
        type: "GET",
        contentType: "application/json"
    }).then(result => {
        $("#" + elementIds.ua_word_translate).val(result);
    }).catch(() => {
        alert("Помилка!");
    });
}

function translate_en(){
    var en_word = $("#" + elementIds.en_word).val();

    $.ajax({
        url: requestUrls.translate_en + en_word,
        type: "GET",
        contentType: "application/json"
    }).then(result => {
        $("#" + elementIds.en_word_translate).val(result);
    }).catch(() => {
        alert("Помилка!");
    });
}

function delete_ua(){
    var ua_word = $("#" + elementIds.ua_word).val();

    $.ajax({
        url: requestUrls.delete_ua + ua_word,
        type: "DELETE",
        contentType: "application/json"
    }).then(() => {
        alert("Слово видалено!");
        $("#" + elementIds.ua_word_translate).val("");
        $("#" + elementIds.ua_word).val("");
    }).catch(() => {
        alert("Помилка!");
    });
}

function delete_en(){
    var en_word = $("#" + elementIds.en_word).val();

    $.ajax({
        url: requestUrls.delete_en + en_word,
        type: "DELETE",
        contentType: "application/json"
    }).then(() => {
        alert("Слово видалено!");
        $("#" + elementIds.en_word).val("");
        $("#" + elementIds.en_word_translate).val("");
    }).catch(() => {
        alert("Помилка!");
    });
}