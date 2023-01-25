using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.RecipeRepositories
{
    public class RecipeRepository : GenericRepository<Recipe>, IRecipeRepository
    {

        public RecipeRepository(AppDbContext context) : base(context) { }


        public async Task<List<Recipe>> GetAllRecipes()
        {
            return await _context.Recipes.ToListAsync();
        }
        public async Task<Recipe> GetRecipeById(int id)
        {
            return await _context.Recipes.Where(a => a.Id.Equals(id)).FirstOrDefaultAsync();
        }
        public async Task<List<Recipe>> GetAllRecipesByName(string name)
        {
            return await _context.Recipes.Where(a => a.Name.Equals(name)).ToListAsync();
        }
    }
}
