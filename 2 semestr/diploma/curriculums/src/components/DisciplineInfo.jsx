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
      this.openAnotherCourse = this.openAnotherCourse.bind(this);
  }

  handleClose = () => {
    this.props.setModalVisibility(false);
  };

  openAnotherCourse = (event) =>{
    this.props.updateModalContent(event.currentTarget.value);
  }

  render() {
    debugger;
    let StartCourses = this.props.courseDependencies ? this.props.courseDependencies
      .filter(dependency => dependency.IsStartCourse) : [];

    let DependentCourses = this.props.courseDependencies ? this.props.courseDependencies
    .filter(dependency => !dependency.IsStartCourse) : [];

    let leftPosition  = window.screen.width / 4;

    let info = this.props.courseInfo;
    let lectererInfo =  info ? info.LecturerDegree + " " + info.LecturerAcademicStatus
        + " каф. " + info.LecturerDepartment + " " + info.LecturerFirstName + " " + info.LecturerLastName : "";
    let assistantInfo = info ? info.AssistantDegree + " " + info.AssistantAcademicStatus
        + " каф. " + info.AssistantDepartment + " " + info.AssistantFirstName + " " + info.AssistantLastName : "";
    let courseName = info ? info.CourseName : "";
    let courseCredit = info ? info.CourseCredit : "";
    let semestr = info ? info.Semestr : "";
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title" 
          open={this.props.isOpen}
          maxWidth="false"
          style={{width: 750, left: leftPosition}}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose} style={{color: "brown"}}>
          <strong>{ courseName + ", "  + semestr + " семестр" + " ("  + courseCredit + " кред.)" }</strong>
          </DialogTitle>
          <DialogContent>
            <Typography className="mb-3" gutterBottom>
              <h8>Лектор</h8> <br/>
              <h6><b>{lectererInfo}</b></h6>
              <h8>Викладач практичних/лабораторних занять</h8><br/>
              <h6><b>{assistantInfo}</b></h6>
            </Typography>
            <span className="d-flex justify-content-center">
            {
              StartCourses.map(course =>
                <Button color="primary" style={{textTransform: "none"}} onClick={this.openAnotherCourse} value={course.CourseId}>
                  { course.SubjectName }
                </Button>)
            }
            </span>
            {
              StartCourses.length !== 0 ?
                <div className="d-flex justify-content-center">
                  <img src={arrow} alt="Arrow" weight="18" height="18"/><br/>
                </div>
              : ""
            }
            {
              StartCourses.length !== 0 || DependentCourses.length !== 0 ?
              <Typography className="d-flex justify-content-center" gutterBottom>
                <Button color="primary" style={{textTransform: "none"}}>
                  {courseName}
                  </Button>
              </Typography>
              : ""
            }
            {
              DependentCourses.length !== 0 ?
                <div className="d-flex justify-content-center">
                <img src={arrow} alt="Arrow"weight="18" height="18"/>
                </div>
              : ""
            }
            <span className="d-flex justify-content-center">
            {
              DependentCourses.map(course =>
                <Button color="primary" style={{textTransform: "none"}} onClick={this.openAnotherCourse} value={course.CourseId}>
                  { course.SubjectName }
                </Button>)
            }
            </span>
          </DialogContent>
          </Dialog>
      </div>
    );
  }
}

export default DisciplineInfo;