using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.IngredientsRepositories
{
    public class IngredientsRepository : GenericRepository<Ingredient>, IIngredientRepository
    {
        public IngredientsRepository(AppDbContext context) : base(context) { }

        public async Task<List<Ingredient>> GetAllIngredients()
        {
            return await _context.Ingredients.ToListAsync();
        }

        public async Task<List<Ingredient>> GetAllByName(string name)
        {
            return await _context.Ingredients.Where(a => a.Name == name).ToListAsync(); ;
        }
    }
}
