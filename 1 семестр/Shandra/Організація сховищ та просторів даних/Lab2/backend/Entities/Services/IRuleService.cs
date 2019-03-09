﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Services
{
    public interface IRuleService
    {
        List<DoctorRules> GetRules();

        List<DoctorInfo> GetDoctorsByIdRule(int IdRule, bool hasRule);

        void AddOrUpdateRule(DoctorRules rule);

        void DeleteRule(int IdRule);

        void DismissDoctorFromRule(int IdRule, int IdDoctor);

        void AssignDoctorToRule(int IdRule, int IdDoctor);
    }
}
