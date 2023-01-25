using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class RecipeTagDTO
    {
        public string NameTag { get; set; }
        public int IdRecipe { get; set; }

        public RecipeTagDTO(RecipeTag rt)
        {
            this.NameTag = rt.NameTag;
            this.IdRecipe = rt.IdRecipe;
        }
    }
}
