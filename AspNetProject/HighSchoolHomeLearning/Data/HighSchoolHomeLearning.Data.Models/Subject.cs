namespace HighSchoolHomeLearning.Data.Models
{
    using System.Collections.Generic;

    using HighSchoolHomeLearning.Data.Common.Models;

    public class Subject : BaseDeletableModel<int>
    {
        public Subject()
        {
            this.Teachers = new HashSet<ApplicationUser>();
            this.Lessons = new HashSet<Lesson>();
            this.Grades = new HashSet<GradeSubject>();
        }

        public string Name { get; set; }

        public virtual ICollection<ApplicationUser> Teachers { get; set; }

        public virtual ICollection<Lesson> Lessons { get; set; }

        public virtual ICollection<GradeSubject> Grades { get; set; }
    }
}
