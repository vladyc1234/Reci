using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class UtensilDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public UtensilDTO(Utensil utensil)
        {
            this.Name = utensil.Name;
            this.Description = utensil.Description;
        }
    }
}
