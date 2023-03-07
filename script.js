const checkB = document.getElementById('agreement');
const sendbtn = document.getElementById('submit-btn');
const textArea = document.querySelector('#textarea');
const form = document.querySelector('#evaluation-form');

function textCount() {
  const area = document.querySelector('#textarea');
  const count = area.value.length;
  const counter = document.querySelector('#counter');
  counter.innerText = (500 - count);
}

textArea.addEventListener('input', textCount);

function headerLogin() {
  const inputEmail = document.querySelector('#email-header');
  const inputPassword = document.querySelector('#password-header');
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const headerButton = document.querySelector('#header-form-btn');
headerButton.addEventListener('click', headerLogin);

// verifica se o checkbox foi selecionado
checkB.onchange = function verifica() {
  if (this.checked) {
    sendbtn.disabled = false;
  } else {
    sendbtn.disabled = true;
  }
};

// 21
function newForm(materias) {
  const nome = document.querySelector('#input-name').value;
  const sobreNome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const obs = textArea.value;
  form.style.display = 'none';
  const result = document.createElement('form');
  result.innerText = `Nome: ${nome} ${sobreNome}
  Email = ${email}
  Casa: ${house}
  Família: ${family}
  Matérias: ${materias}
  Avaliação: ${avaliacao}
  Observações: ${obs}`;
  document.querySelector('main').prepend(result);
}

const buttonSendForm = document.querySelector('#submit-btn');
buttonSendForm.addEventListener('click', (event) => {
  event.preventDefault();
  const materias = document.querySelectorAll('input[name="subject"]:checked');
  const materiasAll = [];
  for (let i = 0; i < materias.length; i += 1) {
    materiasAll.push(materias[i].value);
  }
  newForm(materiasAll);
});
