namespace HighSchoolHomeLearning.Data.Models
{
    using System.Collections.Generic;

    using HighSchoolHomeLearning.Data.Common.Models;

    public class Lesson : BaseDeletableModel<int>
    {
        public Lesson()
        {
            this.Questions = new HashSet<Question>();
        }

        public string Title { get; set; }

        public string TextbookPath { get; set; }

        public string VideoPath { get; set; }

        public int SubjectId { get; set; }

        public virtual Subject Subject { get; set; }

        public virtual ICollection<Question> Questions { get; set; }
    }
}
