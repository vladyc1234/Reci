using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.TagRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _repository;
        public TagController(ITagRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllTags()
        {
            var tags = await _repository.GetAllTags();

            var tagsToReturn = new List<TagDTO>();

            foreach (var tag in tags)
            {
                tagsToReturn.Add(new TagDTO(tag));
            }

            return Ok(tagsToReturn);
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetTagByName(string name)
        {
            var tag = await _repository.GetByNameAsync(name);

            TagDTO tagToReturn = new TagDTO(tag);

            return Ok(tagToReturn);
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteTagType(string name)
        {
            var Tag = await _repository.GetByNameAsync(name);

            if (Tag == null)
            {
                return NotFound("Tag does not exist!");
            }

            _repository.Delete(Tag);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateTag(CreateTagDTO dto)
        {
            Tag newTag = new Tag();

            newTag.Name = dto.Name;

            _repository.Create(newTag);

            await _repository.SaveAsync();


            return Ok(new TagDTO(newTag));
        }

        [HttpPut("UpdateForForm")]
        public async Task<IActionResult> UpdateAsync([FromBody] Tag tag)
        {
            var array_tag = await _repository.GetAllTags();

            var tagIndex = array_tag.FindIndex((Tag _tag) => _tag.Name.Equals(tag.Name));

            array_tag[tagIndex] = tag;

            return Ok(array_tag);
        }
    }
}
