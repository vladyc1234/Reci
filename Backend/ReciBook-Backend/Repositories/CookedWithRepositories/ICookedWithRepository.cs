using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.CookedWithRepositories
{
    public interface ICookedWithRepository : IGenericRepository<CookedWith>
    {
        Task<List<CookedWith>> GetAllCookedWith();
        Task<CookedWith> GetCookedWithById(int idRecipe);
    }
}
