using BDMedicalNumberProcessor.Data;
using System;
using System.ComponentModel.DataAnnotations;

namespace BDMedicalNumberProcessor
{
    public class Message 
    {

        public int Id { get; set; } 
        public int ButchNumber { get; set; }

        public int Result { get; set; }

        public string Status { get; set; }
    }
}
