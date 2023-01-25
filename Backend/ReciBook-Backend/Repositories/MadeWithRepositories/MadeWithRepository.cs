using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.MadeWithRepositories
{
    public class MadeWithRepository : GenericRepository<MadeWith>, IMadeWithRepository
    {
        public MadeWithRepository(AppDbContext context) : base(context) { }
        public async Task<List<MadeWith>> GetAllMadeWith()
        {
            return await _context.MadeWiths.ToListAsync();
        }

        public async Task<MadeWith> GetMadeWithById(int idRecipe)
        {
            return await _context.MadeWiths.Where(a => a.IdRecipe.Equals(idRecipe)).FirstOrDefaultAsync();
        }
    }
}
