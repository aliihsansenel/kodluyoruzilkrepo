var liste = document.getElementById('list');
var input = document.getElementById('task');
var liCounter = 4;

const initialLiNodes = Array.from(liste.children);

initialLiNodes.forEach(function(liNode){
    liNode.addEventListener('click', (e) => {
        if(e.target.classList.contains('checked'))
            e.target.classList.remove('checked');
        else
            e.target.classList.add('checked');
        
    });
    liNode.children[0].addEventListener('click', (e) => {console.log('tık1'); e.target.parentNode.remove()});
});
function newElement(text = null){
    if(input.value !== ''){
        let li = document.createElement('li');
        li.innerHTML = `${input.value}<span class="close">×</span>`;
        li.addEventListener('click', (e) => {
            if(e.target.classList.contains('checked'))
                e.target.classList.remove('checked');
            else
                e.target.classList.add('checked');
            
        });
        li.children[0].addEventListener('click', (e) => {console.log('tık1'); e.target.parentNode.remove()});
        liste.appendChild(li);
        $('#liveToastFail').toast('dispose');
        $('#liveToastSuccess').toast('show');
        input.value = '';
        input.focus();
    }else{
        $('#liveToastSuccess').toast('dispose');
        $('#liveToastFail').toast('show');
    }
        
}