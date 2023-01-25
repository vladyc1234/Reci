using ReciBook_Backend.Repositories.CommentRepositories;
using ReciBook_Backend.Repositories.CookedWithRepositories;
using ReciBook_Backend.Repositories.DerivedTagRepositories;
using ReciBook_Backend.Repositories.IngredientsRepositories;
using ReciBook_Backend.Repositories.LibraryRepositories;
using ReciBook_Backend.Repositories.MadeWithRepositories;
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
    public interface IRepositoryWrapper
    {
        IUserRepository User { get; }
        ILibraryRepository Library { get; }
        IRecipeTagRepository RecipeTag { get; }
        IDerivedTagRepository DerivedTag { get; }
        IMadeWithRepository MadeWith { get; }
        ICookedWithRepository CookedWith { get; }

        IQuestionRepository Question { get; }
        IReviewRepository Review{ get; }
        ICommentRepository Comment { get; }
        IUtensilRepository Utensil { get; }
        ITagRepository Tag { get; }
        IRecipeRepository Recipe { get; }
        IIngredientRepository Ingredient { get; }
        ISessionTokenRepository SessionToken { get; }

        Task SaveAsync();
    }
}
