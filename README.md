# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![desktop](https://github.com/ebubethedev/newsletter-sign-up-with-success-message-Frontend-Mentor-Challenge/assets/151538254/63a984e6-4a3a-4b6f-8b0e-2cef51aa249e)
![mobile view](https://github.com/ebubethedev/newsletter-sign-up-with-success-message-Frontend-Mentor-Challenge/assets/151538254/7550b61e-6dde-4f23-bb83-284ec6179538)

### Links

- Solution URL: [newsletter-sign-up-with-success-message-Frontend-Mentor-Challenge](https://ebubethedev.github.io/newsletter-sign-up-with-success-message-Frontend-Mentor-Challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Sass

### What I learned

I learned to use email validation with javascript

```js
function validateEmail() {

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Valid email required";
        emailField.style.borderColor = "hsl(4, 100%, 67%)";
        return false;

    }
    emailError.innerHTML = "";
    emailField.style.borderColor = "green";
    return true;
}
```
### Continued development

I want to continue my frontend development by learning react.js

## Author

- Website - [ebubethedev](https://www.your-site.com)
- Frontend Mentor - [@ebubethedev](https://www.frontendmentor.io/profile/ebubethedev)
- Twitter - [@ebubethedev](https://www.twitter.com/ebubethedev)

