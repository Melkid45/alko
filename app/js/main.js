function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

document.querySelectorAll(".main__catalog-body-block-filter-acc-item").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.main__catalog-body-block-filter-acc-item-bot');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.main__catalog-body-block-filter-acc-item-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.main__catalog-body-block-filter-acc-item').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.main__catalog-body-block-filter-acc-item-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.main__catalog-body-block-filter-acc-item').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 10 + 'px';
        }
    })
})
$('.hit__body-tab-item').on('click', function(e){
    $(this).addClass('active')
    $('.hit__body-tab-item').not(this).removeClass('active')
})
$('.catalog__body-tab-item').on('click', function(e){
    $(this).addClass('active')
    $('.catalog__body-tab-item').not(this).removeClass('active')
})
$('.filter__mob').on('click', function(e){
    $('.main__catalog-mob').addClass('active')
    $('body').addClass('hidden')
})
$('.close__modal').on('click', function(e){
    $('.main__catalog-mob').removeClass('active')
    $('body').removeClass('hidden')
})
$('.filter__mob').on('click', function(e){
    $('.catalog-mob').addClass('active')
    $('body').addClass('hidden')
})
$('.close__catalog').on('click', function(e){
    $('.catalog-mob').removeClass('active')
    $('body').removeClass('hidden')
})
$('.search__btn').on('click', function(e){
    $('.search').addClass('active')
    $('body').addClass('hidden')
})
$('.close__search').on('click', function(e){
    $('.search').removeClass('active')
    $('body').removeClass('hidden')
})
$('.burger').on('click', function(e){
    $('.menu').addClass('active')
    $('body').addClass('hidden')
})
$('.close__menu').on('click', function(e){
    $('.menu').removeClass('active')
    $('body').removeClass('hidden')
})
$('.card__body-info-main-vol-items span').on('click', function(e){
    if ($(this).hasClass('dis')){

    }else{
        $(this).addClass('active')
        $('.card__body-info-main-vol-items span').not(this).removeClass('active')
    }
})

var splide = new Splide( '#splide__hit', {
    perPage: 4,
    type: 'loop',
    gap: '20px',
    pagination: false
} );

splide.mount();
var splide = new Splide( '#splide__vin', {
    perPage: 4,
    type: 'loop',
    gap: '20px'
} );

splide.mount();
var splide = new Splide( '#splide__strong', {
    perPage: 4,
    type: 'loop',
    gap: '20px'
} );

splide.mount();
var splide = new Splide( '#splide__sale', {
    perPage: 4,
    type: 'loop',
    gap: '20px'
} );

splide.mount();

