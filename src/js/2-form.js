const form = document.querySelector('.feedback-form');

const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  form.email.value = savedState.email || '';
  form.message.value = savedState.message || '';

  form.addEventListener('input', function (event) {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        
      const currentState = {
        email: form.email.value,
        message: form.message.value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: form.email.value,
      message: form.message.value,
    };
    console.log('Form Data:', formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');
  });