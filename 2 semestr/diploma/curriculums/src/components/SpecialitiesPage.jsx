import React from 'react';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import DisciplineInfo from './DisciplineInfo';

class SpecialitiesPage extends React.Component {
    constructor(){
        super();
        this.state ={
            specialities : [],
            isModalOpend : false,
            newSpecialityName: "",
            newSpecialityYear : ""
        }

        this.loadSpecialities();

        this.addUrl = this.addUrl.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveSpeciality = this.saveSpeciality.bind(this);
    }

    handleClose(){
        this.setState({
            isModalOpend : false
        })
    }
    
    handleOpen(){
        this.setState({
            isModalOpend : true
        })
    }
    
    loadSpecialities(){
        axios.get("http://localhost:61735/api/GetSpecialities")
        .then((response) =>{
            this.setState({
                specialities : response.data
            });
        }); 
    }

    addUrl(event) {
        window.location.href = window.location.origin + "/courseMap/" + event.currentTarget.value + "/" + this.props.match.params.isAdmin;
    };

    handleChange = propsName => event => {
        if(propsName === "newSpecialityYear"){
            let mask = /^\d+$/;
            let isCorrectYear = mask.test(event.target.value);
            if(!isCorrectYear){
                return;
            }
        }
          this.setState({
            [propsName]: event.target.value
          })
    };

    saveSpeciality(){
        let model = {
            SpecialityName : this.state.newSpecialityName,
            StartYear : this.state.newSpecialityYear
        }
        axios.post("http://localhost:61735/api/SaveSpeciality", model)
                .then((response) =>{
                    this.setState({
                        isModalOpend : false
                    });
                    this.loadSpecialities();
            }); 
    }

    render(){
        let color = "primary";   
        let isAdmin = this.props.match.params.isAdmin === "true";           
        return(
            <div>
            <span className="mb-2 mt-2 d-flex justify-content-center">
                <h2>Система опису навчальних планів</h2><br/>
            </span>
            <span className="d-flex justify-content-center">
             {
                 this.state.specialities.map(speciality =>{
                     return(
                        <Button value={speciality.SpecialityId} onClick={this.addUrl}>
                            {speciality.SpecialityName}
                        </Button>
                     )
                 })
             }
             {
                 isAdmin ?
                 <Fab className="ml-3" size="small" color="primary" aria-label="Add" >
                     <AddIcon onClick={this.handleOpen}/>
                 </Fab>
                 : ""
             }
             </span>  
             <Dialog
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title" 
                open={this.state.isModalOpend}
                maxWidth="false"
                >
                <DialogTitle id="customized-dialog-title" onClose={this.handleClose} style={{color: "brown"}}>
                <strong>Нова спеціальність</strong>
                </DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Назва"
                    type="text"
                    onChange={this.handleChange('newSpecialityName')}
                    value={this.state.newSpecialityName}
                    color="primary"
                    fullWidth
                    required
                />
                <TextField
                    margin="dense"
                    label="Рік вступу"
                    type="text"
                    onChange={this.handleChange('newSpecialityYear')}
                    value={this.state.newSpecialityYear}
                    color="primary"
                    fullWidth
                    required
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.saveSpeciality} className="ml-3" variant="contained" color="primary">
                        Зберегти
                    </Button>
                </DialogActions>
            </Dialog>
            </div>)
    }
}

export default SpecialitiesPage;