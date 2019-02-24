namespace SystemOfCurricula.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SystemOfCurriculaContext : DbContext
    {
        public SystemOfCurriculaContext()
            : base("name=SystemOfCurriculaContext")
        {
        }

        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<CourseDependency> CourseDependency { get; set; }
        public virtual DbSet<Speciality> Speciality { get; set; }
        public virtual DbSet<Subject> Subject { get; set; }
        public virtual DbSet<Teacher> Teacher { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>()
                .HasMany(e => e.CourseDependency)
                .WithRequired(e => e.Course)
                .HasForeignKey(e => e.DependentSourseID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Course>()
                .HasMany(e => e.CourseDependency1)
                .WithRequired(e => e.Course1)
                .HasForeignKey(e => e.StartCourseID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Speciality>()
                .HasMany(e => e.Course)
                .WithRequired(e => e.Speciality)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Subject>()
                .HasMany(e => e.Course)
                .WithRequired(e => e.Subject)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Teacher>()
                .HasMany(e => e.Course)
                .WithRequired(e => e.Teacher)
                .HasForeignKey(e => e.Assistant)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Teacher>()
                .HasMany(e => e.Course1)
                .WithRequired(e => e.Teacher1)
                .HasForeignKey(e => e.Lecturer)
                .WillCascadeOnDelete(false);
        }
    }
}
