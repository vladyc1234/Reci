using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.CommentRepositories
{
    public interface ICommentRepository: IGenericRepository<Comment>
    {
        Task<List<Comment>> GetAllComments();
        Task<Comment> GetCommentById(int id);
    }
   
}
