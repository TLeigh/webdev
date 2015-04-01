using System;
using System.Collections.Generic;

namespace Lab5.Models
{
    [Serializable]
    public class ResponseModel
    {
        public List<MenuItem> OrderDetails { get; set; }
        public int TotalCalories { get; set; }
    }
}