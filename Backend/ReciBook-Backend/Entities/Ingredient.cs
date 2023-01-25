using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class Ingredient
    {
        [Key]
        public string Name { get; set; }
        public float Price { get; set; }
        public virtual ICollection<MadeWith> MadeWiths { get; set; }
    }
}
