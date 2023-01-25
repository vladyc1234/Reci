using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.CreateDTO
{
    public class CreateRecipeDTO
    {


        public string Name { get; set; }
        public string RecipeFinal { get; set; }
        public DateTime CreationDate { get; set; }
        public int IdUser { get; set; }
        public int Rating { get; set; }


    }
}
