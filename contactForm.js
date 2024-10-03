const scriptURL = 'https://script.google.com/macros/s/AKfycbwPcDAd-qjVzG0en6jpyQWP0eQOmvWnm54elJLD0IJsCVaL4hN9khM8I7yo_cGFmagV/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      //.then(response => console.log('Success!', response)) //for no msg display background only...
      .then(alert("The message was sent successfully... we will connect you later, Thank you for your time!!"))
      .catch(error => console.error('Error!', error.message))
  })