namespace HighSchoolHomeLearning.Data.Models
{
    using System.Collections.Generic;

    using HighSchoolHomeLearning.Data.Common.Models;

    public class Question : BaseDeletableModel<int>
    {
        public Question()
        {
            this.Answers = new HashSet<Answer>();
        }

        public string Content { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public int LessonId { get; set; }

        public virtual Lesson Lesson { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }
    }
}
