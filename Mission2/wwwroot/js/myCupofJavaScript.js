$("#btnCalc").click(function () {
    //This first part is for data validation, it ensures numbers are in proper ranges before it continues on to give an alert.
    if (parseFloat($("#txtAssignments").val()) > 100 || parseFloat($("#txtGroupProjects").val()) > 100 || parseFloat($("#txtQuizzes").val()) > 100 || parseFloat($("#txtExams").val()) > 100 || parseFloat($("#txtIntex").val()) > 100 || parseFloat($("#txtAssignments").val()) < 0 || parseFloat($("#txtGroupProjects").val()) < 0 || parseFloat($("#txtQuizzes").val()) < 0 || parseFloat($("#txtExams").val()) < 0 || parseFloat($("#txtIntex").val()) < 0 || $("#txtAssignments").val() == '' || $("#txtGroupProjects").val() == '' || $("#txtQuizzes").val() == '' || $("#txtExams").val() == '' || $("#txtIntex").val()=='' ){
    } else { 

            let fEstimatedGrade = parseFloat($("#txtAssignments").val()) +
            parseFloat($("#txtGroupProjects").val()) +
            parseFloat($("#txtQuizzes").val()) +
            parseFloat($("#txtExams").val()) +
            parseFloat($("#txtIntex").val())

            var sOutput

        //Here is the if statement that reads the outcome percentage and assigns it a letter grade based upon the value.
            if (fEstimatedGrade >= 94) {
               sOutput = 'A'
            } else if (fEstimatedGrade >= 90) {
                sOutput = 'A-'
            } else if (fEstimatedGrade >= 87) {
                sOutput = 'B+'
            } else if (fEstimatedGrade >= 84) {
                sOutput = 'B'
            } else if (fEstimatedGrade >= 80) {
                sOutput = 'B-'
            } else if (fEstimatedGrade >= 77) {
                sOutput = 'C+'
            } else if (fEstimatedGrade >= 74) {
                sOutput = 'C'
            } else if (fEstimatedGrade >= 70) {
                sOutput = 'C-'
            } else if (fEstimatedGrade >= 67) {
                sOutput = 'D+'
            } else if (fEstimatedGrade >= 64) {
                sOutput = 'D'
            }else if (fEstimatedGrade >= 60) {
                sOutput = 'D-'
            }else  {
                sOutput = 'E'
            }

        alert("Your estimated grade based upon the information entered is: " + sOutput);
      
        }
})
