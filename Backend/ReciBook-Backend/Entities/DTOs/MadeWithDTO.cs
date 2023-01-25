using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class MadeWithDTO
    {
        public string Name { get; set; }
        public int IdRecipe { get; set; }

        public MadeWithDTO(MadeWith made)
        {
            this.Name = made.Name;
            this.IdRecipe = made.IdRecipe;
        }
    }
}
