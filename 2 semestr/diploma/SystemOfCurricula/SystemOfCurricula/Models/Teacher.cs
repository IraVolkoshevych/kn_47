namespace SystemOfCurricula.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Teacher")]
    public partial class Teacher
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Teacher()
        {
            Course = new HashSet<Course>();
            Course1 = new HashSet<Course>();
        }

        public int TeacherID { get; set; }

        [Required]
        [StringLength(30)]
        public string TeacherFirstName { get; set; }

        [Required]
        [StringLength(30)]
        public string TeacherLastName { get; set; }

        [Required]
        [StringLength(35)]
        public string Degree { get; set; }

        [Required]
        [StringLength(15)]
        public string AcademicStatus { get; set; }

        [Required]
        [StringLength(10)]
        public string Department { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Course> Course { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Course> Course1 { get; set; }
    }
}
