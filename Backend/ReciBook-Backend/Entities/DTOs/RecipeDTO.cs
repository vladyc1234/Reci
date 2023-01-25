using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class RecipeDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string RecipeFinal { get; set; }
        public DateTime CreationDate { get; set; }
        public int IdUser { get; set; }
        public int Rating { get; set; }

        public RecipeDTO(Recipe recipe)
        {
            this.Id = recipe.Id;
            this.Name = recipe.Name;
            this.RecipeFinal = recipe.RecipeFinal;
            this.CreationDate = recipe.CreationDate;
            this.IdUser = recipe.IdUser;
            this.Rating = recipe.Rating;
        }

        public static implicit operator RecipeDTO(ReviewDTO v)
        {
            throw new NotImplementedException();
        }
    }
}
