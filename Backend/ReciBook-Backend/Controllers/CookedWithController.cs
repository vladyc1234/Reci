using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.CookedWithRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CookedWithController : ControllerBase
    {
        private readonly ICookedWithRepository _repository;
        public CookedWithController(ICookedWithRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCookedWiths()
        {
            var CookedWiths = await _repository.GetAllCookedWith();

            var CookedWithsToReturn = new List<CookedWithDTO>();

            foreach (var q in CookedWiths)
            {
                CookedWithsToReturn.Add(new CookedWithDTO(q));
            }

            return Ok(CookedWithsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllCookedWithsById(int id)
        {
            var CookedWiths = await _repository.GetAllCookedWith();

            var CookedWithsToReturn = new List<CookedWithDTO>();

            foreach (var cookedWith in CookedWiths)
            {
                if(cookedWith.IdRecipe == id)
                    CookedWithsToReturn.Add(new CookedWithDTO(cookedWith));
            }

            return Ok(CookedWithsToReturn);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCookedWithType(int id)
        {
            var CookedWith = await _repository.GetByIdAsync(id);

            if (CookedWith == null)
            {
                return NotFound("CookedWith does not exist!");
            }

            _repository.Delete(CookedWith);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateCookedWith(CreateCookedWithDTO dto)
        {
            CookedWith newCookedWith = new CookedWith();

            newCookedWith.Name = dto.Name;
            newCookedWith.IdRecipe = dto.IdRecipe;

            _repository.Create(newCookedWith);

            await _repository.SaveAsync();


            return Ok(new CookedWithDTO(newCookedWith));
        }
    }
}

