using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using webapi_db_1.Models;

namespace webapi_db_1
{
    ///Контекст данных БД таблицы SoftwaveTestDBContext
    public class SoftwaveTestDBContext : DbContext
    {
        public DbSet<Circle1> Circle1 { get; set; }
        public DbSet<Circle2> Circle2 { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<DashboardData> DashboardData { get; set; }

        protected override void OnModelCreating(ModelBuilder cModelBuilder)
        {
            cModelBuilder.Entity<DashboardData>().HasMany(d => d.Categories);
            cModelBuilder.Entity<DashboardData>().HasOne(c => c.Circle1);
            cModelBuilder.Entity<DashboardData>().HasOne(c => c.Circle2);
        }

        public SoftwaveTestDBContext(DbContextOptions<SoftwaveTestDBContext> options) : base(options)
        {

        }

        
    }
}