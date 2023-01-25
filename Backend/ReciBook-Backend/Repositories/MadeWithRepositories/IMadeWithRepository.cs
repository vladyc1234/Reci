using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.MadeWithRepositories
{
    public interface IMadeWithRepository : IGenericRepository<MadeWith>
    {
        Task<List<MadeWith>> GetAllMadeWith();
        Task<MadeWith> GetMadeWithById(int idRecipe);
    }
}
