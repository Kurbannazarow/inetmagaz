// Работа с header dropdown
const selectAllElements = document.querySelectorAll('[data-select]');
selectAllElements.forEach(function (item) {
    item.addEventListener('click', function (event) {
        if (event.target.hasAttribute('data-select-item')) {
            const itemTitle = event.target.dataset['selectItem'];
            event.target.closest("[data-select]").querySelector('[data-select-title]').textContent = itemTitle;
            event.target.closest("[data-select]").querySelector('.header-select__dropdown').classList.toggle('hidden');
        } else {
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');
        }
    });
});