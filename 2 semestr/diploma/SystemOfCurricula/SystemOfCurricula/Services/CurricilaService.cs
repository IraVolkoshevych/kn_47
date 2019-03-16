using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc.Html;
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

        public static List<CourseDTO> LoadCoursesForMakingDependencies(int semestr, int specialityId)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var courses = (from subject in dbContext.Subject
                    join course in dbContext.Course on subject.SubjectID equals course.SubjectID
                    where course.Semestr <= semestr && course.SpecialityID == specialityId
                    select new CourseDTO()
                    {
                        CourseId = course.CourseID,
                        CourseName = subject.SubjectName
                    }).OrderBy(c => c.CourseName).ToList();

                return courses;
            }
        }

        public static List<SubjectDTO> LoadSubjects(int specialityId)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var existantSubjects = (from subject in dbContext.Subject
                    join course in dbContext.Course on subject.SubjectID equals course.SubjectID
                    where course.SpecialityID == specialityId
                    select new SubjectDTO()
                    {
                        SubjectId = subject.SubjectID,
                        SubjectName = subject.SubjectName
                    }).Select(s => s.SubjectId).ToList();

                var subjects = dbContext.Subject.Where(s => !existantSubjects.Contains(s.SubjectID)).Select(s => new SubjectDTO()
                {
                    SubjectId = s.SubjectID,
                    SubjectName = s.SubjectName
                }).OrderBy(s => s.SubjectName).ToList();

                return subjects;
            }
        }

        public static List<string> LoadDepartments()
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var departments = dbContext.Teacher.Select(t => t.Department).Where(t => t != "").Distinct().ToList();

                return departments;
            }
        }

        public static List<TeacherDTO> LoadTeachers(string department)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var teachers = dbContext.Teacher.Where(t => t.Department == department).
                    Select(t => new TeacherDTO()
                    {
                        TeacherId = t.TeacherID,
                        TeacherName = t.TeacherLastName + " " + t.TeacherFirstName
                    }).OrderBy(t => t.TeacherName).ToList();

                return teachers;
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

        public static string SaveCourse(CourseInfoDTO courseInfo)
        {
            using (var dbContext = new SystemOfCurriculaContext())
            {
                var creditSum = dbContext.Course.Where(course => 
                        course.Semestr == courseInfo.Semestr && course.SpecialityID == courseInfo.SpecialityID).ToList()
                    .Select(c => c.CourseCredit + c.CourseWorkCredit).Sum();

                var probablyCreditSum = creditSum + courseInfo.CourseWorkCredit + courseInfo.CourseCredit;

                if (probablyCreditSum <= 30)
                {
                    var course  = new Course()
                    {
                        SubjectID = courseInfo.CourseID,
                        SpecialityID = courseInfo.SpecialityID,
                        Lecturer = courseInfo.LecturerID,
                        Assistant = courseInfo.AssistantID,
                        Semestr = courseInfo.Semestr,
                        CourseCredit = courseInfo.CourseCredit,
                        CourseWorkCredit = courseInfo.CourseWorkCredit,
                        IsOnlyPractice = courseInfo.IsOnlyPractice
                    };

                    dbContext.Course.Add(course);

                    foreach (var startCourse in courseInfo.StartCourses)
                    {
                        dbContext.CourseDependency.Add(new CourseDependency()
                        {
                            StartCourseID = startCourse,
                            DependentCourseID = course.CourseID
                        });
                    }

                    dbContext.SaveChanges();
                    return "";
                }
                else
                {
                    return "Сума кредитів семестру не має перевищувати 30.";
                }
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

    public class SubjectDTO
    {
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
    }

    public class CourseDTO
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
    }

    public class TeacherDTO
    {
        public int TeacherId { get; set; }
        public string TeacherName { get; set; }
    }

    #endregion
}