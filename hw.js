const body = document.body
const wrapper = document.createElement('div')
wrapper.className='wrapper'

const containerMessage = document.createElement('div')
containerMessage.className='container-message'

const h1 = document.createElement('h1')
h1.innerText=`Let's talk`
const input1 = document.createElement('input')
const label1 = document.createElement('label')
label1.innerText='Your Name'
const input2 = document.createElement('input')
const label2 = document.createElement('label')
label2.innerText='Your Email'
const button = document.createElement('button')
button.innerHTML='SEND MESSAGE'

containerMessage.append(h1)
containerMessage.append(input1)
containerMessage.append(label1)
containerMessage.append(input2)
containerMessage.append(label2)
containerMessage.append(button)

wrapper.append(containerMessage)
body.append(wrapper)

const alertEmail = () => {
    if (input1.value==='' || input2.value===''){
        alert('Заполните Имя и электронный адрес!')
    }else {
        alert('Молодец!')
        input1.value=''
        input2.value=''
    }
  }
  
  button.addEventListener("click", alertEmail)