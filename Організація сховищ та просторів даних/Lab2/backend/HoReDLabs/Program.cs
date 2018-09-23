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
            var lab2NotStar = new Lab2Sevice(dbContext);
            Stopwatch sw = new Stopwatch();
            sw.Start();
            lab2NotStar.GetFormInfo();
            sw.Stop();
            Console.WriteLine("star = {0}", sw.Elapsed);

            dbContext.SetConnectionString("MyConStringSTORE_NOTSTAR");
            sw.Reset();

            var lab2Star = new Lab2Sevice(dbContext);
            sw.Start();
            lab2Star.GetFormInfo();
            sw.Stop();
            Console.WriteLine("snowflake = {0}", sw.Elapsed);
            Console.ReadKey();
        }
    }
}
