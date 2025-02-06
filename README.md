# MongoDB $inc operator error with non-numeric value
This example demonstrates an error that occurs when using the `$inc` operator in MongoDB with a non-numeric value.  The `$inc` operator is designed to increment numeric fields only. Attempting to increment a field with a string or other non-numeric type results in an error.

## Bug
The `bug.js` file contains code that attempts to increment a field named `field2` with a string value.  This results in a MongoDB error indicating that the field value must be a number.

## Solution
The `bugSolution.js` file provides the correct usage of the `$inc` operator, ensuring that only numeric fields are incremented.