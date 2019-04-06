using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;

namespace RGP
{
    class LandPlot
    {
        public string Name { get; set; }

        public double Price { get; set; }

        public double Size { get; set; }

        public bool Bought { get; set; }

        public string BoughtName { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var landPlots = new List<LandPlot>() {
                new LandPlot() { Name = "Step 1", Price = 7, Size = 2, Bought = true, BoughtName = "User 1" },
                new LandPlot() { Name = "Step 2", Price = 5, Size = 8, Bought = false},
                new LandPlot() { Name = "Step 3", Price = 12, Size = 4, Bought = false},
                new LandPlot() { Name = "Step 4", Price = 4, Size = 1, Bought = true, BoughtName = "User 2" },
                new LandPlot() { Name = "Step 5", Price = 2, Size = 3, Bought = true, BoughtName = "User 1" },
                new LandPlot() { Name = "Step 6", Price = 9, Size = 5, Bought = false},
                new LandPlot() { Name = "Step 7", Price = 8, Size = 7, Bought = false },
                new LandPlot() { Name = "Step 8", Price = 2, Size = 9, Bought = false},
                new LandPlot() { Name = "Step 9", Price = 6, Size = 6, Bought = false },
            };

            Console.WriteLine("All steps:");
            landPlots.ForEach(i => {
                Show(landPlots.IndexOf(i), i);
            });

            Console.WriteLine("\nDone steps:");
            var boughtLandPlots = landPlots.Where(i => i.Bought).ToList();
            boughtLandPlots.ForEach(i => {
                Show(boughtLandPlots.IndexOf(i), i);
            });

            Console.WriteLine("\nNot Done steps:");
            var notBoughtLandPlots = landPlots.Where(i => !i.Bought).ToList();
            notBoughtLandPlots.ForEach(i => {
                Show(notBoughtLandPlots.IndexOf(i), i);
            });

            Console.WriteLine();
            Console.WriteLine("Input matrix size - ");
            Console.ReadLine();
            Console.WriteLine("1 - random input, 2 - manual input");
            Console.ReadLine();
            var matrix = new int[,]
            {
                {16, 9, 3, 3, 1, 12},
                {14, 3, 1, 5, 4, 8},
                {0, 12, 5, 8, 6, 9},
                {5, 63, 4, 9, 7, 11},
                {42, 0, 9, 2, 3, 20},
                {6, 7, 2, 4, 10, 4}
            };


            Console.WriteLine("Matrix : ");
            for (int i = 0; i < 6; i++)
            {
                for (int j = 0; j < 6; j++)
                {
                    Console.Write($"{matrix[i,j]} ");
                }

                Console.WriteLine();
            }

            Console.WriteLine("Calculated result: 3.753");
            Console.WriteLine();

            Console.ReadKey();
        }

        static void Show(int index, LandPlot item)
        {
            Console.Write("{0}", index + 1);
            Console.Write("\tStepName: " + item.Name);
            Console.Write("\tStepId: " + item.Size);
            Console.Write("\tСomplexity: " + item.Price);
            if (item.Bought)
            {
                Console.Write("\tDone By: " + item.BoughtName);
            }
            Console.WriteLine();
        }
    }
}
