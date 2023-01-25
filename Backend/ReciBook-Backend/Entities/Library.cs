using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class Library
    {
        public int IdRecipe { get; set; }
        public int IdUser { get; set; }
        public virtual Recipe Recipe { get; set; }
        public virtual User User { get; set; }
        
    }
}
