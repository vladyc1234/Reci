using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.DerivedTagRepositories
{
   public interface IDerivedTagRepository : IGenericRepository<DerivedTag>
    {
        Task<List<DerivedTag>> GetAllDerivedTag();
        Task<DerivedTag> GetDerivedTagById(int idRecipe);
    }
}
