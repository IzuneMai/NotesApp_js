const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add')


function createNote(title, text){
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
        <div class='note-header'>
            <p>${title}</p>
            <div class = 'note-button'>
                <button class = 'note-edit'><i class='fas fa-pen'></i></button>
                <button class = 'note-del'><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>    
        <p id = 'note-description'>${text}</p>
    `
    return noteEl;
};

addBtn.addEventListener('click', (e) =>{
    const el = createNote('Заголовок', 'Текст');
    notesEl.appendChild(el);
})
