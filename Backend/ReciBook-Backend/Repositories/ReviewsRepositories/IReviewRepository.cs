using ReciBook_Backend.Data;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.ReviewsRepositories
{
    public interface IReviewRepository: IGenericRepository<Review>
    {
        Task<List<Review>> GetAllReviews();
        Task<Review> GetReviewById(int id);
    }
}
