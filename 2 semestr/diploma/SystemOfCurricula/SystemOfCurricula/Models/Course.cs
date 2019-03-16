namespace SystemOfCurricula.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Course")]
    public partial class Course
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Course()
        {
            CourseDependency = new HashSet<CourseDependency>();
            CourseDependency1 = new HashSet<CourseDependency>();
        }

        public int CourseID { get; set; }

        public int SubjectID { get; set; }

        public int SpecialityID { get; set; }

        public int Lecturer { get; set; }

        public int Assistant { get; set; }

        public double CourseCredit { get; set; }

        public double CourseWorkCredit { get; set; }

        public bool IsOnlyPractice { get; set; }

        public int Semestr { get; set; }

        public virtual Teacher Teacher { get; set; }

        public virtual Teacher Teacher1 { get; set; }

        public virtual Speciality Speciality { get; set; }

        public virtual Subject Subject { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CourseDependency> CourseDependency { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CourseDependency> CourseDependency1 { get; set; }
    }
}
