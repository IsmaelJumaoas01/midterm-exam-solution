// Function to display a greeting after a delay
function delayedGreeting(name) {
  
  setTimeout(() => {
      console.log(`Hello, ${name}!`);  // Print the greeting message with the provided name
  }, 2000);  // The delay is set 2 seconds
}

// Calls the function 
delayedGreeting("Alice");
