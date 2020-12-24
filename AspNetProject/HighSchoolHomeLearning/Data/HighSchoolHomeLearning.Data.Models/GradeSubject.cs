namespace HighSchoolHomeLearning.Data.Models
{
    public class GradeSubject
    {
        public int Id { get; set; }

        public int GradeId { get; set; }

        public virtual Grade Grade { get; set; }

        public int SubjectId { get; set; }

        public virtual Subject Subject { get; set; }
    }
}
