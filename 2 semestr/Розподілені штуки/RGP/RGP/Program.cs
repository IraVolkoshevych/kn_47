using System;
using System.Collections.Generic;
using System.Linq;

namespace RGP {
    class LandPlot {
        public string Name { get; set; }

        public double Price { get; set; }

        public double Size { get; set; }

        public bool Bought { get; set; }

        public string BoughtName { get; set; }
    }

    class Program {
        static void Main2( string [] args ) {
            var landPlots = new List<LandPlot>() {
                new LandPlot() { Name = "Some Area 1", Price = 123432, Size = 43 },
                new LandPlot() { Name = "Some Area 2", Price = 432534, Size = 87 },
                new LandPlot() { Name = "Some Area 3", Price = 5223, Size = 43 },
                new LandPlot() { Name = "Some Area 4", Price = 1243, Size = 56 },
                new LandPlot() { Name = "Some Area 5", Price = 6544, Size = 76, Bought = true, BoughtName = "Ivan" },
                new LandPlot() { Name = "Some Area 6", Price = 24444, Size = 54, Bought = true, BoughtName = "Taras" },
                new LandPlot() { Name = "Some Area 7", Price = 223000, Size = 43 },
                new LandPlot() { Name = "Some Area 8", Price = 23432, Size = 54, Bought = true, BoughtName = "Oleh" },
                new LandPlot() { Name = "Some Area 9", Price = 76556, Size = 23 },
            };

            Console.WriteLine( "All land plots:" );
            landPlots.ForEach(i => {
                Show( landPlots.IndexOf( i ), i );
            } );

            Console.WriteLine( "\nBought land plots:" );
            var boughtLandPlots = landPlots.Where( i => i.Bought ).ToList();
            boughtLandPlots.ForEach( i => {
                Show( boughtLandPlots.IndexOf( i ), i );
            } );

            Console.WriteLine( "\nNot bought land plots:" );
            var notBoughtLandPlots = landPlots.Where( i => !i.Bought ).ToList();
            boughtLandPlots.ForEach( i => {
                Show( notBoughtLandPlots.IndexOf( i ), i );
            } );
        }

        static void Show( int index, LandPlot item) {
            Console.Write( "{0}." + index );
            Console.Write( "\tName: " + item.Name);
            Console.Write( "\tSize: " + item.Size );
            Console.Write( "\tPrice: " + item.Price );
            if (item.Bought) {
                Console.Write( "\tBought By: " + item.BoughtName );
            }
            Console.WriteLine();
        }
    }
}
