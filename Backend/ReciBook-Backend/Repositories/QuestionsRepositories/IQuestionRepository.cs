using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.QuestionsRepositories
{
     public interface IQuestionRepository :  IGenericRepository<Question>
    {
        Task<List<Question>> GetAllQuestions();
        Task<Question> GetQuestionById(int id);
    }
}
