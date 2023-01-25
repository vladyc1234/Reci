using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.TagRepositories
{
    public interface ITagRepository : IGenericRepository<Tag>
    {
        Task<List<Tag>> GetAllTags();
        Task<List<Tag>> GetAllByName(string name);

    }
}
