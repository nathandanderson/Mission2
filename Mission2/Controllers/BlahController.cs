using Microsoft.AspNetCore.Mvc;
using Mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Controllers
{
    //Maps the user to the index page upon arrival at the site.
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //This section sends something different based upon the request method, when getting the page it sends back the HTML, when posting it passes the information collected in the form.
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
