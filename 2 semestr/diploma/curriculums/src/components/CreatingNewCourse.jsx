import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class CreateCourse extends React.Component {
  constructor(props){
      super(props);
  
      this.state = {
        subjects : [],
        subjectName: ""
      }

      this.loadSubjects();

      this.handleClose = this.handleClose.bind(this);
      this.loadSubjects = this.loadSubjects.bind(this);
  }

  handleClose = () => {
    this.props.setModalVisibility(false, "isOpenCreatingModal");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loadSubjects(specialityId){
    axios.get("http://localhost:61735/api/GetSubjects/" + this.props.specialityId)
        .then((response) =>{
            this.setState({
              subjects : response.data
            });
        });
  }

  render() {
    debugger;
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title" 
          open={this.props.isOpen}
          maxWidth="false"
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose} style={{color: "brown"}}>
            Нова дисципліна
          </DialogTitle>
          <DialogContent>
            <Select
              value={this.state.subjectName}
              onChange={this.handleChange}
              inputProps={{
                name: 'subjectName',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                this.state.subjects.map(subject => {
                  return <MenuItem value={subject.SubjectId}>{subject.SubjectName}</MenuItem>
                })
              }
            </Select>
          </DialogContent>
          </Dialog>
      </div>
    );
  }
}

export default CreateCourse;