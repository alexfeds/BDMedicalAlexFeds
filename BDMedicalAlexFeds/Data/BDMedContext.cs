using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BDMedicalNumberProcessor.Data
{
    public class BDMedContext : Microsoft.EntityFrameworkCore.DbContext
    {

        public BDMedContext(DbContextOptions<BDMedContext> options):base(options)
        {

        }

        public Microsoft.EntityFrameworkCore.DbSet<Message> Message { get; set; }



        public int getStatus()
        {
            return  0;
        }
     
    }
}
