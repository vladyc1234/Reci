using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.DerivedRecipeRepositories
{
    public class DerivedRecipeRepository : GenericRepository<DerivedRecipe>, IDerivedRecipeRepository
    {
        public DerivedRecipeRepository(AppDbContext context) : base(context) { }


        public async Task<List<DerivedRecipe>> GetAllDerivedRecipes()
        {
            return await _context.DerivedRecipes.ToListAsync();
        }
        public async Task<DerivedRecipe> GetDerivedRecipeById(int id)
        {
            return await _context.DerivedRecipes.Where(a => a.Id.Equals(id)).FirstOrDefaultAsync();
        }
        public async Task<List<DerivedRecipe>> GetAllDerivedRecipesByName(string name)
        {
            return await _context.DerivedRecipes.Where(a => a.Name.Equals(name)).ToListAsync();
        }
    }
}
