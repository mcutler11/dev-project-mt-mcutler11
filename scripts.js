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

const output = document.querySelector("output");
const applicantInfo = [];

const submitHandler = function submitHandler(e) {
  e.preventDefault(); // Prevents the default from following its default.  Duh.

  // Initialize the monthlyPlan object.
  const monthlyPlan = {
    name: document.querySelector("#name").value,
    age: document.querySelector("#age").value,
    amount: document.querySelector("#amount").value,
    interest: document.querySelector("#interest").value / 1200,
    period: document.querySelector("#period").value
  };

  const pv = monthlyPlan.amount;
  const r = monthlyPlan.interest;
  const n = monthlyPlan.period;

  const mp = (r * pv) / (1 - (1 + r) ** -n);
  const tp = n * mp - pv;
  // Find a way to allow the value of "interest" to be a double (decimal).

  applicantInfo.push(monthlyPlan.name, monthlyPlan.age, pv, r, n, mp, tp);

  output.textContent = applicantInfo;
};

// Here, we listen for and handle the 'submit' event.
document.querySelector("form").addEventListener("submit", submitHandler);
