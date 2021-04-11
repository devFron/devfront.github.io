export const DarkMode = () =>{
    let $body = document.querySelector('body')
    let $header = document.querySelector('#header')
    let $menuLink = document.querySelectorAll('.menu__link')
    let $circle = document.querySelector('.circle')
    let $main = document.querySelector('#main')
    let assistantBody = document.querySelector('.assistant__body')
    let $frontMentorLink = document.querySelector('.front-met')
    let $sliderButtons = document.querySelectorAll('.assistant__buttons__button')
    let $sliderButtonsBox = document.querySelector('.assistant__buttons')
    let $sliderButtonsActiveBox = document.querySelector('.assistant__buttons__slider')
    let $sliderButtonsActive = document.querySelectorAll('.assistant__buttons__slider__active')
    let $imagePhoenix = document.querySelector('.phoenix__image')
    let $imagePhoenixSlider = document.querySelectorAll('.assistan__slider__image')
    let $message = document.querySelector('.messenge-dark-mode')
    let $linkProyects = document.querySelectorAll('.proyect__link')
   
    document.addEventListener('click',(e)=>{
        if (e.target === $circle || e.target.matches('.phoenix__image') ) {
            $body.classList.toggle('body__dark')
            $header.classList.toggle('header__dark')
            $menuLink[0].classList.add('menu__link__dark')
            $menuLink[1].classList.add('menu__link__dark')
            $menuLink[2].classList.toggle('menu__link__dark')
            $menuLink[3].classList.toggle('menu__link__dark')
            $circle.classList.toggle('circle__dark')
            $main.classList.toggle('main__dark')
            assistantBody.classList.toggle('assistant__body__dark')
            $frontMentorLink.classList.toggle('front-met__dark')
            $sliderButtons[0].classList.toggle('assistant__buttons__button__dark')
            $sliderButtons[1].classList.toggle('assistant__buttons__button__dark')
            $sliderButtonsActive[0].classList.toggle('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[1].classList.toggle('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[2].classList.toggle('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[3].classList.toggle('assistant__buttons__slider__active__dark')
            $sliderButtonsBox.classList.toggle('assistant__buttons__dakr')
            $sliderButtonsActiveBox.classList.toggle('assistant__buttons__slider__dark')
            $linkProyects.forEach(el => {
                el.classList.toggle('proyect__link__dark')                
            });
        }
        if ($body.classList.contains('body__dark')) {
            localStorage.setItem('dark-mode-index','true')
            $imagePhoenix.setAttribute('src','resources/images/images-main/phoenix-framework-color.svg')
            $imagePhoenixSlider[3].setAttribute('src','resources/images/images-main/phoenix-framework-color.svg')
        }else{
            localStorage.setItem('dark-mode-index','false')
            $imagePhoenix.setAttribute('src','resources/images/images-main/fenix-light.svg')
            $imagePhoenixSlider[3].setAttribute('src','resources/images/images-main/fenix-light.svg')
        }
        if (e.target.matches('.close__icon')) {
            setTimeout(() => {
                $message.classList.add('messenge-dark-mode__disabled')        
            }, 3000);
        }   
    })
    if (localStorage.getItem('dark-mode-index') === 'true') {
            $body.classList.add('body__dark')
            $header.classList.add('header__dark')
            $menuLink[0].classList.add('menu__link__dark')
            $menuLink[1].classList.add('menu__link__dark')
            $menuLink[2].classList.add('menu__link__dark')
            $menuLink[3].classList.add('menu__link__dark')
            $circle.classList.add('circle__dark')
            $main.classList.add('main__dark')
            assistantBody.classList.add('assistant__body__dark')
            $frontMentorLink.classList.add('front-met__dark')
            $sliderButtons[0].classList.add('assistant__buttons__button__dark')
            $sliderButtons[1].classList.add('assistant__buttons__button__dark')
            $sliderButtonsActive[0].classList.add('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[0].classList.add('slider__button__enabled__dark')
            $sliderButtonsActive[1].classList.add('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[2].classList.add('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[3].classList.add('assistant__buttons__slider__active__dark')
            $sliderButtonsBox.classList.add('assistant__buttons__dakr')
            $sliderButtonsActiveBox.classList.add('assistant__buttons__slider__dark')
            $linkProyects.forEach(el => {
                el.classList.add('proyect__link__dark')                
            });
    } else {
        $body.classList.remove('body__dark')
            $header.classList.remove('header__dark')
            $menuLink[0].classList.remove('menu__link__dark')
            $menuLink[1].classList.remove('menu__link__dark')
            $menuLink[2].classList.remove('menu__link__dark')
            $menuLink[3].classList.remove('menu__link__dark')
            $circle.classList.remove('circle__dark')
            $main.classList.remove('main__dark')
            assistantBody.classList.remove('assistant__body__dark')
            $frontMentorLink.classList.remove('front-met__dark')
            $sliderButtons[0].classList.remove('assistant__buttons__button__dark')
            $sliderButtons[1].classList.remove('assistant__buttons__button__dark')
            $sliderButtonsActive[0].classList.remove('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[1].classList.remove('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[2].classList.remove('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[3].classList.remove('assistant__buttons__slider__active__dark')
            $sliderButtonsBox.classList.remove('assistant__buttons__dakr')
            $sliderButtonsActiveBox.classList.remove('assistant__buttons__slider__dark')
            $linkProyects.forEach(el => {
                el.classList.remove('proyect__link__dark')                
            });
    }
}