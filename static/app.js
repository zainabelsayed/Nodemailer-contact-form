const form = document.getElementById('contact-form')
const formEvent = form.addEventListener("submit",(event)=>{
  event.preventDefault()
  const name = form.getElementsByTagName('input')[0].value
  const email = form.getElementsByTagName('input')[2].value
  const telephone = form.getElementsByTagName('input')[1].value
  const message = form.getElementsByTagName('textarea')[0].value
  sendEmail(name,email,telephone,message)
})
function sendEmail(name, email,telephone, message) {
    const options = {
      method: "POST",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      telephone:telephone,
      message: message
    })
    };
  return fetch("https://nodemailer-contact--form.herokuapp.com/contact", options)
    .then(res =>{
      if(res.status === 200){
        Swal.fire({
        icon: 'success',
        title: 'Your message has been sent Successfully!',
        })
        form.reset()
      }else{
        Swal.fire({
        icon: 'error',
        title: 'Error, please try agian!',
        })
        }
      })
  }