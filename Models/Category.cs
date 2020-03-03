using System;
using System.Collections.Generic;

namespace webapi_db_1.Models
{
    ///Сущность Категория
    public class Category
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int Value { get; set; }
        public int MaxValue { get; set; }
    }

}