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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DisciplineInfo from './DisciplineInfo';
import "./CourseMap.css"

class CourseMap extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            courses : [],
            rows : [],
            selectedCourseId : 0,
            isOpenModal: false,
            selectedCourseInfo : null,
            courseDependencies : null
        }

        this.loadData();

        this.preparedDataForTable();
        this.openModal = this.openModal.bind(this);
        this.setModalVisibility = this.setModalVisibility.bind(this);
        this.loadCourseInfo = this.loadCourseInfo.bind(this);
        this.loadModalData = this.loadModalData.bind(this);
        this.chooseColorForCourse = this.chooseColorForCourse.bind(this);
    }

    loadCourseInfo(courseId){
        axios.get("http://localhost:61735/api/GetCourseInfo/" + courseId)
            .then((response) =>{
                this.setState({
                    selectedCourseInfo : response.data
                });
            }); 
    }

    loadData(){
        let specialityId = this.props.match.params.specialityId;

        axios.get("http://localhost:61735/api/GetCoursesInfoList/" + specialityId)
        .then((response) =>{
          console.log(response);
          this.setState({
              courses:response.data
          });

          this.preparedDataForTable();
        });
    }

    openModal(event){
        this.loadModalData(event.currentTarget.value);
    }

    loadModalData(courseId){
        axios.get("http://localhost:61735/api/GetCourseInfo/" + courseId)
            .then((response) =>{
                this.setState({
                    selectedCourseInfo : response.data.CourseInfo,
                    courseDependencies : response.data.CourseDependencies,
                    isOpenModal : true,
                    selectedCourseId : courseId
                });
            });
    }

    setModalVisibility(isOpen){
        this.setState({
            isOpenModal : isOpen
        });
    }

    preparedDataForTable(){
        let rowCount = 0;

        let firstSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 1) return course;
        });
        rowCount = firstSemestr.length;

        let secondSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 2) return course;
        });
        rowCount = secondSemestr.length > rowCount ? secondSemestr.length : rowCount;

        let thirdSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 3) return course;
        });
        rowCount = thirdSemestr.length > rowCount ? thirdSemestr.length : rowCount;

        let fourthSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 4) return course;
        });
        rowCount = fourthSemestr.length > rowCount ? fourthSemestr.length : rowCount;

        let fifthSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 5) return course;
        });
        rowCount = fifthSemestr.length > rowCount ? fifthSemestr.length : rowCount;

        let sixthSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 6) return course;
        });
        rowCount = sixthSemestr.length > rowCount ? sixthSemestr.length : rowCount;

        let seventhSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 7) return course;
        });
        rowCount = seventhSemestr.length > rowCount ? seventhSemestr.length : rowCount;

        let eighthSemestr = this.state.courses.filter(course => {
            if (course.Semestr === 8) return course;
        });
        rowCount = eighthSemestr.length > rowCount ? eighthSemestr.length : rowCount;

        let tableRows =[];
        for(let i =0; i < rowCount; ++i){
            tableRows[i]  = this.createRow(i, firstSemestr, secondSemestr, thirdSemestr, fourthSemestr, fifthSemestr, sixthSemestr, seventhSemestr, eighthSemestr)
        }

        this.setState({
            rows: tableRows
        })   
    }

    createRow(rowId, firstSemestr, secondSemestr, thirdSemestr, fourthSemestr, fifthSemestr, sixthSemestr, seventhSemestr, eighthSemestr){
        return {
            id : rowId,
            firstSemestr : {
                CourseID : firstSemestr[rowId] ? firstSemestr[rowId].CourseID : undefined,
                CourseName : firstSemestr[rowId] ? firstSemestr[rowId].CourseName : "",
                CourseType : firstSemestr[rowId] ? firstSemestr[rowId].CourseType : ""
            },
            secondSemestr : {
                CourseID : secondSemestr[rowId] ? secondSemestr[rowId].CourseID : undefined,
                CourseName : secondSemestr[rowId] ? secondSemestr[rowId].CourseName : "",
                CourseType : secondSemestr[rowId] ? secondSemestr[rowId].CourseType : ""
            },
            thirdSemestr : {
                CourseID : thirdSemestr[rowId] ? thirdSemestr[rowId].CourseID : undefined,
                CourseName : thirdSemestr[rowId] ? thirdSemestr[rowId].CourseName : "",
                CourseType : thirdSemestr[rowId] ? thirdSemestr[rowId].CourseType : ""
            },
            fourthSemestr : {
                CourseID : fourthSemestr[rowId] ? fourthSemestr[rowId].CourseID : undefined,
                CourseName : fourthSemestr[rowId] ? fourthSemestr[rowId].CourseName : "",
                CourseType : fourthSemestr[rowId] ? fourthSemestr[rowId].CourseType : ""
            },
            fifthSemestr : {
                CourseID : fifthSemestr[rowId] ? fifthSemestr[rowId].CourseID : undefined,
                CourseName : fifthSemestr[rowId] ? fifthSemestr[rowId].CourseName : "",
                CourseType : fifthSemestr[rowId] ? fifthSemestr[rowId].CourseType : ""
            },
            sixthSemestr : {
                CourseID : sixthSemestr[rowId] ? sixthSemestr[rowId].CourseID : undefined,
                CourseName : sixthSemestr[rowId] ? sixthSemestr[rowId].CourseName : "",
                CourseType : sixthSemestr[rowId] ? sixthSemestr[rowId].CourseType : ""
            },
            seventhSemestr : {
                CourseID : seventhSemestr[rowId] ? seventhSemestr[rowId].CourseID : undefined,
                CourseName : seventhSemestr[rowId] ? seventhSemestr[rowId].CourseName : "",
                CourseType : seventhSemestr[rowId] ? seventhSemestr[rowId].CourseType : ""
            },
            eighthSemestr : {
                CourseID : eighthSemestr[rowId] ? eighthSemestr[rowId].CourseID : undefined,
                CourseName : eighthSemestr[rowId] ? eighthSemestr[rowId].CourseName : "",
                CourseType : eighthSemestr[rowId] ? eighthSemestr[rowId].CourseType : ""
            }
        }
    }

    buildModalText(courseInfo){
        return(
            <div>
                {" Лектор - " + courseInfo.LecturerDegree + " " + courseInfo.LecturerAcademicStatus
                + " каф. " + courseInfo.LecturerDepartment + " " + courseInfo.LecturerFirstName + " " + courseInfo.LecturerLastName}<br/>
                {"Викладач практичних/лабораторних занять - "+ courseInfo.AssistantDegree + " " + courseInfo.AssistantAcademicStatus
                + " каф. " + courseInfo.AssistantDepartment + " " + courseInfo.AssistantFirstName + " " + courseInfo.AssistantLastName}<br/>
            </div>)
    }

    chooseColorForCourse(type){
        switch(type){
            case "humanitarian": return "red";
            case "normative": return "green";
            case "professional": return "#30BBF6";
            case "specialization": return "#ABFF00";
            case "other": return "#FF3f9f";
        }
    }

    render(){
        let cellStyle = {
            padding: '6px 18px 6px 14px'
        }

        console.log(this.state)
        let info = this.state.selectedCourseInfo;
        let color = "primary"; 
        let backgroundColor = "red";  
        let courseTypes = [
            {
                type : "humanitarian",
                name : "гуманітарні"
            }, 
            {
                type: "normative",
                name: "нормативні"
            }, 
            {
                type: "professional",
                name: "професійні"
            }, 
            {
                type: "specialization",
                name: "спеціалізації"
            }, 
            {
                type: "other",
                name: "інші"
            }];        
        return(
            <span>
            <div className="coursemap col-10">
            <Table className="mb-3">
              <TableHead>
                <TableRow>
                  <TableCell>I семестр</TableCell>
                  <TableCell>II семестр</TableCell>
                  <TableCell>III семестр</TableCell>
                  <TableCell>IV семестр</TableCell>
                  <TableCell>V семестр</TableCell>
                  <TableCell>VI семестр</TableCell>
                  <TableCell>VII семестр</TableCell>
                  <TableCell>VIII семестр</TableCell>
                  <TableCell>
                    <Fab className="ml-3" size="small" color="primary" aria-label="Add" >
                        <AddIcon onClick={this.handleOpen}/>
                    </Fab>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell style={cellStyle}>{
                        row.firstSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color} 
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.firstSemestr.CourseType) }} 
                            size="small"
                            value={row.firstSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.firstSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell style={cellStyle}>{
                        row.secondSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color} 
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.secondSemestr.CourseType) }} 
                            size="small"
                            value={row.secondSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.secondSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell style={cellStyle}>{
                        row.thirdSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color} 
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.thirdSemestr.CourseType) }} 
                            size="small"
                            value={row.thirdSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.thirdSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell style={cellStyle}>{
                        row.fourthSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color} 
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.fourthSemestr.CourseType) }} 
                            size="small"
                            value={row.fourthSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.fourthSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell style={cellStyle}>{
                        row.fifthSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color}  
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.fifthSemestr.CourseType) }} 
                            size="small"
                            value={row.fifthSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.fifthSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell style={cellStyle}>{
                        row.sixthSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color}
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.sixthSemestr.CourseType) }} 
                            size="small"
                            value={row.sixthSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.sixthSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell style={cellStyle}>{
                        row.seventhSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color}
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.seventhSemestr.CourseType) }} 
                            size="small"
                            value={row.seventhSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.seventhSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell style={cellStyle}>{
                        row.eighthSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color={color}
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(row.eighthSemestr.CourseType) }} 
                            size="small"
                            value={row.eighthSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.eighthSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                    <TableCell />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <span>
            {
                courseTypes.map(courseType => {
                    return (<span >
                        <Button 
                        className="mb-2 mr-2"
                            variant="contained" 
                            color={color}
                            style={{ fontSize: '10px', backgroundColor: this.chooseColorForCourse(courseType.type) }} 
                            size="small"
                        >
                            {courseType.name}
                        </Button>
                    </span>)
                })       
            }
            </span>
            <DisciplineInfo isOpen={this.state.isOpenModal} selectedObjectId={this.state.selectedCourseId} 
                            setModalVisibility={this.setModalVisibility} courseInfo={info}
                            courseDependencies={this.state.courseDependencies} updateModalContent={this.loadModalData}/>
          </div>
          </span>)
    }
}

export default CourseMap;