using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.LibraryRepositories
{
    public interface ILibraryRepository : IGenericRepository<Library>
    {
        Task<List<Library>> GetAllLibrarys();
        Task<Library> GetAllLibrariesById(int id);
    }
}
