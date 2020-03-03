using System;
using System.Collections.Generic;

namespace webapi_db_1.Models
{
    ///Сущность DashboardData
    public class DashboardData
    {
        public int ID { get; set; }
        public int Year { get; set; }
        public Circle1 Circle1 { get; set; }
        public Circle2 Circle2 { get; set; }
        public ICollection<Category> Categories { get; set; }
    }

}