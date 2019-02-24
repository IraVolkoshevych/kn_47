using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SystemOfCurricula.Models;
namespace SystemOfCurricula.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            using (var db = new SystemOfCurriculaContext())
            {
                var teachers = db.Set<Teacher>();
                teachers.Add(new Teacher {
                    TeacherFirstName = "Ihor",
                    TeacherLastName = "Kohut"
                });

                db.SaveChanges();

                var teschersForRemoving = teachers.Where(
                    teacher => teacher.TeacherFirstName == "Ihor"
                    && teacher.TeacherLastName == "Kohut");
                teachers.RemoveRange(teschersForRemoving);

                db.SaveChanges();
            }
            
            return View();
        }
    }
}
