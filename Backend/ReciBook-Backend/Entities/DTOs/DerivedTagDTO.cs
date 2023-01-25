using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class DerivedTagDTO
    {
        public string NameTag { get; set; }
        public int IdDerivedRecipe { get; set; }

        public DerivedTagDTO(DerivedTag dt)
        {
            this.NameTag = dt.NameTag;
            this.IdDerivedRecipe = dt.IdDerivedRecipe;
        }
    }
}
