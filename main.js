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
        handleSubmit(document.getElementById('studentName').value);
    }
};

const handleSubmit = (studentName) => {
if (studentName === "") {
    showHowler();
} else {
    addStudent(studentName);
    document.querySelector("form").reset();
}
}

const showHowler = () => {
    let domString = `
  <div class="howler">
  <img src="https://static.wikia.nocookie.net/harrypotter/images/e/e4/Howler.png" alt-text="howler">
  <h6>"You must enter your name!"</h6>
  </div>
  `;
    renderToDom("#howlerDiv", domString);

    const clearHowler = () => {
        let domString = ` `;
        renderToDom("#howlerDiv", domString);
      };
      
    setTimeout(clearHowler, 3 * 1000);
};

const addStudent = (studentName) => {
    const newStudent = {
        name: studentName,
        house:  sortStudent(),
    }
    newStudents.push(newStudent)
    placeStudents();
};

const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
};



const sortStudent = () => {
    const random = randomNumber();
    let studentHouse = '';
    switch (random) {
        case 1:
            studentHouse = "Griffyndor";
            break;
        case 2:
            studentHouse = "HufflePuff";
            break;
        case 3:
            studentHouse = "Ravenclaw";
            break;
        case 4:
            studentHouse = "Slytherin";
            break;
    }
    return studentHouse;
}

const getCrest = (studentHouse) => {
    let crest = "";
    switch (studentHouse) {
        case studentHouse = "Griffyndor":
            crest = `https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png`;
            break;
        case studentHouse = "HufflePuff":
            crest = `https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png`;
            break;
        case studentHouse = "Ravenclaw":
            crest = `https://static.wikia.nocookie.net/pottermore/images/4/4f/Ravenclaw_crest.png`;
            break;
        case studentHouse = "Slytherin":
crest = `https://static.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png`;
            break;
    }
    return crest;
}



const placeStudents = () => {
    let domString = ''
    for (student of newStudents) {
        domString += `<p>${student.name}</p> <img src="${getCrest(student.house)}" alt="${student.house}"/> <p class="${student.house.toLowerCase()}">${student.house}</p>`
    }
    renderToDom('#hogwartsStudents', domString);
}

const expelStudents = () => {};


const init = () => {
    sortingHat();
    buttonControl();
    sortStudent();
}

init();