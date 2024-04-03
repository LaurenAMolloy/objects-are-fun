const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};

learning.topic = "JS";

learning.learningGoals = [
  "Understand JavaScript fundamentals",
  "Learn something new",
  "Have Fun",
  "Expand my network",
];

learning.category = "Front End Development";

learning.topicImportance = "High";

console.log(learning);

learning.topic = "JavaScript";

//Change & Remove Values
learning.learningGoals.splice(1, 1);

console.log(learning);

//Display Text & Remove a Class

topicElement.innerText = `✔️ I am learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");