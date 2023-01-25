# proiect-inginerie-software-recibook-team
proiect-inginerie-software-recibook-team created by GitHub Classroom


**Theme**

Our project is a web application revolving around the idea of sharing and further improving recipes. The main features of the applications are: <br />
 -  having a user profile under which you can display your recipes
 -  being able to 'pull' an already existing recipe and modify it, creating new, derived recipes
 -  exploring other users' recipes through a search function based on different filters 
 
 **Tehnologies**
 
 - Backend: ASP.NET WEB API Entity Framework CORE , C#
 - Frontend: Angular, TypeScript, JavaScript, HTML, CSS, Figma
 - Database management: SQL Server Management Studio, Microsoft SQL Server
 
 **Building tool**
 
 - Backend: Visual Studio 2019 (ASP.NET CORE WEB API)
 - Frontend:Visual Studio Code (Angular CLI)

**User Stories:** <br />
*1. Adding recipes*

 As a user I want to be able to create my own recipes under my profile. The creation of the recipe should be intuitive, and as such it should come in the shape of a form or walkthrough, being prompted with different decisions to make, such as:
- What are the ingredients used? (Select ingredients from the database or, if the ingredient doesn't exist in the database, create a new one)
- What are the utensils used? (Select ingredients from the database or, if the utensil doesn't exist in the database, create a new one)
- What categories does this recipe fit into? meaning tags (e.g. made with chicken, breakfast, lunch, dinner, sugar-free etc) (Select tags from the database; if the tag doesn't exist in the database, create a new one)
- What are the instructions? (The whole text with all the needed instructions).
- Should the recipe be private or public? (Not necessary, just an idea).

Upon the creation of the recipe a file has to be created on the server where the instructions text will be written.

Optionally, a user should be able to also edit the recipe.


*2. Pulling recipes from other users*.

As a user, I want to be able to view other users' (public) recipes and pull them under my own account, so that I can modify them.

The pulled recipe should point to it's original owner even under the profile of the user that has made the pulled it.

Practically, every recipe, when viewed should have a button, which will copy the recipe from the owner to the user who has pulled it.


*3. Pushing modified recipes back to the owner.*

As a user, I want to be able to push back to the owner recipes that I have pulled and modified. Practically, when viewing a pulled recipe under your profile, you should have a button which will send the push request towards the author.

If the request is accepted, then the author can decide if the request will become a derived recipe, or will take the place of the original recipe.

If the request is not accepted, then I should be notified about it.

Optionally, have a history log of pull and pull requests on the user's profile which will keep track of their state. For example:
Type (Push / Pull) / Recipe name / Push / pull date / Status (accepted, not accepted, pending), if push request / Link to the original recipe / Link to the modified recipe.

[Diagrama Conceptuala](https://github.com/inginerie-software-22-23/proiect-inginerie-software-recibook-team/blob/main/UML%20(1).pdf)

