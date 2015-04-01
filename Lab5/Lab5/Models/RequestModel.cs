using System;

namespace Lab5.Models
{
    [Serializable]
    public class RequestModel
    {
        public string Chicken { get; set; }
        public string Carnitas { get; set; }
        public string Steak { get; set; }
        public string Barbacoa { get; set; }
    }
}