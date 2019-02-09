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
        }

        public void InsertProducts(List<string[]> products)
        {
            foreach (var car in products)
            {
                var param = new Dictionary<string, object>()
                {
                    {"@string", $@"INSERT INTO PRODUCT VALUES( '{car[0]}', '{car[1]}', '{car[2]}', '{car[3]}', '{car[4]}');"}

                };

                string cmd = "insertManufacturereValue";
                var str = _dbContext.ExecuteSqlQuery(cmd, '*', param);
            }
        }

        public void InsertManufacturers(List<string> manufacturers)
        {
            foreach (var manufacturer in manufacturers)
            {

                var param = new Dictionary<string, object>()
                {
                    {"@string", $@"INSERT INTO MANUFACTURER VALUES( {manufacturer} );"}

                };

                string cmd = "insertManufacturereValue";
                var str = _dbContext.ExecuteSqlQuery(cmd, '*', param);
            }
        }
    }
}
