//  // Function to handle the radio button click event
//  function handleRadioClick(event) {
//     // Get all the boxes with class "main_container"
//     const boxes = document.querySelectorAll(".main_container");

//     // Loop through all the boxes
//     for (const box of boxes) {
//       // Find the corresponding radio button for the current box
//       const radioButton = box.querySelector('input[name="radio1"]');

//       // Check if the current radio button is the one that triggered the event
//       if (radioButton === event.target) {
//         // If the radio button is checked, add the "selected" class to the box
//         if (radioButton.checked) {
//           box.classList.add("selected");
//         } else {
//           // If the radio button is unchecked, remove the "selected" class from the box
//           box.classList.remove("selected");
//         }
//       } else {
//         // If the current radio button is not the one that triggered the event, remove the "selected" class from the box
//         box.classList.remove("selected");
//       }
//     }
//   }

//   // Get all radio buttons with the name "radio1"
//   const radioButtons = document.getElementsByName("radio1");

//   // Add event listener to each radio button
//   for (const radioButton of radioButtons) {
//     radioButton.addEventListener("click", handleRadioClick);
//   }