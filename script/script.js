document.querySelector('.gallery').addEventListener('click', (e) => {
    console.log(e)
    showFullsizePhoto(e)
})

function showFullsizePhoto(e) {
    console.log(e.target.getAttribute('src'))
    let photoSrc = e.target.getAttribute('src')
/*     let shadow = document.createElement('div')
    shadow.classList.add('shadow')
    shadow.style.cssText = `position: relative; 
                            top: 0; bottom: 0; left: 0; right: 0;
                            background: #30303067;`

    let singlePhoto = document.createElement('div')
    singlePhoto.classList.add('single-photo')
    singlePhoto.style.cssText = `position: absolute; 
                                top: 30px; 
                                width: 800px;
                                min-height: 400px;` */

    document.body.insertAdjacentHTML('afterbegin',
    `<div class="shadow">
        <div class="single-photo">
            <div class="single-photo-close">&#10005;</div>
            <img src="${photoSrc}" alt="large photo"/>
        </div>
    </div>`)
}