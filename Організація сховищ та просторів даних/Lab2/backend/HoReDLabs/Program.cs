using System;
using Entities.Services;
using System.Diagnostics;

namespace HoReDLabs
{
    class Program
    {
        public ILab2Service _labService;
        static void Main(string[] args)
        {
            var dbContext = new DbContext();
            var lab2 = new Lab2Sevice(dbContext);
            //DateTime start = DateTime.Now;
            //lab2.GetFormInfo();
            //TimeSpan timeItTook = DateTime.Now - start;
            //Console.WriteLine(timeItTook);
            Stopwatch sw = new Stopwatch();
            sw.Start();
            lab2.GetFormInfo();
            sw.Stop();
            Console.WriteLine("Elapsed={0}", sw.Elapsed);
            Console.ReadKey();
        }
    }
}
