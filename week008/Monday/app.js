const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const number = document.getElementById('number').value;

  var myHeaders = new Headers();
  // myHeaders.append('Authorization');
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    first_name: firstName,
    last_name: lastName,
    number: number,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://3.90.66.89:8000/api/student/', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
});

const btnStudents = document.getElementById('get-students');
btnStudents.addEventListener('click', () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://3.90.66.89:8000/api/student/', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result, typeof result);

      const cards = document.getElementById('cards');

      JSON.parse(result).forEach((item) => {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${item.first_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      `;
        card.classList.add('card');
        card.style.width = '18rem';
        cards.appendChild(card);
      });

      //     <div class="card" style="width: 18rem;">
      //   <div class="card-body">
      //     <h5 class="card-title">Card title</h5>
      //     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //     <a href="#" class="card-link">Card link</a>
      //     <a href="#" class="card-link">Another link</a>
      //   </div>
      // </div>
    })
    .catch((error) => console.log('error', error));
});

const data = [
  { id: 1, first_name: 'Ata', last_name: 'Ata', number: 1111 },
  { id: 2, first_name: 'Betül', last_name: 'Betül', number: 2222 },
  { id: 3, first_name: 'Jean', last_name: 'Jean', number: 3333 },
  { id: 4, first_name: 'Durmus', last_name: 'Durmus', number: 4444 },
  { id: 5, first_name: 'Israfil', last_name: 'Israfil', number: 5555 },
  { id: 13, first_name: 'Daniel', last_name: 'Alfaro', number: 6666 },
  { id: 15, first_name: 'henrry', last_name: 'Gomez', number: 5555 },
  { id: 16, first_name: 'Atax', last_name: 'Ataxx', number: 6786 },
  { id: 17, first_name: 'Daniel', last_name: 'Alfaro', number: 6666 },
  { id: 18, first_name: 'Daniel', last_name: 'Alfaro', number: 6666 },
  { id: 19, first_name: 'Henry', last_name: 'Gomez', number: 7777 },
  { id: 20, first_name: 'ismail', last_name: 'bilge', number: 8888 },
];
