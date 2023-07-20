import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


if (document.querySelector('[data-menu="btn"]')) {
    const elContainer = document.querySelector('[data-menu="container"]')
    const elButton = document.querySelector('[data-menu="btn"]')

    function mobileMenu(params) {
        this.el = params.elContainer || false;
        this.button = params.elButton;
        this.state = 'close';

        this.open = function () {
            this.el ? this.el.classList.add('open') : ''
            this.button.classList.add('open')
            document.body.classList.add('hidden')
            document.body.classList.add('open-mobile-menu')
            this.state = 'open';

        }

        this.close = function () {

            this.el ? this.el.classList.add('close-animate') : false
            this.button.classList.remove('open')

            setTimeout(() => {
                this.el ? this.el.classList.remove('open') : false
                this.el ? this.el.classList.remove('close-animate') : false
                document.body.classList.remove('hidden')
                document.body.classList.remove('open-mobile-menu')
                this.state = 'close'
            }, 200)

        }

        this.toggle = function () {
            if (this.state == 'close') this.open()
            else this.close()
        }
    }

    window.menuInstanse = new mobileMenu({
        elButton,
        elContainer
    })

    elButton.addEventListener('click', function () {
        window.menuInstanse.toggle()
    })
}


if (document.querySelector('[data-slider="services-cost"]')) {
    let sliderCost = new Splide('[data-slider="services-cost"]', {
        type: 'loop',
        arrows: false,
        pagination: true,
        fixedWidth: '296px',
        gap: 16,
        start: 0,
        mediaQuery: 'min',
        breakpoints: {
            991.98: {
                fixedWidth: '400px',
                gap: 36,
            },
            1439.98: {
                drag: false,
                rewind: false,
                rewindByDrag: false,
            },
        }

    });

    sliderCost.mount();


}


let mapContacts;
let mapContactsToCoordinates = document.querySelector('#map-contacts').getAttribute('data-coord')
ymaps.ready(init);

