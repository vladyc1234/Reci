using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.RecipeTagRepositories
{
    public class RecipeTagRepository : GenericRepository<RecipeTag>, IRecipeTagRepository
    {
        public RecipeTagRepository(AppDbContext context) : base(context) { }
        public async Task<List<RecipeTag>> GetAllRecipeTag()
        {
            return await _context.RecipeTags.ToListAsync();
        }

        public async Task<RecipeTag> GetRecipeTagById(int idRecipe)
        {
            return await _context.RecipeTags.Where(a => a.IdRecipe.Equals(idRecipe)).FirstOrDefaultAsync();
        }
    }
}
