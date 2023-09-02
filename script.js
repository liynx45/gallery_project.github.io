class SlideImg {
    constructor(name, byte, type, last, src) {
        this.name = name;
        this.byte = byte;
        this.type = type;
        this.last = last;
        this.src = src;
    }
}

const slideArray = [
    {
        "name": "genshin.jpeg",
        "byte": 1507815,
        "type": "image/jpeg",
        "last": 1687615252000,
		"src" : "images/genshin.jpeg"
    },
    {
        "name": "paimon.jpg",
        "byte": 46819,
        "type": "image/jpeg",
        "last": 1640535470000,
		"src" : "images/paimon.jpg"
    },
    {
        "name": "rog.jpg",
        "byte": 2114016,
        "type": "image/jpeg",
        "last": 1640535592000,
		"src" : "images/rog.jpg"
    },
    {
        "name": "wp2.png",
        "byte": 112653,
        "type": "image/png",
        "last": 1638561574000,
		"src" : "images/wp2.png"
    },
    {
        "name": "wp3.jpg",
        "byte": 457889,
        "type": "image/jpeg",
        "last": 1640535592000,
		"src" : "images/wp3.jpg"
    }
];
const albumArray = {
    "Anime": [
        {
            "name": "genshin.jpeg",
            "byte": 1507815,
            "type": "image/jpeg",
            "last": 1687615252000,
            "src": "images/genshin.jpeg"
        }
    ]
};
let indexSort = "";
let indexSortAlbum = "";
let mainCek = false;
let albumCek = "";

const addBtn = document.querySelector(".add-img");
const bodyGallery = document.querySelector(".body-gallery");
const closeBtn = document.querySelector('.close');
const bodyRecent = document.querySelector(".body-recent");
const slidePage = document.querySelectorAll(".img-slide");
const addPage = document.querySelector(".add-page");
const mainPage = document.querySelector(".main");
const priviewPage = document.querySelector(".priview-page");
const selectAlbum = document.getElementById("album-select");
const deleteBtn = document.querySelector(".delete");
const closeInfo = document.querySelector(".close-info");
const blokProp = document.querySelector('.blok-prop');
const notifPage = document.querySelector(".notif-page");
const opsi = document.querySelectorAll(".agree, .cancel");
const inputAlbum = document.querySelector(".input-album");
const submitAlbum = document.querySelector(".submit-album");
const albumPageInput = document.querySelector(".add-album-page");
const addAlbumIcon = document.querySelector(".add-album");
const closePageAlbum = document.querySelector(".close-album");
const listAlbum = document.querySelector(".list-album");
const bodyAlbum = document.querySelector(".body-album");
const albumPage = document.querySelector(".album-page-open");
const titleAlbum = document.querySelector(".title-album");
const listSlideAlbum = document.querySelector(".list-slide-album");
const privAlbum = document.querySelector(".priv-album");
const nextAlbum = document.querySelector(".next-album");

function closeToogle() {
    if (mainCek) {
        closeBtn.classList.add("active");
        addBtn.classList.remove("active");
    } else {
        closeBtn.classList.remove("active");
        addBtn.classList.add("active");
    }

}


function renderSlide() {
    bodyRecent.innerHTML = "";
    slideArray.forEach((slide, index) => {
        const slideItem = document.createElement("div");
        slideItem.className = "img-slide";
        slideItem.innerHTML = `
        <img src="${slide.src}" alt="" data-img="${index}">
        `
        bodyRecent.appendChild(slideItem);

        slideItem.addEventListener("click", () => {
            indexSort = "";
            priviewSlide(slide, index);
        });
    });
}


function addSlide(name, byte, type, last, src) {
    const slide = new SlideImg(name, byte, type, last, src);
    slideArray.push(slide);
    renderSlide();
}

const inputImgValue = document.querySelector(".file-input");
const inputName = document.querySelector(".name-input");
const submit = document.querySelector(".submit");
const imgPri = document.querySelector(".img-priv");
const imgNamePriv = document.getElementById("name-img-priv");
const info = document.querySelector(".info");

inputImgValue.addEventListener("change", (e) => {
    const img = e.target.files[0];
    const name = img.name;
    const reader = new FileReader();

    reader.onload = (file) => {
        const src = file.target.result;
        imgPri.src = src;
        imgNamePriv.textContent = name;
    }

    reader.readAsDataURL(img);
});

