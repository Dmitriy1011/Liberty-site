document.addEventListener('DOMContentLoaded', function () {

    (function handleAccrodion() {
        $(function () {
            $("#main-info__box-costs").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $("#main-info__box-modal-costs").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-clothes-types").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-season").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-brand").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });


        $(function () {
            $(".main-info__box-gender").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-composition").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-materials").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-insulation").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-purpose").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });

        $(function () {
            $(".main-info__box-color").accordion({
                collapsible: true,
                active: 0,
                icons: false,
                heightStyle: 'content'
            });
        });
    })()

    const element = document.querySelector('select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });

    const links = document.querySelectorAll('.page-container__links-link');
    for (const link of links) {
        link.addEventListener('click', event => {
            event.preventDefault();
            link.classList.add('link-active')
        });
    }

    let buttons = document.querySelectorAll('.main-info__categories-button');

    document.querySelector('.show-button320').addEventListener('click', () => {
        buttons.forEach(but => {
            if (but.classList.contains('hidden-button')) {
                but.classList.remove('hidden-button')
            }
        })
    })




    let modal = document.getElementById("myModal");

    let modalContent = document.querySelector('.main-info__box-modal-content')

    let btn = document.querySelector('.main-info__select-box-filter');

    let span = document.querySelector('.main-info__box-modal-button-close')

    let but = document.querySelector('.main-info__box-filters-button');

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    but.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modalContent) {
            modal.style.display = "none";
        }
    }


    let cartButton = document.querySelector('.cart-others');

    cartButton.addEventListener('click', () => {
        console.log('Cart')
        document.querySelector('.main-info__choose-options').classList.add('show-options')
    })

    document.querySelector('.main-info__choose-options-title-icon').addEventListener('click', () => {
        document.querySelector('.main-info__choose-options').classList.remove('show-options')
    })



    let showMore = document.querySelector('.main-info__box-content-show-more-cards');
    let cards = document.querySelectorAll('.main-info__box-content-list-item');

    showMore.addEventListener('click', () => {
        cards.forEach(card => {
            if (card.classList.contains('hidden')) {
                card.classList.remove('hidden');
            }
        });

    })


    let label = document.querySelector('.main-info__box-check');
    let inputs = document.querySelectorAll('.main-info__box-check-input');

    inputs.forEach(el => {
        if (el.hasAttribute('disabled')) {
            el.closest('.main-info__box-check').style.color = "#A0A4A8"
        }
    })

    let showBtn = document.querySelector('.show-button');
    let collapseBtn = document.querySelector('.collapse-button');
    let points = document.querySelectorAll('.main-info__categories-button');

    showBtn.addEventListener('click', () => {
        points.forEach(el => {
            if (el.classList.contains('hidden-point')) {
                el.classList.remove('hidden-point')
                showBtn.style.display = "none"
                collapseBtn.style.display = "block"
            }
        })
    })

    collapseBtn.addEventListener('click', () => {
        points.forEach(el => {
            if (el.classList.contains('collapsible-point')) {
                el.classList.add('hidden-point')
                collapseBtn.style.display = "none"
                showBtn.style.display = "block"
            }
        })
    })


    const container = document.querySelector('.header-bottom__list')

    container.addEventListener('click', function(e) {
        const items = document.querySelectorAll('.header-bottom__item')
        const target = e.target
      Array.from(items).forEach(item => {
          item.classList.remove('active')
      })
      target.closest('li').classList.add('active')
    })


    const cont = document.querySelector('.page-container__links-list')

    cont.addEventListener('click', function(e) {
        const points = document.querySelectorAll('.page-container__links-link')
        const target = e.target
      Array.from(points).forEach(point => {
          point.classList.remove('link-active')
          if(target.classList.contains('disabled')) {
            target.classList.remove('link-active') 
          }
      })
      if(target.classList.contains('disabled')) {
        target.classList.remove('link-active')
      } else {
        target.classList.add('link-active')
      }

    })
})