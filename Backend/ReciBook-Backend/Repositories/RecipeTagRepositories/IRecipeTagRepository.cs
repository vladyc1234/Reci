using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.RecipeTagRepositories
{
    public interface IRecipeTagRepository : IGenericRepository<RecipeTag>
    {
        Task<List<RecipeTag>> GetAllRecipeTag();
        Task<RecipeTag> GetRecipeTagById(int idRecipe);
    }
}
