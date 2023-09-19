document.addEventListener("DOMContentLoaded", function() {
    const visitForm = document.getElementById("visitForm");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const bmiInput = document.getElementById("bmi");
    const followUpSectionA = document.getElementById("followUpSectionA");
    const followUpSectionB = document.getElementById("followUpSectionB");

    visitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        calculateBMI();
    });

    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight values.");
            return;
        }

        const bmi = weight / (height * height);
        bmiInput.value = bmi.toFixed(2);

        // Show or hide follow-up sections based on BMI
        if (bmi <= 25) {
            followUpSectionA.style.display = "block";
            followUpSectionB.style.display = "none";
        } else {
            followUpSectionA.style.display = "none";
            followUpSectionB.style.display = "block";
        }
    }
});

