using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SystemOfCurricula.Models;
using SystemOfCurricula.Models.DTOs;

namespace SystemOfCurricula.Services
{
    public static class CurricilaService
    {
        public static IList<CourseInfoDTO> LoadCoursesInfoForPlan(int specialityId)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var courses = (from subject in dbContext.Subject
                               join course in dbContext.Course on subject.SubjectID equals course.SubjectID
                               join lecturer in dbContext.Teacher on course.Lecturer equals lecturer.TeacherID
                               join assistant in dbContext.Teacher on course.Assistant equals assistant.TeacherID
                               where course.SpecialityID == specialityId
                               select new CourseInfoDTO()
                               {
                                   SubjectID = subject.SubjectID,
                                   Semestr = course.Semestr,
                                   SubjectName = subject.SubjectName,
                                   LecturerFirstName = lecturer.TeacherFirstName,
                                   LecturerLastName = lecturer.TeacherLastName,
                                   LecturerDegree = lecturer.Degree,
                                   LecturerAcademicStatus = lecturer.AcademicStatus,
                                   LecturerDepartment = lecturer.Department,
                                   AssistantFirstName = assistant.TeacherFirstName,
                                   AssistantLastName = assistant.TeacherLastName,
                                   AssistantDegree = assistant.Degree,
                                   AssistantAcademicStatus = assistant.AcademicStatus,
                                   AssistantDepartment = assistant.Department,
                                   CourseCredit = course.CourseCredit,
                                   CourseWorkCredit = course.CourseWorkCredit,
                                   IsOnlyPractice = course.IsOnlyPractice
                               }).ToList();

                return courses;
            }
        }
    }
}