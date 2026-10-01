// ==============================
// BOOKING FORM
// ==============================

const bookingForm = document.getElementById("bookingForm");

const successMessage =
    document.getElementById("successMessage");


bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const date =
        document.getElementById("date").value;

    const travelers =
        document.getElementById("travelers").value;

    const selectedPackage =
        document.getElementById("package").value;

    console.log("Booking Request");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Date:", date);
    console.log("Travelers:", travelers);
    console.log("Package:", selectedPackage);

    successMessage.classList.remove("d-none");

    bookingForm.reset();

});