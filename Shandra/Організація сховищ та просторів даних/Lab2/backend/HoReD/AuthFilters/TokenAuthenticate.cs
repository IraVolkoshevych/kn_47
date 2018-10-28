﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;
using Entities.Services;
using System.Security.Claims;
using System.Security.Principal;

namespace HoReD.AuthFilters
{
    public class TokenAuthenticate : Attribute, IAuthenticationFilter
    {
        public string Role { get; set; }

        public bool AllowMultiple
        {
            get
            {
                return false;
            }
        }

        public string Realm { get; set; }

        public async Task AuthenticateAsync(HttpAuthenticationContext context, CancellationToken cancellationToken)
        {
            var request = context.Request;
            var authorization = request.Headers.Authorization;

            if (authorization == null || authorization.Scheme != "Bearer")
                return;

            if (string.IsNullOrEmpty(authorization.Parameter))
            {
                context.ErrorResult = new AuthenticationFailureResult("Missing Jwt Token", request);
                return;
            }

            var token = authorization.Parameter;
            var principal = await AuthenticateJwtToken(token);

            if (principal == null)
                context.ErrorResult = new AuthenticationFailureResult("Invalid token", request);

            else
                context.Principal = principal;
        }

        public Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken)
        {
            Challenge(context);
            return Task.FromResult(0);
        }

        private void Challenge(HttpAuthenticationChallengeContext context)
        {
            string parameter = null;

            if (!string.IsNullOrEmpty(Realm))
                parameter = "realm=\"" + Realm + "\"";

            context.ChallengeWith("Bearer", parameter);
        }

        private bool ValidateToken(string token, out string userEmail,out string role)
        {
            userEmail = null;
            role = null;
            IUserService userService = new UserService(new DbContext());
            AuthService authService = new AuthService(new MembershipProvider(userService), new RSAKeyProvider());
            var simplePrinciple = authService.GetPrincipal(token);
            var identity = simplePrinciple?.Identity as ClaimsIdentity;

            if (identity == null)
                return false;

            if (!identity.IsAuthenticated)
                return false;

            var userEmailClaim = identity.FindFirst(ClaimTypes.Email);
            var roleClaim = identity.FindFirst(ClaimTypes.Role);
            userEmail = userEmailClaim?.Value;
            role = roleClaim?.Value;

            if (string.IsNullOrEmpty(userEmail))
                return false;
            string[] roles = this.Role.Split(',');
            if (!roles.Any(role.Contains))
            {
                return false;
            }

            return true;
        }

        protected Task<IPrincipal> AuthenticateJwtToken(string token)
        {
            string userEmail;
            string role;
            if (ValidateToken(token, out userEmail, out role))
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, userEmail),
                    new Claim(ClaimTypes.Role, role)
                };

                var identity = new ClaimsIdentity(claims, "Jwt");
                IPrincipal user = new ClaimsPrincipal(identity);

                return Task.FromResult(user);
            }

            return Task.FromResult<IPrincipal>(null);
        }

    }
}