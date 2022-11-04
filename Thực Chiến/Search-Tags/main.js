const ul = document.querySelector('ul')
const input = document.querySelector('input')
const content = document.querySelector('.content ul')
const btnRemoveAll = document.querySelector('.btn-removeAll');

let tags = ['nodejs', 'reactjs']

render();

function render(){
    ul.innerHTML = ''
    for (let i = 0; i< tags.length; i++){
        let tag = tags[i];
        ul.innerHTML += `
            <li>
                ${tag}
                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
            </li>
        `
    }
    content.appendChild(input)
    input.focus()
}   


input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})


btnRemoveAll.addEventListener('click', function(){
    tags = []
    render()
})

function removeTag(index){
    tags.splice(index, 1);
    render()
}

