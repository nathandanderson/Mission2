using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradeCalculatorModel
    {
        //This is another spot where we are ensuring that the data entered is in the appropraite range, this section will give the user and error if they try to input an invalid number.
        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string Assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string GroupProjects { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string Quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string Exams { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string Intex { get; set; }

    }
}
