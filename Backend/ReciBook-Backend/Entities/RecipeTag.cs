using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class RecipeTag
    {
        public string NameTag { get; set; }
        public int IdRecipe { get; set; }
        public virtual Recipe Recipe { get; set; }
        public virtual Tag Tag { get; set; }
    }
}
