using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.CreateDTO
{
    public class CreatePullRecipeDTO
    {
        public DateTime CreationDate { get; set; }
        public int IdRecipe { get; set; }
    }
}
