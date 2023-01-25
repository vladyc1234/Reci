using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReciBook_Backend.Entities;
using ReciBook_Backend.Entities.CreateDTO;
using ReciBook_Backend.Entities.DTOs;
using ReciBook_Backend.Repositories.LibraryRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        private readonly ILibraryRepository _repository;
        public LibraryController(ILibraryRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllLibrarys()
        {
            var librarys = await _repository.GetAllLibrarys();

            var librarysToReturn = new List<LibraryDTO>();

            foreach (var library in librarys)
            {
                librarysToReturn.Add(new LibraryDTO(library));
            }

            return Ok(librarysToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllLibrariesById(int id)
        {
            var librarys = await _repository.GetAllLibrarys();

            var librarysToReturn = new List<LibraryDTO>();

            foreach (var library in librarys)
            {
                if (library.IdUser == id)
                    librarysToReturn.Add(new LibraryDTO(library));
            }

            return Ok(librarysToReturn);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibraryType(int id)
        {
            var Library = await _repository.GetByIdAsync(id);

            if (Library == null)
            {
                return NotFound("Library does not exist!");
            }

            _repository.Delete(Library);

            await _repository.SaveAsync();

            return NoContent();
        }


        [HttpPost]
        public async Task<IActionResult> CreateLibrary(CreateLibraryDTO dto)
        {
            Library newLibrary = new Library();

            newLibrary.IdRecipe = dto.IdRecipe;
            newLibrary.IdUser = dto.IdUser;

            _repository.Create(newLibrary);

            await _repository.SaveAsync();


            return Ok(new LibraryDTO(newLibrary));
        }
    }
}

