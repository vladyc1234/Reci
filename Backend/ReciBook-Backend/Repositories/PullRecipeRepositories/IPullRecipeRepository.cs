using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.PullRecipeRepositories
{
    public interface IPullRecipeRepository : IGenericRepository<PullRecipe>
    {
        Task<List<PullRecipe>> GetAllPullRecipes();
        Task<PullRecipe> GetPullRecipeById(int id);
    }
}
