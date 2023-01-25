using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.DerivedRecipeRepositories
{
    public interface IDerivedRecipeRepository : IGenericRepository<DerivedRecipe>
    {
            Task<List<DerivedRecipe>> GetAllDerivedRecipes();
            Task<DerivedRecipe> GetDerivedRecipeById(int id);
            Task<List<DerivedRecipe>> GetAllDerivedRecipesByName(string name);
    }
}
