using System;

namespace Lab5.Models
{
    [Serializable]
    public class MenuItem
    {
        public string Name { get; set; }
        public string Calories { get; set; }
        public string Price { get; set; }
    }
}