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
import "./CourseMap.css"
let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

class CourseMap extends React.Component {
    constructor(){
        super();
        this.state ={
            courses : [],
            rows : [],
            selectedCourseId : 0,
            isOpenModal: false,
            selectedCourseInfo : null
        }

        this.loadData();

        this.preparedDataForTable();
        this.openModal = this.openModal.bind(this);
        this.setModalVisibility = this.setModalVisibility.bind(this);
        this.loadCourseInfo = this.loadCourseInfo.bind(this);
    }

    loadCourseInfo(courseId){
        axios.get("http://localhost:61735/api/GetCourseInfo/" + courseId)
            .then((response) =>{
                this.setState({
                    selectedCourseInfo :response.data
                });
            }); 
    }

    loadData(){
        axios.get("http://localhost:61735/api/GetCoursesInfoList/2")
        .then((response) =>{
          console.log(response);
          this.setState({
              courses:response.data
          });

          this.preparedDataForTable();
        });
    }

    openModal(event){
        axios.get("http://localhost:61735/api/GetCourseInfo/" + event.currentTarget.value)
            .then((response) =>{
                this.setState({
                    selectedCourseInfo : response.data,
                    isOpenModal : true,
                    selectedCourseId : event.currentTarget.value
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

        console.log(tableRows);

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
            },
            secondSemestr : {
                CourseID : secondSemestr[rowId] ? secondSemestr[rowId].CourseID : undefined,
                CourseName : secondSemestr[rowId] ? secondSemestr[rowId].CourseName : ""
            },
            thirdSemestr : {
                CourseID : thirdSemestr[rowId] ? thirdSemestr[rowId].CourseID : undefined,
                CourseName : thirdSemestr[rowId] ? thirdSemestr[rowId].CourseName : ""
            },
            fourthSemestr : {
                CourseID : fourthSemestr[rowId] ? fourthSemestr[rowId].CourseID : undefined,
                CourseName : fourthSemestr[rowId] ? fourthSemestr[rowId].CourseName : ""
            },
            fifthSemestr : {
                CourseID : fifthSemestr[rowId] ? fifthSemestr[rowId].CourseID : undefined,
                CourseName : fifthSemestr[rowId] ? fifthSemestr[rowId].CourseName : ""
            },
            sixthSemestr : {
                CourseID : sixthSemestr[rowId] ? sixthSemestr[rowId].CourseID : undefined,
                CourseName : sixthSemestr[rowId] ? sixthSemestr[rowId].CourseName : ""
            },
            seventhSemestr : {
                CourseID : seventhSemestr[rowId] ? seventhSemestr[rowId].CourseID : undefined,
                CourseName : seventhSemestr[rowId] ? seventhSemestr[rowId].CourseName : ""
            },
            eighthSemestr : {
                CourseID : eighthSemestr[rowId] ? eighthSemestr[rowId].CourseID : undefined,
                CourseName : eighthSemestr[rowId] ? eighthSemestr[rowId].CourseName : ""
            }
        }
    }

    buildModalText(courseInfo){
        return(
            <div>
                {courseInfo.CourseName + " " + courseInfo.CourseCredit + " кред. "}<br/>
                {" Лектор - " + courseInfo.LecturerDegree + " " + courseInfo.LecturerAcademicStatus
                + " каф. " + courseInfo.LecturerDepartment + " " + courseInfo.LecturerFirstName + " " + courseInfo.LecturerLastName}<br/>
                {"Викладач практичних/лабораторних занять - "+ courseInfo.AssistantDegree + " " + courseInfo.AssistantAcademicStatus
                + " каф. " + courseInfo.AssistantDepartment + " " + courseInfo.AssistantFirstName + " " + courseInfo.AssistantLastName}<br/>
            </div>)
    }
    render(){
        let cellStyle = {
            padding: '6px 18px 6px 14px'
        }

        console.log(this.state.courses)
        let info = this.state.selectedCourseInfo;

        let modalText = info ? this.buildModalText(info) : "";
                        
        return(
            <div className="coursemap col-10">
            <Table>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell style={cellStyle}>{
                        row.firstSemestr.CourseID ?   
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{ fontSize: '10px' }} 
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
                            color="primary" 
                            style={{ fontSize: '10px' }} 
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
                            color="primary" 
                            style={{ fontSize: '10px' }} 
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
                            color="primary" 
                            style={{ fontSize: '10px' }} 
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
                            color="primary" 
                            style={{ fontSize: '10px' }} 
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
                            color="primary" 
                            style={{ fontSize: '10px' }} 
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
                            color="primary" 
                            style={{ fontSize: '10px' }} 
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
                            color="primary" 
                            style={{ fontSize: '10px' }} 
                            size="small"
                            value={row.eighthSemestr.CourseID}
                            onClick={this.openModal}
                        >
                            {row.eighthSemestr.CourseName}
                        </Button>
                        : ""
                    }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <DisciplineInfo isOpen={this.state.isOpenModal} selectedObjectId={this.state.selectedCourseId} 
                            setModalVisibility={this.setModalVisibility} modalText={modalText}/>
          </div>)
    }
}

export default CourseMap;