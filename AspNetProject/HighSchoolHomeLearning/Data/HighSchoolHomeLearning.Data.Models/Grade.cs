namespace HighSchoolHomeLearning.Data.Models
{
    using System.Collections.Generic;

    using HighSchoolHomeLearning.Data.Common.Models;

    public class Grade : BaseModel<int>
    {
        public Grade()
        {
            this.Subjects = new HashSet<GradeSubject>();
            this.Students = new HashSet<ApplicationUser>();
        }

        public GradeNumber Number { get; set; }

        public virtual ICollection<GradeSubject> Subjects { get; set; }

        public virtual ICollection<ApplicationUser> Students { get; set; }
    }
}
