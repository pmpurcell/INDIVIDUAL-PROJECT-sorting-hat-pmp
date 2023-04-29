// Student Arrays

const newStudents = [];

const deathEaters = []; 

// Render to Dom

const renderToDom = (containerId, textToRender) => {
  const selectedContainer = document.querySelector(containerId);
  selectedContainer.innerHTML = textToRender;
};

const sortingHat = () => {
    let domString = `<div class="card" style="width: 18rem;">
      <img src="https://w7w5t4b3.rocketcdn.me/wp-content/uploads/2018/07/sorting-hat-quiz.jpg" class="card-img-top" alt="hat">
      <div class="card-body">
        <h5 class="card-title">Welcome to Hogwarts</h5>
        <p class="card-text">Never tickle a sleeping dragon.</p>
        <a href="#" id="startButton" class="btn btn-primary">Get sorted</a>
      </div>
    </div>`;
  
    renderToDom("#sortingHat", domString);
  };

  sortingHat();

const sortStudents = () => {};

const expelStudents = () => {};

const addStudent = () => {};