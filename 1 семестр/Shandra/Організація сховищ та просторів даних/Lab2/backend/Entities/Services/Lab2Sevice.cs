using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Services
{
    public class Lab2Sevice : ILab2Service
    {
        private readonly IDbContext _dbContext;

        public Lab2Sevice(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void GetFormInfo()
        {
            const string cmd = "GETFORMS";
            var param = new Dictionary<string, object>();
            var str = _dbContext.ExecuteSqlQuery(cmd, '*', param);
            var values = str.Split('*');
        }
    }
}
