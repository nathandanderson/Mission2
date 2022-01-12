$("#btnCalc").click(function () {
    let fEstimatedGrade = parseFloat($("#txtAssignments").val()) +
    parseFloat($("#txtGroupProjects").val()) +
    parseFloat($("#txtQuizzes").val()) +
    parseFloat($("#txtExams").val()) +
    parseFloat($("#txtIntex").val())

    var sOutput

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
})