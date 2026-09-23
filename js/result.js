// ======================================
// Career Guidance System
// Result JavaScript
// ======================================

window.onload = function () {

    var resultsDiv = document.getElementById("results");

    if (!resultsDiv) {
        return;
    }


    // ======================================
    // Get Answers
    // ======================================

    var answer1 = localStorage.getItem("question1");
    var answer2 = localStorage.getItem("question2");
    var answer3 = localStorage.getItem("question3");

    var question1Answers = answer1 ? JSON.parse(answer1) : [];
    var question2Answers = answer2 ? JSON.parse(answer2) : [];
    var question3Answers = answer3 ? JSON.parse(answer3) : [];


    // Combine answers

    var allAnswers = [];

    allAnswers = allAnswers.concat(question1Answers);
    allAnswers = allAnswers.concat(question2Answers);
    allAnswers = allAnswers.concat(question3Answers);


    // ======================================
    // Check Answers
    // ======================================

    if (allAnswers.length === 0) {

        resultsDiv.innerHTML =
            "<div class='result-card'>" +
            "<h3>No Results Found</h3>" +
            "<p>Please complete the career assessment first.</p>" +
            "</div>";

        return;
    }


    // ======================================
    // Career Database
    // ======================================

    var careers = [

        {
            name: "Web Developer",

            skills: [
                "technology",
                "coding",
                "programming"
            ],

            description:
                "Web developers create websites and web applications using technologies such as HTML, CSS and JavaScript."
        },


        {
            name: "Software Engineer",

            skills: [
                "technology",
                "coding",
                "programming",
                "problem-solving"
            ],

            description:
                "Software engineers design, develop and maintain software applications and computer programs."
        },


        {
            name: "Data Analyst",

            skills: [
                "mathematics",
                "analysis",
                "problem-solving"
            ],

            description:
                "Data analysts study data and provide useful information to help organizations make better decisions."
        },


        {
            name: "Doctor",

            skills: [
                "science",
                "helping"
            ],

            description:
                "Doctors diagnose and treat illnesses and help people maintain good health."
        },


        {
            name: "Engineer",

            skills: [
                "mathematics",
                "science",
                "problem-solving"
            ],

            description:
                "Engineers use science and mathematics to design and develop machines, structures and technical systems."
        },


        {
            name: "Teacher",

            skills: [
                "teaching",
                "helping",
                "communication"
            ],

            description:
                "Teachers educate students and help them develop knowledge, skills and confidence."
        },


        {
            name: "Graphic Designer",

            skills: [
                "creativity",
                "design"
            ],

            description:
                "Graphic designers create visual content for websites, advertisements, posters and digital media."
        },


        {
            name: "Accountant",

            skills: [
                "mathematics",
                "business",
                "analysis"
            ],

            description:
                "Accountants manage financial records, prepare reports and handle business transactions."
        },


        {
            name: "Digital Marketer",

            skills: [
                "business",
                "communication",
                "creativity"
            ],

            description:
                "Digital marketers promote products and services using social media, websites and other digital platforms."
        },


        {
            name: "Cybersecurity Specialist",

            skills: [
                "technology",
                "security",
                "problem-solving"
            ],

            description:
                "Cybersecurity specialists protect computer systems, networks and data from security threats."
        }

    ];


    // ======================================
    // Calculate Scores
    // ======================================

    for (var i = 0; i < careers.length; i++) {

        careers[i].score = 0;

        careers[i].matchedSkills = [];

        for (var j = 0; j < careers[i].skills.length; j++) {

            var skill = careers[i].skills[j];

            if (allAnswers.indexOf(skill) !== -1) {

                careers[i].score++;

                careers[i].matchedSkills.push(skill);

            }

        }

    }


    // ======================================
    // Sort Careers
    // ======================================

    careers.sort(function (a, b) {

        return b.score - a.score;

    });


    // ======================================
    // Display Results
    // ======================================

    resultsDiv.innerHTML = "";


    // Result heading

    resultsDiv.innerHTML +=
        "<div class='result-summary'>" +

        "<h3>🎯 Your Career Matches</h3>" +

        "<p>Based on the answers you provided, these careers match your interests and skills.</p>" +

        "</div>";


    // ======================================
    // Display Top 3
    // ======================================

    for (var k = 0; k < 3; k++) {

        var career = careers[k];

        var percentage =
            Math.round(
                (career.score / career.skills.length) * 100
            );


        var rankText = "";

        if (k === 0) {

            rankText = "🏆 Top Career Match";

        } else if (k === 1) {

            rankText = "🥈 Second Match";

        } else {

            rankText = "🥉 Third Match";

        }


        // Matched skills

        var skillsText = "";

        if (career.matchedSkills.length > 0) {

            skillsText =
                career.matchedSkills.join(", ");

        } else {

            skillsText = "No direct skill match";

        }


        // Create card

        resultsDiv.innerHTML +=

            "<div class='result-card'>" +

            "<div class='rank'>" +
            rankText +
            "</div>" +

            "<h3>" +
            career.name +
            "</h3>" +

            "<p>" +
            career.description +
            "</p>" +

            "<p><strong>Matching Skills:</strong> " +
            skillsText +
            "</p>" +

            "<p><strong>Match:</strong> " +
            percentage +
            "%</p>" +

            "<div class='progress-container'>" +

            "<div class='progress-bar' style='width:" +
            percentage +
            "%'></div>" +

            "</div>" +

            "</div>";

    }


    // ======================================
    // Retake Button
    // ======================================

    resultsDiv.innerHTML +=

        "<div class='retake-section'>" +

        "<button onclick='retakeAssessment()'>" +
        "Take Assessment Again" +
        "</button>" +

        "</div>";

};


// ======================================
// Retake Assessment
// ======================================

function retakeAssessment() {

    localStorage.removeItem("question1");

    localStorage.removeItem("question2");

    localStorage.removeItem("question3");

    window.location.href = "assessment1.html";

}