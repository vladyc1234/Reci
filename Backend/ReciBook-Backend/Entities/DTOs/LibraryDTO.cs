using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities.DTOs
{
    public class LibraryDTO
    {
        public int IdRecipe { get; set; }
        public int IdUser { get; set; }
        public LibraryDTO(Library library)
        {
            this.IdRecipe = library.IdRecipe;
            this.IdUser = library.IdUser;
        }
    }
}
