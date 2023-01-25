using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class DerivedReceipeDTO
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string Text { get; set; }
        public int IdRecipe { get; set; }
    
        public DerivedReceipeDTO(Comment comment)
        {
            this.Id = comment.Id;
            this.CreationDate = comment.CreationDate;
            this.Text = comment.Text;
            this.IdRecipe = comment.IdRecipe;
        }
    }
}
