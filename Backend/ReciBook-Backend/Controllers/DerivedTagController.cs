using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.DerivedTagRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DerivedsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DerivedTagController : ControllerBase
    {
        private readonly IDerivedTagRepository _repository;
        public DerivedTagController(IDerivedTagRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllDerivedTags()
        {
            var DerivedTags = await _repository.GetAllDerivedTag();

            var DerivedTagsToReturn = new List<DerivedTagDTO>();

            foreach (var q in DerivedTags)
            {
                DerivedTagsToReturn.Add(new DerivedTagDTO(q));
            }

            return Ok(DerivedTagsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllRecipeTagsById(int id)
        {
            var DerivedTags = await _repository.GetAllDerivedTag();

            var DerivedTagsToReturn = new List<DerivedTagDTO>();

            foreach (var derivedTags in DerivedTags)
            {
                if (derivedTags.IdDerivedRecipe == id)
                    DerivedTagsToReturn.Add(new DerivedTagDTO(derivedTags));
            }

            return Ok(DerivedTagsToReturn);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDerivedTagType(int id)
        {
            var DerivedTag = await _repository.GetByIdAsync(id);

            if (DerivedTag == null)
            {
                return NotFound("DerivedTag does not exist!");
            }

            _repository.Delete(DerivedTag);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateDerivedTag(CreateDerivedTagDTO dto)
        {
            DerivedTag newDerivedTag = new DerivedTag();

            newDerivedTag.NameTag = dto.NameTag;
            newDerivedTag.IdDerivedRecipe = dto.IdDerivedRecipe;

            _repository.Create(newDerivedTag);

            await _repository.SaveAsync();


            return Ok(new DerivedTagDTO(newDerivedTag));
        }
    }
}

