using ReciBook_Backend.Entities;
using ReciBook_Backend.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories.IngredientsRepositories
{
    public interface IIngredientRepository : IGenericRepository<Ingredient>
    {
        Task<List<Ingredient>> GetAllIngredients();
        Task<List<Ingredient>> GetAllByName(string name);


    }
}
