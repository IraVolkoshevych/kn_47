using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SystemOfCurricula.Models.DTOs
{
    public class CourseDependentDTO
    {
        public int Semestr { get; set; }
        public string SubjectName { get; set; }
        public string SubjectType { get; set; }
        public double CourseCredit { get; set; }
        public bool IsStartCourse { get; set; }
    }
}