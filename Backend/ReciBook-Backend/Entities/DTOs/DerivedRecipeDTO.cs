using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class DerivedRecipeDTO
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string Name { get; set; }
        public string DerivedRecipeFile { get; set; }
        public int IdRecipe { get; set; }
        public int Rating { get; set; }

        public DerivedRecipeDTO(DerivedRecipe derRec)
        {
            this.Id = derRec.Id;
            this.CreationDate = derRec.CreationDate;
            this.Name = derRec.Name;
            this.DerivedRecipeFile = derRec.DerivedRecipeFile;
            this.IdRecipe = derRec.IdRecipe;
            this.Rating = derRec.Rating;
        }
    }
}
