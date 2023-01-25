using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.RecipeRepositories
{
    public interface IRecipeRepository : IGenericRepository<Recipe>
    {
        Task<List<Recipe>> GetAllRecipes();
        Task<Recipe> GetRecipeById(int id);
        Task<List<Recipe>> GetAllRecipesByName(string name);
    }
}
