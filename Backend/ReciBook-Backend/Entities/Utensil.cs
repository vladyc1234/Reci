using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class Utensil
    {
        [Key]
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<CookedWith> CookedWiths { get; set; }
    }
}
