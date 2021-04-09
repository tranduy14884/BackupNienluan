// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
const tabs = document.querySelectorAll('.tab-item');
tabs.forEach(tab => {
    tab.onclick = function(){
        document.querySelector('.tab-item.tab-active').classList.remove('tab-active');
        this.classList.add('tab-active');
    }
});