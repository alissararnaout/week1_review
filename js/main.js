import Person from "./modules/DataObject.js";

// IIFE = Immediately Invoiced Function Expression
(() => {
    console.log('fired!')
    // grab the bio container and get ready to populate its content
    const bioInfo = document.querySelector('.bio-wrapper').children;

    //


    // this refers to the heading log (the first child of the bio-wrapper div)
    bioInfo[0].textContext = Person.name;
    // this refers to the paragraph log (the second child of the bio-wrapper div)
    bioInfo[1].textContext = Person.role;

    bioInfo[2].src= `images/${Person.avatar}`;

    debugger;
})();