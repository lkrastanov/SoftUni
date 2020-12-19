namespace HighSchoolHomeLearning.Web.Areas.Administration.Controllers
{
    using HighSchoolHomeLearning.Common;
    using HighSchoolHomeLearning.Web.Controllers;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Authorize(Roles = GlobalConstants.AdministratorRoleName)]
    [Area("Administration")]
    public class AdministrationController : BaseController
    {
    }
}
