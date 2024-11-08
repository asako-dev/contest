// ふわっと表示 
let els = document.querySelectorAll('#dl_sp,#dl_pc');
els.forEach((fadeIn) => {
  window.addEventListener('scroll', ()=> {
    let windowHeight = window.innerHeight;
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 250){
       fadeIn.classList.add('is-scrollIn');
    }
    else{
        fadeIn.classList.remove('is-scrollIn');
    }
  });
});

// クリックで開閉 
const dt = document.querySelector('#dl_pc dt');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
dt.addEventListener("click", () => {
    dt.classList.toggle("open");
    dt.nextElementSibling.classList.toggle("close");
    //アニメーション
    const keyframes = {
        opacity: [0, 1],
    };

    const options = {
        duration: 3000,
        easing: 'ease',
    };

    dt.nextElementSibling.animate(keyframes, options);

});

// ハンバーガーメニュー開閉
const btnOpen = document.querySelector('#navMenu');
const btns = document.querySelectorAll("#navBtn , #navMenu a");
btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        btnOpen.classList.toggle('show');
    });
});