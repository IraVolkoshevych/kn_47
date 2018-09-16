using System;
using RecipeBookSystem.BL.ModelProviders;
using RecipeBookSystem.DAL.Concrete.Repositories;
using RecipeBookSystem.Labs.Lab1;

namespace RecipeBookSystem.Labs
{
    class Program
    {
        static void Main(string[] args)
        {
            var lab1 = new LoadingData();
            var dishesList = lab1.GetDishes();
            foreach(var item in dishesList)
            {
                Console.WriteLine(item.Name);
            }
            Console.WriteLine();
            Console.WriteLine($"email - {lab1.GetUsers().Email} name - {lab1.GetUsers().Name}");
            Console.ReadKey();
        }
    }
}
