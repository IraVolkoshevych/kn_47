namespace SystemOfCurricula.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CourseDependency")]
    public partial class CourseDependency
    {
        public int CourseDependencyID { get; set; }

        public int StartCourseID { get; set; }

        public int DependentCourseID { get; set; }

        public virtual Course Course { get; set; }

        public virtual Course Course1 { get; set; }
    }
}
