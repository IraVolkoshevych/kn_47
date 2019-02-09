﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Services
{
    public interface IUserService
    {
        void StoringInfoAboutNewUser(string firstname, string lastname, string email, string password, string phone);
        User GetUserInfo(string email);
        void ApdateInfoAboutUser(string id, string firstname, string lastname, string email, string password, string isActivated,
            string phone, string sex, string country, string city, string street, string apartment);
        UserInfo GetUserInfoById(int id);
        int ActivateUser(int Id);
        List<UserRole> GetAllUsers(int numberPage,int countInPage);
        int GetPaginationCount(int countInPage);
        int GetPaginationCountFiltered(int countInPage,bool isAdmin, bool isDoctor, string firstOrLastname = null);
        List<UserRole> FilteringUsers(int numberPage, int countInPage, bool isAdmin, bool isDoctor, string firstOrlastname = null);
        UserRole GetUserRole(int idUser);
        List<Role> GetUserAvailableRole(int idUser);
        List<UserFirstLastname> FirstLastname(string text);
        void  ChangeRole(int currentUser, int userId, int role, int idProfession = 0);
        void SendEmailForResettingPassword(string email);
        int ResetPassword(string email, string newPassword, string link);
    }
}
