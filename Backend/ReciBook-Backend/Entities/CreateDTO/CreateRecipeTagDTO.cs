using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.CreateDTO
{
    public class CreateRecipeTagDTO
    {
        public string NameTag { get; set; }
        public int IdRecipe { get; set; }
    }
}
