using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class PullRecipe
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public int IdRecipe { get; set; }
        public virtual Recipe Recipe { get; set; }
    }
}
