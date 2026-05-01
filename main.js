const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');


function createNote(title, text) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
        <div class='note-header'>
            <p id='note-title'>${title}</p>
            <input id = 'note-title-input' class = 'hidden'>
            <div>
                <button class = 'note-edit'><i class='fas fa-pen'></i></button>
                <button class = 'note-del'><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>    
        <p id ='note-description'>${text}</p>
        <textarea id = 'note-description-textarea' class = 'hidden'></textarea>
    `

    const editBtn = noteEl.querySelector('.note-edit');
    const deleteBtn = noteEl.querySelector('.note-del');
    const titleEl = noteEl.querySelector('#note-title');
    const descriptionEl = noteEl.querySelector('#note-description');
    const titleInputEl = noteEl.querySelector('#note-title-input');
    const descriptionAreaEl = noteEl.querySelector('#note-description-textarea');

    editBtn.addEventListener('click', (e) => {
        titleEl.classList.toggle('hidden');
        descriptionEl.classList.toggle('hidden');
        titleInputEl.classList.toggle('hidden');
        descriptionAreaEl.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove();
    });

    titleInputEl.addEventListener('input', (e) => {
        titleEl.innerText = e.target.value;
    });

    descriptionAreaEl.addEventListener('input', (e) => {
        descriptionEl.innerText = e.target.value;
    });

    return noteEl;
};

addBtn.addEventListener('click', (e) => {
    const el = createNote('Title', '<3');
    notesEl.appendChild(el);
});
//<button class = 'note-edit'><i class="fa fa-check" aria-hidden="true"></i></button>