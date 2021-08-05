const sliderData = [
    {
        img: '/assets/img/slide_m.jpg',
        name: 'Name-1',
        lastName: 'Last-name-1',
        date: '1900-2000',
        link: '/obits-single.html'
    },
    {
        img: '/assets/img/slide_f.jpg',
        name: 'Name-22',
        lastName: 'Last-name-22',
        date: '1900-2000',
        link: '/obits-single.html'
    },
    {
        img: '/assets/img/slide_m.jpg',
        name: 'Name-333',
        lastName: 'Last-name-333',
        date: '1900-2000',
        link: '/obits-single.html'
    },
    {
        img: '/assets/img/slide_f.jpg',
        name: 'Name-4444',
        lastName: 'Last-name-4444',
        date: '1900-2000',
        link: '/obits-single.html'
    },
    {
        img: '/assets/img/slide_m.jpg',
        name: 'Name-55555',
        lastName: 'Last-name-55555',
        date: '1900-2000',
        link: '/obits-single.html'
    },
    {
        img: '/assets/img/slide_f.jpg',
        name: 'Name-666666',
        lastName: 'Last-name-66666',
        date: '1900-2000',
        link: '/obits-single.html'
    }
];



    //------------------------------------------------------------------------------------------ switching obits

    const btnL = document.querySelector('.home-page__obits-arrow-left');
    const btnR = document.querySelector('.home-page__obits-arrow-right');
    const list = document.querySelector('.home_obits__list');

    const srcImg  = document.querySelectorAll('.obit__img'),
          divName = document.querySelectorAll('.obit__firstname'),
          divLast = document.querySelectorAll('.obit__lastname'),
          divDate = document.querySelectorAll('.obit__date'),
          slideLink = document.querySelectorAll('.obit__link');

    let reqNum = 0;
    let next = 1;
    let afterNext = 2;
    //------------------------------------------------------------left
    btnL.addEventListener('click', function(){
        reqNum++;
        next++;
        afterNext++;

        if(reqNum > sliderData.length - 1){
            reqNum = 0;
        }else if(reqNum < 0 ){
            reqNum = sliderData.length - 1;
        };

        if(next >= sliderData.length){
            next = 0;
        }else if(next < 0){
            next = sliderData.length - 1;
        }
        if(afterNext >= sliderData.length){
            afterNext = 0;
        }else if(afterNext < 0){
            afterNext = sliderData.length - 1;
        };
        addElem(reqNum, next, afterNext);

    });

    //---------------------------------------------------------------right
    btnR.addEventListener('click', function(){
        reqNum--;
        next--;
        afterNext--;

        if(reqNum > sliderData.length - 1){
            reqNum = 0;
        }else if(reqNum < 0 ){
            reqNum = sliderData.length - 1;
        };

        if(next >= sliderData.length){
            next = 0;
        }else if(next < 0){
            next = sliderData.length - 1;
        }
        if(afterNext >= sliderData.length){
            afterNext = 0;
        }else if(afterNext < 0){
            afterNext = sliderData.length - 1;
        };
        addElem(reqNum, next, afterNext);

    });





//-----------------------------------------------------------------------------------------  add elements
window.addEventListener('load', function(){
        addElem(0, 1, 2);

});



function addElem(a, b, c){
    let reqContent = [a, b, c];

    for(let i=0; i < reqContent.length; i++){
        srcImg[i].setAttribute('src', sliderData[reqContent[i]].img);
        divName[i].innerHTML = sliderData[reqContent[i]].name;
        divLast[i].innerHTML = sliderData[reqContent[i]].lastName;
        divDate[i].innerHTML = sliderData[reqContent[i]].date;
        slideLink[i].setAttribute('href', sliderData[reqContent[i]].link);
        console.log(sliderData[reqContent[i]].link);
    };


};

//-----------------------------------------------------------------------  Arrow down

const arrowDown = document.querySelector('.header__arrow-down');
let changer = 0;

function opacityChange(i){
    if(i === 0){
        arrowDown.style.opacity = 0;
    }else if(i === 1){
        arrowDown.style.opacity = 1;
    };
};


setInterval(function(){
    changer++;

    if(changer > 1){
        changer = 0;
    }
    opacityChange(changer);
}, 500);
















