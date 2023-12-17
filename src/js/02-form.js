
const form = document.querySelector(".feedback-form");


    const initialText = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (initialText) {
        Array.from(form.elements).forEach(element => {
            const savedText  = initialText[element.name];
            if (savedText) {
                element.value = savedText;
            }
        });
    }


form.addEventListener("submit", event => {
    event.preventDefault();
   
    const currentForm = event.target;
    const email = currentForm.elements.email.value.trim();
    const message = currentForm.elements.message.value.trim();

    if (email === "" || message === "") {
        alert("All form fields must be filled in");
        return;
    }

    const personalData = {
        email,
        message,
    }

    console.log(personalData);

    form.reset();
        localStorage.removeItem("feedback-form-state");
   
});

form.addEventListener("input", ()=> {
        const submitObj = {};
    new FormData(form).forEach((value, key) => {
        submitObj[key] = value.trim();
    });

    localStorage.setItem("feedback-form-state", JSON.stringify(submitObj));
});
