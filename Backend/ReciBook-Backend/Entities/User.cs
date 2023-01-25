using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Entities
{
    public class User : IdentityUser<int>
    {
        public User() : base() { }
        public DateTime CreationDate { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public ICollection<Recipe> Recipes { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<Library> Libraries { get; set; }
    }
}
