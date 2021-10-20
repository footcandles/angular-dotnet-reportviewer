using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using DomainModels;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _config;
        private string reportServerUrl;
        private string reportEndpoint;

        public EmployeeController(IConfiguration config)
        {
            _config = config;
            reportServerUrl = _config.GetValue<string>("ReportServer:ServerUrl");
            reportEndpoint = _config.GetValue<string>("ReportServer:ReportEndpoint");
        }

        [HttpGet]
        [Route("getEmployee")]
        public string GetEmployee()
        {
            Employee employee = new Employee() 
            {
                reportServerUrl= reportServerUrl,
                reportEndpoint = reportEndpoint
            };
            return JsonConvert.SerializeObject(employee);
        }
    }
}
