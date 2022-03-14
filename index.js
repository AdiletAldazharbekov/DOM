const model=[
    {tag: 'h1', value: `Let's talk`},
    {tag: 'input', value: ''},
    {tag: 'label', value: 'Your Name'},
    {tag: 'input', value: ''},
    {tag: 'label', value: 'Your Email'},
    {tag: 'button', value: 'SEND MESSAGE'},
    {tag: 'input', value: ''},
]

const content = document.querySelector('.container-message')

model.forEach(block =>{
    let html=''
if(block.tag==='h1'){
html= createH1(block.value)

} else if(block.tag==='input'){
html=createInput()

} else if(block.tag==='label'){
html=createLabel(block.value)

} else if(block.tag==='button'){
html=createButton(block.value)
}

content.insertAdjacentHTML('beforeend', html)
})


function createH1 (value=''){
    return `<h1>${value}</h1>`
}

function createInput (){
    return `<input type="text" />`
}

function createLabel (value=''){
    return `<label>${value}</label>`
}

function createButton (value=''){
    return `<button>${value}</button>`
}