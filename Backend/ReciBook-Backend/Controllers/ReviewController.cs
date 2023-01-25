using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.ReviewsRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _repository;
        public ReviewController(IReviewRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllReviews()
        {
            var reviews = await _repository.GetAllReviews();

            var reviewsToReturn = new List<ReviewDTO>();

            foreach (var review in reviews)
            {
                reviewsToReturn.Add(new ReviewDTO(review));
            }

            return Ok(reviewsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReviewById(int id)
        {
            var review = await _repository.GetReviewById(id);

            RecipeDTO reviewToReturn = new ReviewDTO(review);

            return Ok(reviewToReturn);
        }

            [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReviewType(int id)
        {
            var Review = await _repository.GetByIdAsync(id);

            if (Review == null)
            {
                return NotFound("Review does not exist!");
            }

            _repository.Delete(Review);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateReview(CreateReviewDTO dto)
        {
            Review newReview = new Review();

            newReview.Text = dto.Text;

            _repository.Create(newReview);

            await _repository.SaveAsync();


            return Ok(new ReviewDTO(newReview));
        }
    }
}
