using System;
using System.Collections.Generic;
using System.Linq;

namespace is_lab_3
{
    class Subject
    {
        public string Name { get; set; }
    }

    class Specialty
    {
        public string Name { get; set; }

        public double MinimumRating { get; set; }

        public List<Subject> Subjects { get; set; }
    }

    class University
    {
        public string Name { get; set; }

        public List<Specialty> Specialties { get; set; }
}

    class Program
    {
        static void Main(string[] args)
        {
            var subjects = new List<Subject>()
            {
                new Subject() { Name = "Ukrainian language" },
                new Subject() { Name = "English language" },
                new Subject() { Name = "Mathematics" },
                new Subject() { Name = "Physics" },
                new Subject() { Name = "Geography" }
            };

            var universities = new List<University>()
            {
                new University() {
                    Name = "Lviv Polytechnic",
                    Specialties = new List<Specialty>()
                    {
                        new Specialty()
                        {
                            Name = "KN",
                            MinimumRating = 700,
                            Subjects = new List<Subject>()
                            {
                                subjects[0],
                                subjects[1],
                                subjects[2]
                            }
                        },
                        new Specialty()
                        {
                            Name = "PI",
                            MinimumRating = 750,
                            Subjects = new List<Subject>()
                            {
                                subjects[0],
                                subjects[1],
                                subjects[3]
                            }
                        },
                        new Specialty()
                        {
                            Name = "Economic",
                            MinimumRating = 790,
                            Subjects = new List<Subject>()
                            {
                                subjects[0],
                                subjects[1],
                                subjects[2]
                            }
                        }
                    }
                },
                new University() {
                    Name = "Ivan Franko National University",
                    Specialties = new List<Specialty>()
                    {
                        new Specialty()
                        {
                            Name = "KN",
                            MinimumRating = 700,
                            Subjects = new List<Subject>()
                            {
                                subjects[0],
                                subjects[1],
                                subjects[2]
                            }
                        },
                        new Specialty()
                        {
                            Name = "Economic",
                            MinimumRating = 800,
                            Subjects = new List<Subject>()
                            {
                                subjects[0],
                                subjects[1],
                                subjects[2]
                            }
                        }
                    }
                },
                new University() {
                    Name = "UCU",
                    Specialties = new List<Specialty>()
                    {
                        new Specialty()
                        {
                            Name = "KN",
                            MinimumRating = 910,
                            Subjects = new List<Subject>()
                            {
                                subjects[0],
                                subjects[1],
                                subjects[3]
                            }
                        }
                    }
                }
            };
            
            for (var i = 0; i < subjects.Count; i++)
            {
                Console.WriteLine(string.Format("{0} - {1}", i, subjects[i].Name));
            }

            Console.WriteLine("Please enter subject numbers:");
            var enteredSubjects = new List<Subject>();

            while (true)
            {
                var subjectInputStr = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(subjectInputStr))
                {
                    break;
                }

                var subjectInput = Convert.ToInt32(subjectInputStr);
                if (subjectInput < 0 || subjectInput > subjects.Count - 1)
                {
                    break;
                } 
                else
                {
                    enteredSubjects.Add(subjects[subjectInput]);
                }
            }

            Console.Write("Please enter your rating: ");
            var rating = Convert.ToDouble(Console.ReadLine());

            Console.Write("Please enter specialty: ");
            var specialty = Console.ReadLine();

            var results = universities.Where(u => 
                u.Specialties
                    .Where(s => 
                        s.Name == specialty 
                        && s.MinimumRating <= rating
                        && !s.Subjects.Except(enteredSubjects).Any()).Any());

            if (results.Any())
            {
                Console.WriteLine("\n\nAvailable universities: ");

                foreach (var item in results)
                {
                    Console.WriteLine(item.Name);
                }
            }
            else
            {
                Console.WriteLine("Sorry, nothing found...");
            }
        }
    }
}
