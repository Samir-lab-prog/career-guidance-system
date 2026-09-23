// ======================================
// Career Guidance System
// Assessment JavaScript
// ======================================


// ======================================
// Question 1
// ======================================

let question1 = document.getElementById("question1");

if (question1) {

    question1.addEventListener("submit", function(event) {

        event.preventDefault();

        let selected = [];

        document.querySelectorAll(
            '#question1 input[name="interest"]:checked'
        ).forEach(function(checkbox) {

            selected.push(checkbox.value);

        });


        if (selected.length === 0) {

            alert("Please select at least one option.");

            return;
        }


        localStorage.setItem(
            "question1",
            JSON.stringify(selected)
        );


        window.location.href = "assessment2.html";

    });

}


// ======================================
// Question 2
// ======================================

let question2 = document.getElementById("question2");

if (question2) {

    question2.addEventListener("submit", function(event) {

        event.preventDefault();

        let selected = [];

        document.querySelectorAll(
            '#question2 input[name="interest"]:checked'
        ).forEach(function(checkbox) {

            selected.push(checkbox.value);

        });


        if (selected.length === 0) {

            alert("Please select at least one option.");

            return;
        }


        localStorage.setItem(
            "question2",
            JSON.stringify(selected)
        );


        window.location.href = "assessment3.html";

    });

}


// ======================================
// Question 3
// ======================================

let question3 = document.getElementById("question3");

if (question3) {

    question3.addEventListener("submit", function(event) {

        event.preventDefault();

        let selected = [];

        document.querySelectorAll(
            '#question3 input[name="interest"]:checked'
        ).forEach(function(checkbox) {

            selected.push(checkbox.value);

        });


        if (selected.length === 0) {

            alert("Please select at least one option.");

            return;
        }


        localStorage.setItem(
            "question3",
            JSON.stringify(selected)
        );


        window.location.href = "result.html";

    });

}