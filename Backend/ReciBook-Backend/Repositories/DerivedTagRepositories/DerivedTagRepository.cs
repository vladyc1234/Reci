using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.DerivedTagRepositories
{
    public class DerivedTagRepository : GenericRepository<DerivedTag>, IDerivedTagRepository
    {
        public DerivedTagRepository(AppDbContext context) : base(context) { }
        public async Task<List<DerivedTag>> GetAllDerivedTag()
        {
            return await _context.DerivedTags.ToListAsync();
        }

        public async Task<DerivedTag> GetDerivedTagById(int idRecipe)
        {
            return await _context.DerivedTags.Where(a => a.IdDerivedRecipe.Equals(idRecipe)).FirstOrDefaultAsync();
        }
    }
}
