import React from 'react';
import axios from 'axios';
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
            specialities : []
        }

        this.loadSpecialities();

        this.addUrl = this.addUrl.bind(this);
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
        window.location.href = window.location.origin + "/courseMap/" + event.currentTarget.value;
    };

    render(){
        debugger;
        let color = "primary";              
        return(
            <div>
            <span className="mb-3 d-flex justify-content-center">
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
             </span>  
            </div>)
    }
}

export default SpecialitiesPage;