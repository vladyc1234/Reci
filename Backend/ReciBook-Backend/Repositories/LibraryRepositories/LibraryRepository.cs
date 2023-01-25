using Microsoft.EntityFrameworkCore;
using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.LibraryRepositories
{
    public class LibraryRepository : GenericRepository<Library>, ILibraryRepository
    {
        public LibraryRepository(AppDbContext context) : base(context) { }
        public async Task<List<Library>> GetAllLibrarys()
        {
            return await _context.Libraries.ToListAsync();
        }

        public async Task<Library> GetAllLibrariesById(int id)
        {
            return await _context.Libraries.Where(a => a.IdUser.Equals(id)).FirstOrDefaultAsync();
        }
    }
}
