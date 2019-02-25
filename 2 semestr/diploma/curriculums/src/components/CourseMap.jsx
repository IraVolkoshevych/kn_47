import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
            rows : []
        }

        this.loadData();

        this.preparedDataForTable();
    }

    loadData(){
        debugger;
        axios.get("http://localhost:61735/api/GetCoursesInfoList/2")
        .then((response) =>{
          console.log(response);
          this.setState({
              courses:response.data
          });
          
          this.preparedDataForTable();
        })
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
            firstSemestr : firstSemestr[rowId] ? firstSemestr[rowId].SubjectName : "",
            secondSemestr : secondSemestr[rowId] ? secondSemestr[rowId].SubjectName : "",
            thirdSemestr : thirdSemestr[rowId] ? thirdSemestr[rowId].SubjectName : "",
            fourthSemestr : fourthSemestr[rowId] ? fourthSemestr[rowId].SubjectName : "",
            fifthSemestr : fifthSemestr[rowId] ? fifthSemestr[rowId].SubjectName : "",
            sixthSemestr : sixthSemestr[rowId] ? sixthSemestr[rowId].SubjectName : "",
            seventhSemestr : seventhSemestr[rowId] ? seventhSemestr[rowId].SubjectName : "",
            eighthSemestr : eighthSemestr[rowId] ? eighthSemestr[rowId].SubjectName : ""
        }
    }

    render(){
        console.log(this.state.courses)
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
                    <TableCell>{row.firstSemestr}</TableCell>
                    <TableCell>{row.secondSemestr}</TableCell>
                    <TableCell>{row.thirdSemestr}</TableCell>
                    <TableCell>{row.fourthSemestr}</TableCell>
                    <TableCell>{row.fifthSemestr}</TableCell>
                    <TableCell>{row.sixthSemestr}</TableCell>
                    <TableCell>{row.seventhSemestr}</TableCell>
                    <TableCell>{row.eighthSemestr}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>)
    }
}

export default CourseMap;