using RecipeBookSystem.BL.ModelProviders;
using RecipeBookSystem.Model.Models;
using System.Collections.Generic;
using System.Linq;
using RecipeBookSystem.BL.Helpers;

namespace RecipeBookSystem.Labs.Lab1
{
    class LoadingData
    {
        private readonly DishProvider dishProvider;
        private readonly UserProvider userProvider; 
        public LoadingData()
        {
            this.dishProvider = new DishProvider();
            this.userProvider = new UserProvider();
        }

        public IEnumerable<DishModel> GetDishes()
        {
            var result = this.dishProvider.GetUserDishes(1, 2, 1).ToList();
            return result;
        }

        public UserModel GetUser()
        {
            var userProvider = new UserProvider();
            //localy added user
            var result = userProvider.GetUser("selian@gmail.com", PasswordEncryptionProvider.EncryptPassword("123"));
            return result;
        }

        public void GetAllUsersIds()
        {
            userProvider.GetAllUsersIDs();
        }
    }
}
