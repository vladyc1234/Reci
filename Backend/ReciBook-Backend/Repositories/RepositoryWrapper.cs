using ReciBook_Backend.Data;
using ReciBook_Backend.Repositories.CommentRepositories;
using ReciBook_Backend.Repositories.CookedWithRepositories;
using ReciBook_Backend.Repositories.DerivedTagRepositories;
using ReciBook_Backend.Repositories.IngredientsRepositories;
using ReciBook_Backend.Repositories.LibraryRepositories;
using ReciBook_Backend.Repositories.MadeWithRepositories;
using ReciBook_Backend.Repositories.PullRecipeRepositories;
using ReciBook_Backend.Repositories.QuestionsRepositories;
using ReciBook_Backend.Repositories.RecipeRepositories;
using ReciBook_Backend.Repositories.RecipeTagRepositories;
using ReciBook_Backend.Repositories.ReviewsRepositories;
using ReciBook_Backend.Repositories.SessionTokenRepositories;
using ReciBook_Backend.Repositories.TagRepositories;
using ReciBook_Backend.Repositories.UserRepositories;
using ReciBook_Backend.Repositories.UtensilRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciBook_Backend.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly AppDbContext _context;
        
        private IUserRepository _user;
        private IPullRecipeRepository _pull;
        private ILibraryRepository _library;
        private IQuestionRepository _question;
        private IReviewRepository _review;
        private ICommentRepository _comment;
        private IUtensilRepository _utensil;
        private ITagRepository _tag;
        private IRecipeRepository _recipe;
        private IIngredientRepository _ingredient;
        private ISessionTokenRepository _sessionToken;
        private IRecipeTagRepository _recipeTag;
        private IDerivedTagRepository _derivedTag;
        private IMadeWithRepository _madeWith;
        private ICookedWithRepository _cookedWith;


        public RepositoryWrapper(AppDbContext context)
        {
            _context = context;
        }

        public IRecipeTagRepository RecipeTag 
        {
            get
            {
                if (_recipeTag == null) _recipeTag = new RecipeTagRepository(_context);
                return _recipeTag;
            }
        }
        public IDerivedTagRepository DerivedTag
        {
            get
            {
                if (_derivedTag == null) _derivedTag = new DerivedTagRepository(_context);
                return _derivedTag;
            }
        }

        public ICookedWithRepository CookedWith 
        {
            get
            {
                if (_cookedWith == null) _cookedWith = new CookedWithRepository(_context);
                return _cookedWith;
            }
        }

        public IMadeWithRepository MadeWith
        {
            get
            {
                if (_madeWith == null) _madeWith = new MadeWithRepository(_context);
                return _madeWith;
            }
        }
        public IUserRepository User
        {
            get
            {
                if (_user == null) _user = new UserRepository(_context);
                return _user;
            }
        }

        public IPullRecipeRepository PullRecipe
        {
            get
            {
                if (_pull == null) _pull = new PullRecipeRepository(_context);
                return _pull;
            }
        }
        public ILibraryRepository Library
        {
            get
            {
                if (_library == null) _library = new LibraryRepository(_context);
                return _library;
            }
        }

        public IReviewRepository Review

        {
            get
            {
                if (_review == null) _review = new ReviewRepository(_context);
                return _review;
            }
        }
        public ICommentRepository Comment

        {
            get
            {
                if (_comment == null) _comment = new CommentRepository(_context);
                return _comment;
            }
        }

        public IQuestionRepository Question
        {
            get
            {
                if (_question == null) _question = new QuestionRepository(_context);
                return _question;
            }
        }
        public IUtensilRepository Utensil
        {
            get
            {
                if (_utensil == null) _utensil = new UtensilRepository(_context);
                return _utensil;
            }
        }

        public ITagRepository Tag
        {
            get
            {
                if (_tag == null) _tag = new TagRepository(_context);
                return _tag;
            }
        }
        public IRecipeRepository Recipe
        {
            get
            {
                if (_recipe == null) _recipe = new RecipeRepository(_context);
                return _recipe;
            }
        }

        public IIngredientRepository Ingredient
        {
            get
            {
                if (_ingredient == null) _ingredient = new IngredientsRepository(_context);
                return _ingredient;
            }
        }
        public ISessionTokenRepository SessionToken
        {
            get
            {
                if (_sessionToken == null) _sessionToken = new SessionTokenRepository(_context);
                return _sessionToken;
            }
        }
        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
