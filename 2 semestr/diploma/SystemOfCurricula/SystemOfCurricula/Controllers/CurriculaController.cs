using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SystemOfCurricula.Services;
using System.Web.Http.Cors;

namespace SystemOfCurricula.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CurriculaController : ApiController
    {

        #region Get courses info

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

            var startCourses = CurricilaService.LoadStartCourses(courseId);
            var dependentCourses = CurricilaService.LoadDependentCourses(courseId);

            var courseDependencies = startCourses.Concat(dependentCourses);

            var courseInfoAndDependencies = new
            {
                CourseInfo = courseInfo,
                CourseDependencies = courseDependencies
            };

            return Ok(courseInfoAndDependencies);
        }

        [Route("api/GetSpecialities")]
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult LoadSpecialities()
        {
            var specialities = CurricilaService.LoadSpecialities();

            return Ok(specialities);
        }

        #endregion

        #region Creating

        [Route("api/SaveSpeciality")]
        [HttpPost]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult SaveSpeciality(SpecialityDTO model)
        {
            CurricilaService.SaveSpeciality(model);
            return Ok();
        }

        #endregion

    }
}
