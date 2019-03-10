using System;
using System.Threading.Tasks;

namespace Lab2
{
    class Program
    {
        static void Main(string[] args)
        {
            //Варiант 25 - 15 = 10
            var thread1 = new Task<double>(() =>
            {
                return function(4);
            });

            var thread2 = new Task<double>(() =>
            {
                return function(1);
            });

            thread1.Start();
            thread2.Start();

            var fb = thread1.Result;
            var fa = thread2.Result;
            Console.WriteLine("Результат F(b) - F(a) = " + (fb - fa));

        }

        static double function(double x)
        {
            return (x - 1) / (x + 1);
        }
    }
}
