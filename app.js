const scriptURL = 'https://script.google.com/macros/s/AKfycbw-hM85rWPlh_cFPGpAXsdXFVjSI1yC8b8boM1sbDvTpvuE3l6fgVzJtzhmfg7NsvSH/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerText = 'Thank You For Subscribing!'
            setTimeout(() => {
                msg.innerHTML = ''
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})