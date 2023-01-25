using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class PullRecipeDTO
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public int IdRecipe { get; set; }
    
        public PullRecipeDTO(PullRecipe pullrecipe)
        {
            this.Id = pullrecipe.Id;
            this.CreationDate = pullrecipe.CreationDate;
            this.IdRecipe = pullrecipe.IdRecipe;
        }
    }
}
