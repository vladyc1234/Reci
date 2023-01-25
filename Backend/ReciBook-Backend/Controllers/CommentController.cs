using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.CommentRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _repository;
        public CommentController(ICommentRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllComments()
        {
            var comments = await _repository.GetAllComments();

            var commentsToReturn = new List<DerivedReceipeDTO>();

            foreach (var comment in comments)
            {
                commentsToReturn.Add(new DerivedReceipeDTO(comment));
            }

            return Ok(commentsToReturn);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetCommentById(int id)
        {
            var comment = await _repository.GetCommentById(id);

            DerivedReceipeDTO commentToReturn = new DerivedReceipeDTO(comment);

            return Ok(commentToReturn);
        }

            [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommentType(int id)
        {
            var Comment = await _repository.GetByIdAsync(id);

            if (Comment == null)
            {
                return NotFound("Comment does not exist!");
            }

            _repository.Delete(Comment);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateComment(CreateCommentDTO dto)
        {
            Comment newComment = new Comment();


            _repository.Create(newComment);

            await _repository.SaveAsync();


            return Ok(new DerivedReceipeDTO(newComment));
        }

        [HttpPut("UpdateForForm")]
        public async Task<IActionResult> UpdateAsync([FromBody] Comment comment)
        {
            var array_comm = await _repository.GetAllComments();

            var commIndex = array_comm.FindIndex((Comment _comm) => _comm.Id.Equals(comment.Id));

            array_comm[commIndex] = comment;

            return Ok(array_comm);
        }
    }
}

