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
import arrow from '../images/arrow.png';

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

    let leftPosition  = window.screen.width / 4;

    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title" 
          open={this.props.isOpen}
          maxWidth="false"
          style={{width: 750, left: leftPosition}}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {this.props.courseName}
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              {this.props.modalText}
            </Typography>
            <span className="d-flex justify-content-center">
            {
              StartCourses.map(course =>
                <Button color="primary">
                  { course }
                </Button>)
            }
            </span><br/>
            <div className="d-flex justify-content-center">
              <img src={arrow} alt="Arrow" height="42" width="42"/><br/>
            </div>
            <Typography className="d-flex justify-content-center" gutterBottom>
              <Button variant="contained" color="secondary">
                {this.props.courseName}
                </Button>
            </Typography><br/>
            <div className="d-flex justify-content-center">
              <img src={arrow} alt="Arrow" height="42" width="42"/><br/>
            </div><br/>
            <span className="d-flex justify-content-center">
            {
              DependentCourses.map(course =>
                <Button color="primary">
                  { course }
                </Button>)
            }
            </span>
          </DialogContent>        </Dialog>
      </div>
    );
  }
}

export default DisciplineInfo;