function init() {
    mapContacts = new ymaps.Map('map-contacts', {
        center: JSON.parse(mapContactsToCoordinates),
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    })

    let placemark = new ymaps.Placemark(JSON.parse(mapContactsToCoordinates), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2MCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81MDdfNTYzMykiPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl81MDdfNTYzMykiPg0KPHBhdGggZD0iTTMwLjUxIDU2LjUyM0MzMC41MDQxIDU2LjY1MTYgMzAuNDQ4OCA1Ni43NzI5IDMwLjM1NTcgNTYuODYxOEMzMC4yNjI1IDU2Ljk1MDYgMzAuMTM4NyA1Ny4wMDAxIDMwLjAxIDU3QzI5LjcyIDU3IDI5LjUgNTYuNzkgMjkuNDkgNTYuNTIzQzI5LjM0NSA1My4zNTUgMjcuNzM0IDUxLjMwNiAyNC42NTggNTAuMzc2QzE0LjUzIDQ3Ljk2OCA3IDM4Ljg2MyA3IDI4QzcgMTUuMjk3IDE3LjI5NyA1IDMwIDVDNDIuNzAzIDUgNTMgMTUuMjk3IDUzIDI4QzUzIDM4Ljg2MyA0NS40NyA0Ny45NjggMzUuMzQyIDUwLjM3NkMzMi4yNjYgNTEuMzA2IDMwLjY1NSA1My4zNTYgMzAuNTEyIDU2LjUyM0gzMC41MVoiIGZpbGw9IiNGRjAwMDAiLz4NCjwvZz4NCjxwYXRoIGQ9Ik0zMC41MSA1Ni41MjNDMzAuNTA0MSA1Ni42NTE2IDMwLjQ0ODggNTYuNzcyOSAzMC4zNTU3IDU2Ljg2MThDMzAuMjYyNSA1Ni45NTA2IDMwLjEzODcgNTcuMDAwMSAzMC4wMSA1N0MyOS43MiA1NyAyOS41IDU2Ljc5IDI5LjQ5IDU2LjUyM0MyOS4zNDUgNTMuMzU1IDI3LjczNCA1MS4zMDYgMjQuNjU4IDUwLjM3NkMxNC41MyA0Ny45NjggNyAzOC44NjMgNyAyOEM3IDE1LjI5NyAxNy4yOTcgNSAzMCA1QzQyLjcwMyA1IDUzIDE1LjI5NyA1MyAyOEM1MyAzOC44NjMgNDUuNDcgNDcuOTY4IDM1LjM0MiA1MC4zNzZDMzIuMjY2IDUxLjMwNiAzMC42NTUgNTMuMzU2IDMwLjUxMiA1Ni41MjNIMzAuNTFaIiBmaWxsPSIjRkYwMDAwIi8+DQo8cGF0aCBkPSJNMzAgNjhDMjcuNzkgNjggMjYgNjYuMjEgMjYgNjRDMjYgNjEuNzkgMjcuNzkgNjAgMzAgNjBDMzIuMjEgNjAgMzQgNjEuNzkgMzQgNjRDMzQgNjYuMjEgMzIuMjEgNjggMzAgNjhaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTI5Ljk5OTcgNjZDMzAuMjY2IDY2LjAwNiAzMC41MzA5IDY1Ljk1ODggMzAuNzc4NyA2NS44NjFDMzEuMDI2NiA2NS43NjMzIDMxLjI1MjQgNjUuNjE3IDMxLjQ0MjkgNjUuNDMwOEMzMS42MzM0IDY1LjI0NDYgMzEuNzg0OCA2NS4wMjIyIDMxLjg4ODIgNjQuNzc2NkMzMS45OTE2IDY0LjUzMTEgMzIuMDQ0OSA2NC4yNjc0IDMyLjA0NDkgNjQuMDAxQzMyLjA0NSA2My43MzQ2IDMxLjk5MTggNjMuNDcwOCAzMS44ODg2IDYzLjIyNTNDMzEuNzg1MyA2Mi45Nzk3IDMxLjYzNCA2Mi43NTcyIDMxLjQ0MzYgNjIuNTcwOUMzMS4yNTMyIDYyLjM4NDYgMzEuMDI3NCA2Mi4yMzgyIDMwLjc3OTcgNjIuMTQwM0MzMC41MzE5IDYyLjA0MjUgMzAuMjY3IDYxLjk5NTEgMzAuMDAwNyA2Mi4wMDFDMjkuNDc4MSA2Mi4wMTI1IDI4Ljk4MDkgNjIuMjI4MiAyOC42MTUzIDYyLjYwMThDMjguMjQ5OCA2Mi45NzU0IDI4LjA0NTEgNjMuNDc3MyAyOC4wNDQ5IDY0QzI4LjA0NDggNjQuNTIyNyAyOC4yNDkzIDY1LjAyNDYgMjguNjE0NiA2NS4zOTg0QzI4Ljk4IDY1Ljc3MjIgMjkuNDc3MiA2NS45ODgyIDI5Ljk5OTcgNjZaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMCAzNC4yVjM5SDQxLjRDNDEuNDc4OCAzOSA0MS41NTY4IDM4Ljk4NDUgNDEuNjI5NiAzOC45NTQzQzQxLjcwMjQgMzguOTI0MiA0MS43Njg1IDM4Ljg4IDQxLjgyNDMgMzguODI0M0M0MS44OCAzOC43Njg1IDQxLjkyNDIgMzguNzAyNCA0MS45NTQzIDM4LjYyOTZDNDEuOTg0NSAzOC41NTY4IDQyIDM4LjQ3ODggNDIgMzguNFYyNC42QzQyIDI0LjUyMTIgNDEuOTg0NSAyNC40NDMyIDQxLjk1NDMgMjQuMzcwNEM0MS45MjQyIDI0LjI5NzYgNDEuODggMjQuMjMxNSA0MS44MjQzIDI0LjE3NTdDNDEuNzY4NSAyNC4xMiA0MS43MDI0IDI0LjA3NTggNDEuNjI5NiAyNC4wNDU3QzQxLjU1NjggMjQuMDE1NSA0MS40Nzg4IDI0IDQxLjQgMjRIMzYuNDQ2TDM2LjI4OCAyNkg0MFYyN0gzNi4yMUwzNi4wNTEgMjlINDBWMzBIMzUuOTcyTDM1LjU5OSAzNC43MTVDMzUuNTk2NiAzNC43NTQ5IDM1LjU4NjMgMzQuNzkzOSAzNS41Njg3IDM0LjgyOTlDMzUuNTUxMiAzNC44NjU4IDM1LjUyNjcgMzQuODk3OCAzNS40OTY2IDM0LjkyNDJDMzUuNDY2NiAzNC45NTA2IDM1LjQzMTcgMzQuOTcwOCAzNS4zOTM4IDM0Ljk4MzdDMzUuMzU1OSAzNC45OTY1IDM1LjMxNTkgMzUuMDAxNyAzNS4yNzYgMzQuOTk5QzM1LjE5OTYgMzQuOTkxNSAzNS4xMjg5IDM0Ljk1NTUgMzUuMDc3OCAzNC44OTgzQzM1LjAyNjYgMzQuODQxMSAzNC45OTg5IDM0Ljc2NjcgMzUgMzQuNjlWMTguNEMzNSAxOC4yOTM5IDM0Ljk1NzkgMTguMTkyMiAzNC44ODI4IDE4LjExNzJDMzQuODA3OCAxOC4wNDIxIDM0LjcwNjEgMTggMzQuNiAxOEgzNFYxNy40QzM0IDE3LjI5MzkgMzMuOTU3OSAxNy4xOTIyIDMzLjg4MjggMTcuMTE3MkMzMy44MDc4IDE3LjA0MjEgMzMuNzA2MSAxNyAzMy42IDE3SDIzLjRDMjMuMjkzOSAxNyAyMy4xOTIyIDE3LjA0MjEgMjMuMTE3MiAxNy4xMTcyQzIzLjA0MjEgMTcuMTkyMiAyMyAxNy4yOTM5IDIzIDE3LjRWMThIMjIuNEMyMi4yOTM5IDE4IDIyLjE5MjIgMTguMDQyMSAyMi4xMTcyIDE4LjExNzJDMjIuMDQyMSAxOC4xOTIyIDIyIDE4LjI5MzkgMjIgMTguNFYzOC40QzIyIDM4LjU1OTEgMjIuMDYzMiAzOC43MTE3IDIyLjE3NTcgMzguODI0M0MyMi4yODgzIDM4LjkzNjggMjIuNDQwOSAzOSAyMi42IDM5SDI3VjM0LjJDMjcgMzQuMDkgMjcuMDkgMzQgMjcuMiAzNEgyOS44QzI5LjkxIDM0IDMwIDM0LjA5IDMwIDM0LjJaTTI1LjUgMzFWMjVIMjcuNVYzMUgyNS41Wk0yOS41IDI1VjMxSDMxLjVWMjVIMjkuNVpNMjUuNSAyM1YyMEgyNy41VjIzSDI1LjVaTTI5LjUgMjBWMjNIMzEuNVYyMEgyOS41Wk0zNyAzM1YzMkg0MFYzM0gzN1oiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMzYuNTI1NCAyM0wzNi42MDQ0IDIySDM5LjU5OTRDMzkuODE5NCAyMiAzOS45OTk0IDIyLjE4IDM5Ljk5OTQgMjIuNFYyM0gzNi41MjU0WiIgZmlsbD0id2hpdGUiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzUwN181NjMzIiB4PSIxIiB5PSItMSIgd2lkdGg9IjU4IiBoZWlnaHQ9IjY0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl81MDdfNTYzMyIvPg0KPC9maWx0ZXI+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUwN181NjMzIj4NCjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2OCIgZmlsbD0id2hpdGUiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg==',

        iconImageSize: [64, 64]
    })

    mapContacts.controls.remove('geolocationControl');
    mapContacts.controls.remove('searchControl');
    mapContacts.controls.remove('trafficControl');
    mapContacts.controls.remove('typeSelector');
    mapContacts.controls.remove('fullscreenControl');
    mapContacts.controls.remove('zoomControl');
    mapContacts.controls.remove('rulerControl');
    mapContacts.behaviors.disable(['scrollZoom']);
    // mapContacts.behaviors.disable('drag');
    mapContacts.geoObjects.add(placemark)
}