submit.addEventListener("click", () => {
    const reader = new FileReader();
    const imgValue = inputImgValue.files[0];
    if (imgValue !== "") {
        const name = imgValue.name;
        const byte = imgValue.size;
        const type = imgValue.type;
        const last = imgValue.lastModified;
        reader.onload = (file) => {
            const src = file.target.result;
            addSlide(name, byte, type, last, src);
        }
        reader.readAsDataURL(imgValue)
    } else {
        return;
    }
    inputImgValue.value = "";
    imgPri.src = "";
    imgNamePriv.textContent = "";
});

function priviewSlide(slide, index) {
    const titleItem = document.querySelector(".title-img");
    const slideImg = document.querySelector(".slide-img");
    const dateInfo = `${new Date(slide.last).getDate()}/${new Date(slide.last).getMonth() - 1}/${new Date(slide.last).getFullYear()}`;
    const size = (slide.byte / 1000).toFixed(2);

    blokProp.innerHTML = `
    <div class="name-info">
                                <span>Name : ${slide.name}</span>
                            </div>
                            <div class="size-info">
                                <span>size : ${size}kb</span>
                            </div>
                            <div class="type-info">
                                <span>Type : ${slide.type}</span>
                            </div>
                            <div class="last-mod">
                                <span>Last Modified : ${dateInfo}</span>
                            </div>
    `;

    closeBtn.classList.remove("album");
    nextAlbum.style.display = "none";
    privAlbum.style.display = "none";
    priv.style.display = "block";
    next.style.display = "block";
    mainCek = true;
    closeToogle();
    addPage.classList.remove("active");
    mainPage.classList.add("active");
    priviewPage.classList.add("active");
    slideImg.src = "";
    titleItem.innerHTML = "";
    slideImg.src = slide.src;
    titleItem.textContent = slide.name;
    indexSort = index;
}

function priviewSlideAlbum(slide, index) {
    const titleItem = document.querySelector(".title-img");
    const slideImg = document.querySelector(".slide-img");
    const dateInfo = `${new Date(slide.last).getDate()}/${new Date(slide.last).getMonth() - 1}/${new Date(slide.last).getFullYear()}`;
    const size = (slide.byte / 1000).toFixed(2);

    blokProp.innerHTML = `
    <div class="name-info">
                                <span>Name : ${slide.name}</span>
                            </div>
                            <div class="size-info">
                                <span>size : ${size}kb</span>
                            </div>
                            <div class="type-info">
                                <span>Type : ${slide.type}</span>
                            </div>
                            <div class="last-mod">
                                <span>Last Modified : ${dateInfo}</span>
                            </div>
    `;
    closeBtn.classList.add("album");
    nextAlbum.style.display = "block";
    privAlbum.style.display = "block";
    priv.style.display = "none";
    next.style.display = "none";
    mainCek = true;
    closeToogle();
    addPage.classList.remove("active");
    mainPage.classList.add("active");
    priviewPage.classList.add("active");
    slideImg.src = "";
    titleItem.innerHTML = "";
    slideImg.src = slide.src;
    titleItem.textContent = slide.name;
    indexSortAlbum = index;
}

nextAlbum.addEventListener("click", () => {
    nextBtnSlideAlbum();
});


privAlbum.addEventListener("click", () => {
    privBtnSlideAlbum();
});

function privBtnSlide() {
    indexSort--;
    const existing = slideArray.filter((slide, index) => index === indexSort);
    const slide = existing[0];
    if (indexSort < 0) {
        indexSort = (slideArray.length - 1);
        const existing = slideArray.filter((slide, index) => index === indexSort);
        const slide = existing[0];
        priviewSlide(slide, indexSort);
    } else {
        priviewSlide(slide, indexSort);
    }
}

function privBtnSlideAlbum() {
    indexSortAlbum--;
    const existing = albumCek.filter((slide, index) => index === indexSortAlbum);
    const slide = existing[0];
    if (indexSortAlbum < 0) {
        indexSortAlbum = (albumCek.length - 1);
        const existing = albumCek.filter((slide, index) => index === indexSortAlbum);
        const slide = existing[0];
        priviewSlideAlbum(slide, indexSortAlbum);
    } else {
        priviewSlideAlbum(slide, indexSortAlbum);
    }
}

function nextBtnSlide() {
    indexSort++;
    const existing = slideArray.filter((slide, index) => index === indexSort);
    const slide = existing[0];
    if (indexSort > (slideArray.length - 1)) {
        indexSort = 0;
        const existing = slideArray.filter((slide, index) => index === indexSort);
        const slide = existing[0];
        priviewSlide(slide, indexSort);
    } else {
        priviewSlide(slide, indexSort);
    }
}

