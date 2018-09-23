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
            int labNumber;
            m: Console.WriteLine("Input number of lab");
            labNumber = Convert.ToInt32(Console.ReadLine());
            var dbContext = new DbContext();
            Stopwatch sw = new Stopwatch();
            switch (labNumber)
            {
                case 2:
                        var lab2NotStar = new Lab2Sevice(dbContext);
                        sw.Start();
                        lab2NotStar.GetFormInfo();
                        sw.Stop();
                        Console.WriteLine("star = {0}", sw.Elapsed);

                        dbContext.SetConnectionString("MyConStringSTORE_STAR");
                        sw.Reset();

                        var lab2Star = new Lab2Sevice(dbContext);
                        sw.Start();
                        lab2Star.GetFormInfo();
                        sw.Stop();
                        Console.WriteLine("snowflake = {0}", sw.Elapsed);
                    break;
                case 3:
                    dbContext.SetConnectionString("MyConString");
                    var lab3NotStar = new Lab2Sevice(dbContext);
                    sw.Reset();

                    sw.Start();
                    lab3NotStar.GetFormInfo();
                    sw.Stop();
                    Console.WriteLine("time = {0}", sw.Elapsed);
                    break;
                default:
                    Console.WriteLine("Input correct lab number");
                    break;
            };
            goto m;
            Console.ReadKey();
        }
    }
}
