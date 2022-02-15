document.querySelector('.gallery').addEventListener('click', (e) => {
    showFullsizePhoto(e)
})

function showFullsizePhoto(e) {
    let photoSrc = e.target.getAttribute('src')
    let shadow = document.createElement('div')
    shadow.classList.add('shadow')
    shadow.insertAdjacentHTML('afterbegin',
    `<div class="single-photo">
        <div class="wrap">
            <img src="${photoSrc}" alt="large photo"/>
            <div class="single-photo-close">&#10005;</div>
        </div>
    </div>>`)


    document.body.insertAdjacentElement('afterbegin', shadow)

    if (document.querySelector('.single-photo-close')) {
        document.querySelector('.single-photo-close').addEventListener('click', () => {
            console.log('hh')
            shadow.remove()
        })
    }
}



/*  */