using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.UtensilRepositories
{
    public interface IUtensilRepository : IGenericRepository<Utensil>
    {
        Task<List<Utensil>> GetAllUtensils();
        Task<List<Utensil>> GetAllByName(string name);
        Task<Utensil> GetUtensilByName(string name);
    }
}
