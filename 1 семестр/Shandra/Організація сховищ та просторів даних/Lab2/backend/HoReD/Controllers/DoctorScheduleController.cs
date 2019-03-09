﻿using System;
using System.Collections.Generic;
using System.Web.Http;
using Entities;
using Entities.Services;
using HoReD.AuthFilters;
namespace HoReD.Controllers
{
    /// <summary>
    /// Controller that represents information about doctors schedule
    /// </summary>
   
    public class DoctorScheduleController : ApiController
    {
        private readonly IDoctorService _doctorService;
        
        public DoctorScheduleController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        /// <summary>
        /// Gets doctor's schedule  from database
        /// </summary>
        /// <returns>List of instances of the worcing hour of Doctor</returns>
        /// <example>http://localhost:*****/GetDoctorSchedule/{doctorId}</example>
        /// 

        [HttpGet]
        [TokenAuthenticate(Role = "patient,doctor,admin")]
        [Route("GetDoctorSchedule/{doctorId}")]
        public IHttpActionResult GetDoctorSchedule(int doctorId)
        {
            return Ok(_doctorService.GetDoctorSchedule(doctorId));
        }

    }
}
