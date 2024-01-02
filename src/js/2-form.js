const form = document.querySelector('.feedback-form');

const savedState =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
form.email.value = (savedState.email || '').trim();
form.message.value = (savedState.message || '').trim();

form.addEventListener('input', function (event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const currentState = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (form.email.value.trim() === '' || form.message.value.trim() === '') {
    alert('Будь ласка, заповніть обидва поля цієї форми');
    return;
  }

  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  console.log('Form Data:', formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
});
