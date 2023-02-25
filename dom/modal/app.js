// 'use strict';

// const addModalBtn = document.getElementById('add-movie');
// const addModal = document.getElementById('add-modal');
// const backdrop = document.getElementById('backdrop');
// const addModalCancelBtn = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--passive")
// const addBtn = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--success");
// const inputs = document.querySelectorAll('input');
// const entryText = document.querySelector("#entry-text");
// const movieListElement = document.querySelector("#movie-list");
// const deleteModal = document.querySelector("#delete-modal");
// const deleteBtn = document.querySelector("#delete-modal > div > button.btn.btn--danger");
// const deleteModalCancelBtn = document.querySelector("#delete-modal > div > button.btn.btn--passive");

// const movieList = [];

// const closeModal = (type = 'add') => {
//     if (type === 'delete') {
//         deleteModal.classList.remove('visible');
//     } else {
//         addModal.classList.remove('visible');
//     }
//     backdrop.classList.remove('visible');
// }

// addModalBtn.addEventListener('click', () => {
//     addModal.classList.add('visible');
//     backdrop.classList.add('visible');
// })

// backdrop.addEventListener('click', closeModal);
// addModalCancelBtn.addEventListener('click', closeModal);
// deleteModalCancelBtn.addEventListener('click', () => closeModal('delete'))

// const addMovie = (movie) => {
//     const listItem = document.createElement('li');
//     listItem.className = 'list-item';
//     // listItem.innerHTML = `
//     //     <img src="${movie.imageUrl}" alt="${movie.title}">
//     //     <span>Rating is ${movie.rating}</span>
//     //     <button>❌</button>
//     // `
//     const modalTemplate = document.getElementById('list-item');
//     const modalBody = document.importNode(modalTemplate.content,  true);
//     modalBody.querySelector('img').src = movie.imageUrl;
//     modalBody.querySelector('img').alt = movie.title;
//     modalBody.querySelector('span').textContent = `Rating is ${movie.rating}`;
//     listItem.append(modalBody);
//     movieListElement.append(listItem);

//     listItem.addEventListener('click', () => {
//         deleteModal.classList.add('visible');
//         backdrop.classList.add('visible');
//         deleteMovie(movie.id);
//     })
// }

// const deleteMovie = (id) => {
//     deleteBtn.addEventListener('click', () => {
//         const index = movieList.findIndex(m => m.id === id);
//         const listItem = document.querySelectorAll('.list-item');
//         movieListElement.removeChild(listItem[index]);
//         closeModal('delete')
//     });
// }

// addBtn.addEventListener('click', () => {
//     const newMovie = {
//         id: Math.random().toString(),
//         title: inputs[0]?.value,
//         imageUrl: inputs[1]?.value,
//         rating: inputs[2]?.value
//     }
//     movieList.push(newMovie);
//     if (movieList.length) {
//         entryText.remove();
//         closeModal();
//         addMovie(newMovie);
//     }
// });

// console.log('APPJS')

const addMovieBtn = document.getElementById('add-movie');
const movieAddModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--passive");
const addItemsBtn = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--success");
const inputs = document.querySelectorAll('input');
const entryText = document.querySelector("#entry-text");
const movieList = document.querySelector("#movie-list");
 const deleteModal = document.querySelector("#delete-modal");
 const deleteModalCancelBtn = document.querySelector("#delete-modal > div > button.btn.btn--passive");
 const deleteModalYesBtn = document.querySelector("#delete-modal > div > button.btn.btn--danger");

const items = [];

const closeModal = (type = 'add') => {
    if (type === 'delete') {
        deleteModal.classList.remove('visible');
    } else {
        movieAddModal.classList.remove('visible');
    }
    
    backdrop.classList.remove('visible');
}

addMovieBtn.addEventListener('click', () => {
    movieAddModal.classList.add('visible');
    backdrop.classList.add('visible');
})

deleteModalYesBtn.addEventListener('click', () => )

deleteModalCancelBtn.addEventListener('click', () => closeModal('delete'));


cancelBtn.addEventListener('click', () => {
    movieAddModal.classList.remove('visible');
    backdrop.classList.remove('visible');
})

cancelBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

 const confirmation = (id) => {
   backdrop.classList.add('visible');
   deleteModal.classList.add('visible');

   deleteModalYesBtn.addEventListener('click', () => {
        const idx = items.findIndex(item => item.id ===id);
        const listItems = document.querySelectorAll('.list-item');
        movieList.removeChild(listItems[idx])
        deleteModal.classList.remove('visible');
        backdrop.classList.remove('visible');
   })
 }

addItemsBtn.addEventListener('click', () => {
    
    const newMovie = {
        id: Math.random().toString(),
        title: inputs[0].value,
        imageUrl: inputs[1].value,
        rating: inputs[2].value
    }
    // console.log(newMovie);
    items.push(newMovie);  // код не работает!
    closeModal()

    if (items.length) {
        entryText.remove();
            const ulElement = document.createElement('li');
            ulElement.className = 'list-item';
            ulElement.innerHTML = 
            <p>${newMovie.title}</p> // код не работает!
            <span>❌</span>  

            ulElement.addEventListener('click', () => confirmation(newMovie.id));
            movieList.append(ulElement);

            console.log(items)
        
    } 

})




