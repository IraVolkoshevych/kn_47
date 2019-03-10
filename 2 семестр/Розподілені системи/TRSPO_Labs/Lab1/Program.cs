using System;
using System.Threading;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            //Варiант 25
            //Кiлькiть процесiв 1
            Console.WriteLine("Процеси 1");
            DoJob(11);

            Thread.Sleep(0);

            //Кiлькiть процесiв 2
            Console.WriteLine("\nПроцеси 2");
            DoJob(15);
        }

        static void DoJob(int count)
        {
            for (var i = 1; i <= count; i++)
            {
                var proccess = new Thread((index) =>
                {
                    Console.WriteLine("Proccess " + (int)index);
                });

                proccess.Start(i);
            }
        }
    }
}