function nextBtnSlideAlbum() {
    indexSortAlbum++;
    const existing = albumCek.filter((slide, index) => index === indexSortAlbum);
    const slide = existing[0];
    if (indexSortAlbum > (albumCek.length - 1)) {
        indexSortAlbum = 0;
        const existing = albumCek.filter((slide, index) => index === indexSortAlbum);
        const slide = existing[0];
        priviewSlideAlbum(slide, indexSortAlbum);
    } else {
        priviewSlideAlbum(slide, indexSortAlbum);
    }
}

function addAlbum(nameAlbum) {
    albumArray[nameAlbum] = [];
}

function renderSlideAlbum(albumMain, album) {
    albumCek = "";
    albumPage.classList.add("active");
    mainPage.classList.add("active");
    mainCek = true;
    closeToogle();
    titleAlbum.innerHTML = album;
    albumCek = albumMain;
    listSlideAlbum.innerHTML = '';
    albumMain.forEach((slide, index) => {
        const item = document.createElement("img");
        item.src = slide.src;
        item.classList.add("img-slide")
        listSlideAlbum.prepend(item);
        item.addEventListener("click", () => {
            albumPage.classList.remove("active");
            priviewSlideAlbum(slide, index);
        });
    });

}

let src = "";

function renderAlbum() {
    listAlbum.innerHTML = "";
    bodyAlbum.innerHTML = "";
    Object.keys(albumArray).forEach(album => {
        const albumMain = albumArray[album];
        const albumName = document.createElement("span");
        albumName.style.cursor = "pointer";
        albumName.innerHTML = `<i class="uil uil-image-v"></i> ${album}`;
        const albumItem = document.createElement("div");
        albumItem.classList.add("album-1");
        albumItem.innerHTML = `<i class="uil uil-image-v"></i> <span>${album}</span>`
        bodyAlbum.prepend(albumItem);
        listAlbum.prepend(albumName);

        albumItem.addEventListener("click", () => {
            renderSlideAlbum(albumMain, album);
        });

        albumName.addEventListener("click", () => {
            const existing = slideArray.find((slide, index) => index === indexSort);
            const cek = albumArray[album].includes(existing);
            if (!cek) {
                albumArray[album].push(existing);
                renderAlbum();
            } else {
                alert("Has been added");
                return;
            }
        });
    });
}

const next = document.querySelector(".next");
const priv = document.querySelector(".priv");
next.addEventListener("click", () => {
    nextBtnSlide();
});

priv.addEventListener("click", () => {
    privBtnSlide();
});

deleteBtn.addEventListener("click", () => {
    notifPage.classList.add("active");
});

opsi.forEach(op => {
    op.addEventListener("click", () => {
        if (op.classList.contains("agree")) {
            if (slideArray.length > 1) {
                slideArray.splice(indexSort, 1);
                privBtnSlide();
                renderSlide();
                notifPage.classList.remove("active");
            } else if (slideArray.length === 1) {
                slideArray.splice(0, 1);
                renderSlide();
                priviewPage.classList.remove("active");
                notifPage.classList.remove("active");
                mainPage.classList.remove("active");
                mainCek = false;
                closeToogle();
            }
        } else {
            notifPage.classList.remove("active");
        }
    })
})

addBtn.addEventListener("click", () => {
    mainCek = true;
    closeToogle();
    addPage.classList.add("active");
    mainPage.classList.add("active");
    priviewPage.classList.remove('active');
});

closeBtn.addEventListener("click", () => {
    mainCek = false;
    albumPageInput.classList.remove("active");
    notifPage.classList.remove("active");
    addPage.classList.remove("active");
    priviewPage.classList.remove('active');
    document.querySelector(".properti-page").
        classList.remove("active");

    if (closeBtn.classList.contains("album")) {
        mainPage.classList.add("active");
        albumPage.classList.add("active");
        closeBtn.classList.remove("album");
    } else {
        closeToogle();
        mainPage.classList.remove("active");
        albumPage.classList.remove("active");
    }
});

document.querySelector(".info").addEventListener("click", () => {
    document.querySelector(".properti-page").
        classList.add("active");
})

closeInfo.addEventListener("click", () => {
    document.querySelector(".properti-page").
        classList.toggle("active");
});

addAlbumIcon.addEventListener("click", () => {
    albumPageInput.classList.add("active");
});

closePageAlbum.addEventListener("click", () => {
    albumPageInput.classList.remove("active");
})

submitAlbum.addEventListener("click", () => {
    const nameAlbum = inputAlbum.value.trim();
    addAlbum(nameAlbum);
    renderAlbum();
    inputAlbum.value = "";
})

renderSlide();
renderAlbum();