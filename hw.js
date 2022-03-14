const bodyElem= `
	font-family: "Roboto";
	font-style: normal;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.7);
`
const wrapperClass= 
	`max-width: 1232px;
	width: 100%;
	margin: 0 auto;
    `
const containerClass=
`	max-width: 306px;
	width: 100%;
	text-align: center;
    margin: 0 auto;`

const h1Elem = `
    font-size: 48px;
    line-height: 56px;
`
const inputElem = `
    border: none;
    border-bottom: 2px solid black;
    width: 100%;
    font-size: 20px;
    outline: none;
    margin-top: 1rem;
`
const labelElem = `
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
`
const buttonElem = `
    margin-top: 64px;
    width: 230px;
    height: 57px;
    background: #ca0000;
    border: 1px solid #ff0000;
    border-radius: 5px;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
`
const body = document.body
body.style.cssText=bodyElem
const wrapper = document.createElement('div')
wrapper.style.cssText=wrapperClass

const containerMessage = document.createElement('div')
containerMessage.style.cssText=containerClass

const h1 = document.createElement('h1')
h1.innerText=`Let's talk`
h1.style.cssText=h1Elem

const input1 = document.createElement('input')
input1.style.cssText=inputElem

const label1 = document.createElement('label')
label1.innerText='Your Name'
label1.style.cssText=labelElem

const input2 = document.createElement('input')
input2.style.cssText=inputElem

const label2 = document.createElement('label')
label2.innerText='Your Email'
label2.style.cssText=labelElem

const button = document.createElement('button')
button.innerHTML='SEND MESSAGE'
button.style.cssText=buttonElem

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


