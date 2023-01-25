using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class CookedWithDTO
    {
        public string Name { get; set; }
        public int IdRecipe { get; set; }

        public CookedWithDTO(CookedWith cooked)
        {
            this.Name = cooked.Name;
            this.IdRecipe = cooked.IdRecipe;
        }



    }
}
