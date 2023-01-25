using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.QuestionsRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {

        private readonly IQuestionRepository _repository;
        public QuestionController(IQuestionRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllQuestions()
        {
            var questions = await _repository.GetAllQuestions();

            var questionsToReturn = new List<QuestionDTO>();

            foreach (var q in questions)
            {
                questionsToReturn.Add(new QuestionDTO(q));
            }

            return Ok(questionsToReturn);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestionType(int id)
        {
            var Question = await _repository.GetByIdAsync(id);

            if (Question == null)
            {
                return NotFound("Question does not exist!");
            }

            _repository.Delete(Question);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateQuestion(CreateQuestionDTO dto)
        {
            Question newQuestion = new Question();

            newQuestion.Text = dto.Text;
            newQuestion.IdRecipe = dto.IdRecipe;
            newQuestion.CreationDate = dto.CreationDate;

            _repository.Create(newQuestion);

            await _repository.SaveAsync();


            return Ok(new QuestionDTO(newQuestion));
        }
    }
}

