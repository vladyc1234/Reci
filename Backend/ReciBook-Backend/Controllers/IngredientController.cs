using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.IngredientsRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IIngredientRepository _repository;
        public IngredientController(IIngredientRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllIngredients()
        {
            var ingredients = await _repository.GetAllIngredients();

            var ingredientsToReturn = new List<IngredientDTO>();

            foreach (var ingredient in ingredients)
            {
                ingredientsToReturn.Add(new IngredientDTO(ingredient));
            }

            return Ok(ingredientsToReturn);
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetIngredientByName(string name)
        {
            var ingredient = await _repository.GetByNameAsync(name);

          IngredientDTO ingredientToReturn = new IngredientDTO(ingredient);

            return Ok(ingredientToReturn);
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteIngredientType(string name)
        {
            var Ingredient = await _repository.GetByNameAsync(name);

            if (Ingredient == null)
            {
                return NotFound("Ingredient does not exist!");
            }

            _repository.Delete(Ingredient);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateIngredient(CreateIngredientDTO dto)
        {
            Ingredient newIngredient = new Ingredient();

            newIngredient.Name = dto.Name;
            newIngredient.Price = dto.Price;

            _repository.Create(newIngredient);

            await _repository.SaveAsync();


            return Ok(new IngredientDTO(newIngredient));
        }

        [HttpPut("UpdateForForm")]
        public async Task<IActionResult> UpdateAsync([FromBody] Ingredient ingredient)
        {
            var array_ingredient = await _repository.GetAllIngredients();

            var ingredientIndex = array_ingredient.FindIndex((Ingredient _ingr) => _ingr.Name.Equals(ingredient.Name));

            array_ingredient[ingredientIndex] = ingredient;

            return Ok(array_ingredient);
        }
    }
}
