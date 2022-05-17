const selectbox = document.querySelector('.pl');
const listbox = document.querySelector('.listbox');
const list = document.querySelectorAll('.list')

selectbox.addEventListener('click', function () {
    listbox.classList.toggle('show');
    selectbox.classList.toggle('on');
})

for (i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (event) {
        selectbox.textContent = event.currentTarget.textContent;
        listbox.classList.add('show')
    })
}

// list.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//         const value = e.currentTarget.textContent
//         selectbox.textContent = value;
//         listbox.classList.add('show')
//     })
// })