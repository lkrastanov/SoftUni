namespace HighSchoolHomeLearning.Data.Models
{
    using HighSchoolHomeLearning.Data.Common.Models;

    public class Answer : BaseDeletableModel<int>
    {
        public int QuestionId { get; set; }

        public virtual Question Question { get; set; }

        public int? ParentId { get; set; }

        public Answer Parent { get; set; }

        public string Content { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
