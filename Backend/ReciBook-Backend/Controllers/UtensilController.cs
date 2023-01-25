using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.UtensilRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtensilController : ControllerBase
    {
        private readonly IUtensilRepository _repository;
        public UtensilController(IUtensilRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllUtensils()
        {
            var utensils = await _repository.GetAllUtensils();

            var utensilsToReturn = new List<UtensilDTO>();

            foreach (var utensil in utensils)
            {
                utensilsToReturn.Add(new UtensilDTO(utensil));
            }

            return Ok(utensilsToReturn);
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetUtensilByName(string name)
        {
            var utensil = await _repository.GetUtensilByName(name);

            UtensilDTO utensilToReturn = new UtensilDTO(utensil);

            return Ok(utensilToReturn);
        }


        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteUtensilType(string name)
        {
            var Utensil = await _repository.GetByNameAsync(name);

            if (Utensil == null)
            {
                return NotFound("Utensil does not exist!");
            }

            _repository.Delete(Utensil);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateUtensil(CreateUtensilDTO dto)
        {
            Utensil newUtensil = new Utensil();

            newUtensil.Name = dto.Name;
            newUtensil.Description = dto.Description;

            _repository.Create(newUtensil);

            await _repository.SaveAsync();


            return Ok(new UtensilDTO(newUtensil));
        }

        [HttpPut("UpdateForForm")]
        public async Task<IActionResult> UpdateAsync([FromBody] Utensil utensil)
        {
            var array_utensil = await _repository.GetAllUtensils();

            var utensilIndex = array_utensil.FindIndex((Utensil _ut) => _ut.Name.Equals(utensil.Name));

            array_utensil[utensilIndex] = utensil;

            return Ok(array_utensil);
        }
    }
}

