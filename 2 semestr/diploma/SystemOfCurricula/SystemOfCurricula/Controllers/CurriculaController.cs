using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SystemOfCurricula.Services;

namespace SystemOfCurricula.Controllers
{
    public class CurriculaController : ApiController
    {
        /// <summary>
        /// Gets full information about courses by speciality in database
        /// </summary>
        /// <returns>List of instances of the class CourseInfo</returns>
        /// <example>http://localhost:*****/api/CoursesInfoList/</example>
        [Route("api/GetCoursesInfoList/{specialityId}")]
        [HttpGet]
        public IHttpActionResult GetCoursesInfoList(int specialityId)
        {
            return Ok(CurricilaService.LoadCoursesInfoForPlan(specialityId));
        }

        [Route("api/GetStartCourses/{courseId}")]
        [HttpGet]
        public IHttpActionResult GetStartCourses(int courseId)
        {
            return Ok(CurricilaService.LoadStartCourses(courseId));
        }

        [Route("api/GetDependentCourses/{courseId}")]
        [HttpGet]
        public IHttpActionResult GetDependentCourses(int courseId)
        {
            return Ok(CurricilaService.LoadDependentCourses(courseId));
        }

        [Route("api/GetCourseDependencies/{courseId}")]
        [HttpGet]
        public IHttpActionResult GetCourseDependencies(int courseId)
        {
            var startCourses = CurricilaService.LoadStartCourses(courseId);
            var dependentCourses = CurricilaService.LoadDependentCourses(courseId);

            var courseDependencies = startCourses.Concat(dependentCourses);

            return Ok(courseDependencies);
        }

        [Route("api/GetCourseInfo/{courseId}")]
        [HttpGet]
        public IHttpActionResult GetCourseInfo(int courseId)
        {
            var courseInfo = CurricilaService.LoadCourseInfo(courseId);

            return Ok(courseInfo);
        }
    }
}
