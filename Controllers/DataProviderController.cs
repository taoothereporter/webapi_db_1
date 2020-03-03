using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using webapi_db_1.Models;

namespace webapi_db_1.Controllers
{
    ///Контроллер DataProviderController - API для получения данных
    ///Описывает оконечную точку /DataProvider
    ///Оконечная точка предоставляет доступ к данным только для запросов, которые содержат в заголовке гугловый токен
    [ApiController]
    [Route("[controller]")]
    public class DataProviderController : ControllerBase
    {

        private readonly SoftwaveTestDBContext m_cContext;
        private readonly ILogger<DataProviderController> _logger;

        public DataProviderController(ILogger<DataProviderController> logger, SoftwaveTestDBContext context)
        {
            _logger = logger;
            m_cContext = context;
        }

        [Authorize]
        [HttpGet]
        ///Метод запроса данных из БД
        public Data Get()
        {
            List<DashboardData> result = new List<DashboardData>();

            using (m_cContext)
            {
                result = m_cContext.DashboardData
                                    .Include(d => d.Circle1)
                                    .Include(d => d.Circle2)
                                    .Include(d => d.Categories)
                                    .ToList();
            }

            return new Data { DashboardData = result };
        }
    }
}
