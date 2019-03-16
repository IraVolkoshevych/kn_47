using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SystemOfCurricula.Models.DTOs
{
    public class CourseInfoDTO
    {
        public int CourseID { get; set; }
        public int Semestr { get; set; }
        public int SpecialityID { get; set; }
        public string CourseName { get; set; }
        public string LecturerFirstName { get; set; }
        public int LecturerID { get; set; }
        public string LecturerLastName { get; set; }
        public string LecturerDegree { get; set; }
        public string LecturerAcademicStatus { get; set; }
        public string LecturerDepartment { get; set; }
        public string AssistantFirstName { get; set; }
        public int AssistantID{ get; set; }
        public string AssistantLastName { get; set; }
        public string AssistantDegree { get; set; }
        public string AssistantAcademicStatus { get; set; }
        public string AssistantDepartment { get; set; }
        public double CourseCredit { get; set; }
        public double CourseWorkCredit { get; set; }
        public bool IsOnlyPractice { get; set; }
        public string CourseType { get; set; }
        public List<int> StartCourses { get; set; }
    }
}