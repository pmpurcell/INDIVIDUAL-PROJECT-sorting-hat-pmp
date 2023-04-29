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

  const buttonControl = () => {
      document.querySelector('body').addEventListener('click', buttonActions);
  };

  const buildForm = () => {
    let domString = `
    <form id="studentNameForm">
    <div class="mb-3">
      <label for="studentName" class="form-label">Student Name</label>
      <input type="text" placeholder="Enter your name here." class="form-control" id="studentName">
    </div>
    <button type="submit" id="submitButton" class="btn btn-primary">Submit</button>
    </form>
    `;

   renderToDom("#studentForm", domString);
  }


  const buttonActions = (event) => {
    if (event.target.id === "startButton") {
        console.log('Shits getting clicked, yo!');
        buildForm();
    }
    if (event.target.id === 'submitButton') {
        event.preventDefault();
        console.log('submit');
        console.log(document.getElementById('studentName').value);
        addStudent(document.getElementById('studentName').value);
    }
};

const addStudent = (student) => {
    newStudents.push(student)
    sortStudents();
};

const sortStudents = () => {
    let domString = ''
    for (student of newStudents) {
        domString += `<p>${student}</p>`
    }
    renderToDom('#hogwartsStudents', domString);
}

const expelStudents = () => {};


const init = () => {
    sortingHat();
    buttonControl();
}

init();