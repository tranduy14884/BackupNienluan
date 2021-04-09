const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const searchs = $$('.search-item');
const contents = $$(".tab-search-content");
// const tabActive = $(".search-item-active");
// const line = $(".tab-seach .line");
// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

searchs.forEach((search,idx) => {
    const content = contents[idx];
    search.onclick = function(){
        
        $('.search-item.search-item-active').classList.remove('search-item-active');
        $('.tab-search-content.active').classList.remove('active');

        // line.style.left = this.offsetLeft + "px";
        // line.style.width = this.offsetWidth + "px";

        this.classList.add('search-item-active');
        content.classList.add("active");
    }
});