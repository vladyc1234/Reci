using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class DerivedRecipe
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string Name { get; set; }
        public string DerivedRecipeFile { get; set; }
        public int IdRecipe { get; set; }
        public int Rating { get; set; }
        public virtual Recipe Recipe { get; set; }
        public virtual ICollection<DerivedTag> DerivedTags { get; set; }
    }
}
