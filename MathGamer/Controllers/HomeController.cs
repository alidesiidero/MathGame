using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MathGamer.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Sayisal()
        {
            return View();
        }

        public ActionResult Fonksiyon()
        {
            return View();
        }
    }
}