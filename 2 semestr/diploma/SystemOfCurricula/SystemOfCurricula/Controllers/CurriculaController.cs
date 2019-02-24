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
    }
}
