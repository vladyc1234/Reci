using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.PullRecipeRepositories
{
    public class PullRecipeRepository : GenericRepository<PullRecipe>, IPullRecipeRepository
    {
        public PullRecipeRepository(AppDbContext context) : base(context) { }
        public async Task<List<PullRecipe>> GetAllPullRecipes()
        {
            return await _context.PullRecipes.ToListAsync();
        }

        public async Task<PullRecipe> GetPullRecipeById(int id)
        {
            return await _context.PullRecipes.Where(a => a.Id.Equals(id)).FirstOrDefaultAsync();
        }
    }
}
