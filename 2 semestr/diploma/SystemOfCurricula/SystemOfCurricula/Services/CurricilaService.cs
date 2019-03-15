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
        //Update this one, need to remomove redundant properties from CourseInfoDTO
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
                                   CourseID = course.CourseID,
                                   Semestr = course.Semestr,
                                   CourseName = subject.SubjectName,
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
                                   IsOnlyPractice = course.IsOnlyPractice,
                                   CourseType = subject.SubjectType
                               }).ToList();

                return courses;
            }
        }

        public static IList<CourseDependentDTO> LoadStartCourses(int courseId)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var courses = (from startSubject in dbContext.Subject
                               join startCourse in dbContext.Course 
                                    on startSubject.SubjectID equals startCourse.SubjectID
                               join courseDependency in dbContext.CourseDependency 
                                    on startCourse.CourseID equals courseDependency.StartCourseID
                               join dependentCourse in dbContext.Course
                                    on courseDependency.DependentCourseID equals dependentCourse.CourseID
                               where dependentCourse.CourseID == courseId
                               select new CourseDependentDTO()
                               {
                                   CourseId = startCourse.CourseID,
                                   SubjectName = startSubject.SubjectName,
                                   SubjectType = startSubject.SubjectType,
                                   Semestr = startCourse.Semestr,
                                   CourseCredit = startCourse.CourseCredit,
                                   IsStartCourse = true
                               }).ToList();

                return courses;
            }              
        }

        public static IList<CourseDependentDTO> LoadDependentCourses(int courseId)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var courses = (from startCourse in dbContext.Course
                               join courseDependency in dbContext.CourseDependency
                                    on startCourse.CourseID equals courseDependency.StartCourseID
                               join dependentCourse in dbContext.Course
                                    on courseDependency.DependentCourseID equals dependentCourse.CourseID
                               join dependentSubject in dbContext.Subject
                                    on dependentCourse.SubjectID equals dependentSubject.SubjectID
                               where startCourse.CourseID == courseId
                               select new CourseDependentDTO()
                               {
                                   CourseId = dependentCourse.CourseID,
                                   SubjectName = dependentSubject.SubjectName,
                                   SubjectType = dependentSubject.SubjectType,
                                   Semestr = dependentCourse.Semestr,
                                   CourseCredit = dependentCourse.CourseCredit,
                                   IsStartCourse = false
                               }).ToList();

                return courses;
            }
        }

        public static CourseInfoDTO LoadCourseInfo(int courseId)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var courseInfo = (from subject in dbContext.Subject
                            join course in dbContext.Course on subject.SubjectID equals course.SubjectID
                            join lecturer in dbContext.Teacher on course.Lecturer equals lecturer.TeacherID
                            join assistant in dbContext.Teacher on course.Assistant equals assistant.TeacherID
                            where course.CourseID == courseId
                               select new CourseInfoDTO()
                    {
                        CourseID = subject.SubjectID,
                        Semestr = course.Semestr,
                        CourseName = subject.SubjectName,
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
                               }).ToList().First();

                return courseInfo;
            }
        }

        public static List<SpecialityDTO> LoadSpecialities()
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var specialities = dbContext.Speciality.Select(s => new SpecialityDTO
                {
                    SpecialityId = s.SpecialityID,
                    SpecialityName = s.SpecialityName
                }).ToList();

                return specialities;
            }
        }

        public static void SaveSpeciality(SpecialityDTO speciality)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var newSpeciality = new Speciality()
                {
                    SpecialityName = speciality.SpecialityName,
                    StartYear = new DateTime(speciality.StartYear, 1, 1)
            };

                dbContext.Speciality.Add(newSpeciality);
                dbContext.SaveChanges();
            }
        }
    }

    #region  helper Classes

    public class SpecialityDTO
    {
        public int SpecialityId { get; set; }
        public string SpecialityName { get; set; }
        public int StartYear { get; set; }
    }

    #endregion
}