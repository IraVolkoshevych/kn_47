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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class CreateCourse extends React.Component {
  constructor(props){
      super(props);
  
      this.state = {
        subjects : [],
        departments : [],
        teachers : [],
        subjectId : "",
        departmentName : "",
        lectererName : "",
        assitantName : "",
        semestr : 1,
        courseCredit : "",
        courseWorkCredit : "",
        isCourseWork : false,
        isOnlyPractice : false,
        selectedCoursesForDependencies : [],
        coursesForDependencies : []
      }

      this.loadSubjects();
      this.loadDepartments();

      this.handleClose = this.handleClose.bind(this);
      this.loadSubjects = this.loadSubjects.bind(this);
      this.loadDepartments = this.loadDepartments.bind(this);
      this.saveCourse = this.saveCourse.bind(this);
      this.resetModal = this.resetModal.bind(this);        
  }

  handleClose = (error = "") => {
    this.props.setModalVisibility(false, "isOpenCreatingModal", error);
  };

  handleChange = event => {
    if(event.target.name === "departmentName")
      axios.get("http://localhost:61735/api/GetTeachers/" + event.target.value)
        .then((response) =>{
          this.setState({
            teachers : response.data,
          });
        });
    else if(event.target.name === "courseCredit"){
      let mask = /^[0-9]+(\.[5]{0,1})*?$/;
      let isCorrectCredit = mask.test(event.target.value) || event.target.value === "";
      if(!isCorrectCredit){
          return;
      }
    }
    else if(event.target.name === "isCourseWork" || event.target.name === "isOnlyPractice"){
      this.setState({
        [event.target.name]: event.target.checked
      });
      
      return;
    }
    else if(event.target.name === "semestr"){
      this.loadCoursesForDependencies(event.target.value);
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loadSubjects(specialityId){
    axios.get("http://localhost:61735/api/GetSubjects/" + this.props.specialityId)
        .then((response) =>{
            this.setState({
              subjects : response.data
            });
        });
  }

  loadCoursesForDependencies(semestr){
    axios.get("http://localhost:61735/api/GetCoursesForDependencies/" + semestr + "/" + this.props.specialityId)
        .then((response) =>{
            this.setState({
              coursesForDependencies : response.data
            });
        });
  }

  loadDepartments(specialityId){
    axios.get("http://localhost:61735/api/GetDepartments/")
        .then((response) =>{
            this.setState({
              departments : response.data
            });
    });
  }

  saveCourse(){
    let course = {
      CourseID : this.state.subjectId,
      SpecialityID : this.props.specialityId,
      LecturerID : this.state.isOnlyPractice ? this.state.assitantName : this.state.lectererName,
      AssistantID : this.state.assitantName,
      Semestr : this.state.semestr,
      CourseCredit : Number(this.state.courseCredit),
      CourseWorkCredit : this.state.isCourseWork ? Number(this.state.courseWorkCredit) : 0,
      IsOnlyPractice : this.state.isOnlyPractice,
      StartCourses : this.state.selectedCoursesForDependencies
    }
    
    axios.post("http://localhost:61735/api/SaveCourse", course)
      .then((response) =>{
          this.handleClose(response.data);
          this.resetModal();
    });
  }

  resetModal(){
    this.setState({
        subjectId : "",
        departmentName : "",
        lectererName : "",
        assitantName : "",
        semestr : 1,
        courseCredit : "",
        courseWorkCredit : "",
        isCourseWork : false,
        isOnlyPractice : false,
        selectedCoursesForDependencies : [],
    })
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
          <DialogTitle id="customized-dialog-title" style={{color: "brown"}}>
            Нова дисципліна
          </DialogTitle>
          <DialogContent>
          <Checkbox
              checked={this.state.isCourseWork}
              onChange={this.handleChange}
              color="primary"
              inputProps={{
                name: "isCourseWork",
              }}
            /> Курсова робота
            <Checkbox
              checked={this.state.isOnlyPractice}
              onChange={this.handleChange}
              color="primary"
              inputProps={{
                name: "isOnlyPractice",
              }}
            /> Тільки практичні заняття
            <br/>
          <FormControl>
            <InputLabel htmlFor="subjectId"> Назва</InputLabel>
            <Select
              value={this.state.subjectId}
              onChange={this.handleChange}
              inputProps={{
                name: "subjectId",
                id: "subjectId",
              }}
              style={{width: "400px"}}
            >
              {
                this.state.subjects.map(subject => {
                  return <MenuItem value={subject.SubjectId}>{subject.SubjectName}</MenuItem>
                })
              }
            </Select>
            </FormControl>
            <br/>
            <FormControl>
            <InputLabel htmlFor="departmentName">Кафедра</InputLabel>
            <Select
              value={this.state.departmentName}
              onChange={this.handleChange}
              inputProps={{
                name: "departmentName",
                id: "departmentName",
              }}
              style={{width: "400px"}}
            >
              <MenuItem value="">
                Не визначено
              </MenuItem>
              {
                this.state.departments.map(department => {
                  return <MenuItem value={department}>{department}</MenuItem>
                })
              }
            </Select>
            </FormControl>
            {
              !this.state.isOnlyPractice ? 
              <span>
                <br/>
                <FormControl>
                <InputLabel htmlFor="lectererName">Лектор</InputLabel>
                <Select
                  value={this.state.lectererName}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "lectererName",
                    id: "lectererName",
                  }}
                  style={{width: "400px"}}
                >
                  <MenuItem value="">
                    <em>Не визначено</em>
                  </MenuItem>
                  {
                    this.state.teachers.map(teacher => {
                      return <MenuItem value={teacher.TeacherId}>{teacher.TeacherName}</MenuItem>
                    })
                  }
                </Select>
                </FormControl>
                </span>
                : ""
            }
            <br/>
            <FormControl>
            <InputLabel htmlFor="assitantName">Викладач практичних/лабораторних</InputLabel>
            <Select
              value={this.state.assitantName}
              onChange={this.handleChange}
              inputProps={{
                name: "assitantName",
                id: "assitantName",
              }}
              style={{width: "400px"}}
            >
              <MenuItem value="">
                <em>Не визначено</em>
              </MenuItem>
              {
                this.state.teachers.map(teacher => {
                  return <MenuItem value={teacher.TeacherId}>{teacher.TeacherName}</MenuItem>
                })
              }
            </Select>
            </FormControl>
            <br/>
            <FormControl>
            <InputLabel htmlFor="semestr">Семестр</InputLabel>
            <Select
              value={this.state.semestr}
              onChange={this.handleChange}
              inputProps={{
                name: "semestr",
                id: "semestr",
              }}
              style={{width: "400px"}}
            >
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map(semestr => {
                  return <MenuItem value={semestr}>{semestr}</MenuItem>
                })
              }
            </Select>
            </FormControl>
            <br/>
            <TextField
              margin="dense"
              label="Кредит"
              type="text"
              onChange={this.handleChange}
              value={this.state.courseCredit}
              color="primary"
              style={{width: "400px"}}
              inputProps={{
                name: "courseCredit",
              }}
            />             
            {
              this.state.isCourseWork ?  
            (<span>
              <br/>
              <TextField
                margin="dense"
                label="Кредит курсової роботи"
                type="text"
                onChange={this.handleChange}
                value={this.state.courseWorkCredit}
                color="primary"
                fullWidth
                required
                inputProps={{
                  name: "courseWorkCredit",
                }}
              />
            </span>)
            : ""
            }
            <br/>
            <FormControl>
            <InputLabel htmlFor="selectedCoursesForDependencies">Базові курси</InputLabel>
            <Select
              value={this.state.selectedCoursesForDependencies}
              onChange={this.handleChange}
              inputProps={{
                name: "selectedCoursesForDependencies",
                id: "selectedCoursesForDependencies",
              }}
              multiple={true}
              style={{width: "400px"}}
            >
              <MenuItem value="">
                <em>Не визначено</em>
              </MenuItem>
              {
                this.state.coursesForDependencies.map(course => {
                  return <MenuItem value={course.CourseId}>{course.CourseName}</MenuItem>
                })
              }
            </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.saveCourse} className="ml-3" variant="contained" color="primary">
                Зберегти
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreateCourse;