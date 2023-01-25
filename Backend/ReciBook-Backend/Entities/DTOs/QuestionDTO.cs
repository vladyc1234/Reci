using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class QuestionDTO
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string Text { get; set; }
        public int IdRecipe { get; set; }

        public QuestionDTO(Question question)
        {
            this.Id = question.Id;
            this.Text = question.Text;
            this.CreationDate = question.CreationDate;
            this.IdRecipe = question.IdRecipe;

        }
    }
}