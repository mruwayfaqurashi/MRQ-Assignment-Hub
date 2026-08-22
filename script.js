/* ==================================================
   ASSIGNMENT SLIDER
   AUTOMATIC ASSIGNMENT COUNT
================================================== */


/*
   Get the slides container
*/

const slides =
    document.getElementById("slides");


/*
   Get every assignment slide.

   JavaScript automatically counts
   how many .assignment-slide elements
   exist in the HTML.
*/

const assignmentSlides =
    document.querySelectorAll(".assignment-slide");


/*
   Get the dots container
*/

const dotsContainer =
    document.getElementById("sliderDots");


/*
   Current assignment

   0 = Assignment 1
   1 = Assignment 2
   2 = Assignment 3
*/

let currentAssignment = 0;


/*
   Automatically count assignments
*/

const totalAssignments =
    assignmentSlides.length;



/* ==================================================
   CREATE DOTS AUTOMATICALLY
================================================== */

function createDots() {


    /*
       Clear the dots container
    */

    dotsContainer.innerHTML = "";


    /*
       Create one dot for every assignment
    */

    for (
        let i = 0;
        i < totalAssignments;
        i++
    ) {


        /*
           Create button
        */

        const dot =
            document.createElement("button");


        /*
           Add dot class
        */

        dot.classList.add("dot");


        /*
           First dot is active
        */

        if (i === 0) {

            dot.classList.add("active");

        }


        /*
           Accessibility
        */

        dot.setAttribute(
            "aria-label",
            `Go to assignment ${i + 1}`
        );


        /*
           When clicked,
           go to that assignment
        */

        dot.addEventListener(
            "click",
            function () {

                goToAssignment(i);

            }
        );


        /*
           Add dot to page
        */

        dotsContainer.appendChild(dot);

    }

}



/* ==================================================
   SHOW ASSIGNMENT
================================================== */

function showAssignment(index) {


    /*
       If we go after the last assignment,
       return to Assignment 1.
    */

    if (
        index >= totalAssignments
    ) {

        currentAssignment = 0;

    }


    /*
       If we go before Assignment 1,
       go to the last assignment.
    */

    else if (
        index < 0
    ) {

        currentAssignment =
            totalAssignments - 1;

    }


    /*
       Otherwise use requested index
    */

    else {

        currentAssignment = index;

    }



    /*
       Move the slider

       Example:

       Assignment 1 = 0%
       Assignment 2 = -100%
       Assignment 3 = -200%
       Assignment 4 = -300%
    */

    slides.style.transform =
        `translateX(-${currentAssignment * 100}%)`;



    /*
       Get all dots
    */

    const dots =
        document.querySelectorAll(".dot");


    /*
       Update active dot
    */

    dots.forEach(
        function (dot, index) {


            dot.classList.remove(
                "active"
            );


            if (
                index === currentAssignment
            ) {

                dot.classList.add(
                    "active"
                );

            }

        }
    );

}



/* ==================================================
   NEXT ASSIGNMENT
================================================== */

function nextAssignment() {

    showAssignment(
        currentAssignment + 1
    );

}



/* ==================================================
   PREVIOUS ASSIGNMENT
================================================== */

function previousAssignment() {

    showAssignment(
        currentAssignment - 1
    );

}



/* ==================================================
   GO TO SPECIFIC ASSIGNMENT
================================================== */

function goToAssignment(index) {

    showAssignment(index);

}



/* ==================================================
   START SLIDER
================================================== */

createDots();

showAssignment(0);