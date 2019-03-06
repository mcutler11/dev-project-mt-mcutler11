/** Michael Cutler's Master Developer Project - Monthly Payment Program
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s).
 * 3. Be sure that both fields get concatenated into 1 'String.'
 * 4. Add those to an 'Array' that will hold all of the student names.
 * 5. Iterate over said 'Array', passing each of the names as arguments into console.log().
 */

/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store these values in variables.
 * 2a. Actually first, initialize an Object (as var).
 * 2b. The object shall be made up of three (for now)
 */

// First, initialize the form, the submitHandler, and the object
const monthlyPlan = new Object();
monthlyPlan.amount;
monthlyPlan.interest;
monthlyPlan.period;

const form = document.querySelector("form");
const submitHandler = function submitHandler(e) {
  e.PreventDefault(); // Prevents the default from following its default.  Duh.

  // NEXT:  Try to piece together a plan for the next phase.
};
