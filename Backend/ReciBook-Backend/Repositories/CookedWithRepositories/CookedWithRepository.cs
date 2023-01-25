using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.CookedWithRepositories
{
    public class CookedWithRepository : GenericRepository<CookedWith>, ICookedWithRepository
    {
        public CookedWithRepository(AppDbContext context) : base(context) { }
        public async Task<List<CookedWith>> GetAllCookedWith()
        {
            return await _context.CookedWiths.ToListAsync();
        }

        public async Task<CookedWith> GetCookedWithById(int idRecipe)
        {
            return await _context.CookedWiths.Where(a => a.IdRecipe.Equals(idRecipe)).FirstOrDefaultAsync();
        }
    }
}
