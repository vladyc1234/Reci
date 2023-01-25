using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class ReviewDTO
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string Text { get; set; }
        public int IdRecipe { get; set; }

        public ReviewDTO(Review review)
        {
            this.Id = review.Id;
            this.CreationDate = review.CreationDate;
            this.Text = review.Text;
            this.IdRecipe = review.IdRecipe;
        }
    }
}
