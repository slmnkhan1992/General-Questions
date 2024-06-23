const questions = document.querySelectorAll(".questions");
const answer = document.querySelectorAll(".answer");
const button = document.querySelectorAll("button");
const sawal = document.querySelectorAll(".sawal");

const seeMoreHandler = (button) => {
  const index = Array.from(
    button.parentNode.parentNode.parentNode.children
  ).indexOf(button.parentNode.parentNode);
  if (answer[index].style.display == "none") {
    answer[index].style.display = "block";
    button.innerHTML = "-";
  } else {
    answer[index].style.display = "none";
    button.innerHTML = "+";
  }
};

// const seeMoreHandler = (button) => {
//   const index = Array.from(button.parentNode.parentNode.parentNode.children).indexOf(button.parentNode.parentNode);
//   if (answer[index].style.display === 'none') {
//     answer[index].style.display = 'block';
//     button.innerHTML = '-';
//   } else {
//     answer[index].style.display = 'none';
//     button.innerHTML = '+';
//   }
// }
