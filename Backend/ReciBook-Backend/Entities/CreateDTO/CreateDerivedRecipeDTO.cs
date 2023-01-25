using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.CreateDTO
{
    public class CreateDerivedRecipeDTO
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string Name { get; set; }
        public string DerivedRecipeFile { get; set; }
        public int IdRecipe { get; set; }
        public int Rating { get; set; }
    }
}
