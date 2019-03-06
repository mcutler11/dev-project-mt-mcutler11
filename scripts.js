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
 * 2b. The object shall be made up of three (for now) fields:  amount, interest, and period.
 * 3.
 */

// First, initialize the form, the submitHandler, and the object

const submitHandler = function submitHandler(e) {
  e.preventDefault(); // Prevents the default from following its default.  Duh.

  // Initialize the monthlyPlan object.
  const monthlyPlan = {
    amount: document.querySelector("#amount").value,
    interest: document.querySelector("#interest").value / 100,
    period: document.querySelector("#period").value
  };

  const pv = monthlyPlan.amount;
  const r = monthlyPlan.interest;
  const n = monthlyPlan.period;

  const p = (r * pv) / (1 - (1 + r) ** -n);
  // Find a way to allow the value of "interest" to be a double (decimal).

  console.log(monthlyPlan); // SUCCESS.
  console.log(p);
};

// Here, we listen for and handle the 'submit' event.
document.querySelector("form").addEventListener("submit", submitHandler);
