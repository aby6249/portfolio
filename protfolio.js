function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_rhz0f8p";
    const templateID = "template_vvk1p0i";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!");
    })
    .catch(err => {
        console.error("Failed to send message:", err);
        alert("Message sending failed. Check console for errors.");
    });
}