using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class Tag
    {
        [Key]
        public string Name { get; set; }
        public virtual ICollection<RecipeTag> RecipeTags { get; set; }
        public virtual ICollection<DerivedTag> DerivedTags { get; set; }
    }
}
