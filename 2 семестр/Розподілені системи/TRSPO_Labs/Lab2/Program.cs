using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Lab2
{
    class Program
    {
        static void Main(string[] args)
        {
            //Варiант 25
            int[] Ai = new int[] { 83, -2, 5654, 76, 67, 54, 76, 2333, 4, 5, -13, 54, -43, 653, -123, 5, 854, 12, 54, 13, 64, 432, 54, 234, 543, -3444, 763, 153, 124, 653 };

            var thread1 = new Task<int>(() =>
            {
                Console.WriteLine("Обрахунок додатнiх...");
                var res = Ai.Count(i => i > 0);
                Console.WriteLine("К-сть додатнiх k1 = " + res);
                return res;
            });

            var thread2 = new Task<int>(() =>
            {
                Console.WriteLine("Обрахунок вiд'ємних...");
                var res = Ai.Count(i => i < 0);
                Console.WriteLine("К-сть вiд'ємних k2 = " + res);
                return res;
            });

            thread1.Start();
            thread2.Start();

            var k1 = thread1.Result;
            var k2 = thread2.Result;
            Console.WriteLine("Рiзниця k1 - k2 = " + (k1 - k2));
        }
    }
}
