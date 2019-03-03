import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class DisciplineInfo extends React.Component {
  constructor(props){
      super(props);
  
      this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    this.props.setModalVisibility(false);
  };


  render() {
    debugger;
    let StartCourses = this.props.courseDependencies ? this.props.courseDependencies
      .filter(dependency => dependency.IsStartCourse).map(dependency =>{
        return dependency.SubjectName;
    }) : [];

    let DependentCourses = this.props.courseDependencies ? this.props.courseDependencies
    .filter(dependency => !dependency.IsStartCourse).map(dependency =>{
      return dependency.SubjectName;
  }) : [];

    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.isOpen}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {this.props.courseName}
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              {this.props.modalText}
            </Typography>
              StartCourses<br/>
              {
                StartCourses.map(course =>
                  <Button color="primary">
                    { course }
                  </Button>)
              }
              <br/>DependentCourses<br/>
              {
                DependentCourses.map(course =>
                  <Button color="primary">
                    { course }
                  </Button>)
              }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DisciplineInfo;