const  DarkMode = ()=>{
    let $body = document.querySelector('body')
    let $headerTitle = document.querySelector('#header-title')
    let $headerFollowers = document.querySelector('#header-followers')
    let $buttonDark = document.querySelector('#button')
    let $buttonDarkIcon = document.querySelector('#button-cirle')
    let $socialMediaCard = document.querySelectorAll('.social-media__card')
    let $socialMediaCardCounter = document.querySelectorAll('.social-media__card__followers__plus__description')
    let $overviewTitle = document.querySelector('#overview-title')
    let $overviewCardsCardData = document.querySelectorAll('.overview__cards__card__data')
    let $overviewDataNumbersView = document.querySelectorAll('.overview__cards__card__data__views__number')
    let $overviewDataNumbersLikes = document.querySelectorAll('.overview__cards__card__data__likes__number')


    document.addEventListener('click',(e)=>{
        if (e.target === $buttonDarkIcon) {
            $body.classList.toggle('body__dark')            
            $headerTitle.classList.toggle('titles__dark')
            $headerFollowers.classList.toggle('header__followers__dark')
            $buttonDark.classList.toggle('button__dark')
            $buttonDarkIcon.classList.toggle('button__circle__dark')
            $socialMediaCard[0].classList.toggle('social-media__card__dark')
            $socialMediaCard[1].classList.toggle('social-media__card__dark')
            $socialMediaCard[2].classList.toggle('social-media__card__dark')
            $socialMediaCard[3].classList.toggle('social-media__card__dark')
            $socialMediaCardCounter[0].classList.toggle('social-media__card__followers__plus__description__dark')
            $socialMediaCardCounter[1].classList.toggle('social-media__card__followers__plus__description__dark')
            $socialMediaCardCounter[2].classList.toggle('social-media__card__followers__plus__description__dark')
            $socialMediaCardCounter[3].classList.toggle('social-media__card__followers__plus__description__dark')
            $overviewTitle.classList.toggle('overview__title__dark')
            $overviewCardsCardData[0].classList.toggle('overview__cards__card__data__dark')
            $overviewCardsCardData[1].classList.toggle('overview__cards__card__data__dark')
            $overviewCardsCardData[2].classList.toggle('overview__cards__card__data__dark')
            $overviewCardsCardData[3].classList.toggle('overview__cards__card__data__dark')
            $overviewCardsCardData[4].classList.toggle('overview__cards__card__data__dark')
            $overviewCardsCardData[5].classList.toggle('overview__cards__card__data__dark')
            $overviewCardsCardData[6].classList.toggle('overview__cards__card__data__dark')
            $overviewCardsCardData[7].classList.toggle('overview__cards__card__data__dark')
            $overviewDataNumbersView[0].classList.toggle('overview__cards__card__data__views__number__dark')
            $overviewDataNumbersView[1].classList.toggle('overview__cards__card__data__views__number__dark')
            $overviewDataNumbersView[2].classList.add('overview__cards__card__data__views__number__dark')
            $overviewDataNumbersView[3].classList.toggle('overview__cards__card__data__views__number__dark')
            $overviewDataNumbersLikes[0].classList.toggle('overview__cards__card__data__likes__number__dark')
            $overviewDataNumbersLikes[1].classList.toggle('overview__cards__card__data__likes__number__dark')
            $overviewDataNumbersLikes[2].classList.toggle('overview__cards__card__data__likes__number__dark')
            $overviewDataNumbersLikes[3].classList.toggle('overview__cards__card__data__likes__number__dark')

        }

        if ($body.classList.contains('body__dark')) {
            localStorage.setItem('dark-mode-social-board','true')
        } else {
            localStorage.setItem('dark-mode-social-board','false')
        }

    })

    if (localStorage.getItem('dark-mode-social-board')=== 'true') {

        $body.classList.add('body__dark')            
        $headerTitle.classList.add('titles__dark')
        $headerFollowers.classList.add('header__followers__dark')
        $buttonDark.classList.add('button__dark')
        $buttonDarkIcon.classList.add('button__circle__dark')
        $socialMediaCard[0].classList.add('social-media__card__dark')
        $socialMediaCard[1].classList.add('social-media__card__dark')
        $socialMediaCard[2].classList.add('social-media__card__dark')
        $socialMediaCard[3].classList.add('social-media__card__dark')
        $socialMediaCardCounter[0].classList.add('social-media__card__followers__plus__description__dark')
        $socialMediaCardCounter[1].classList.add('social-media__card__followers__plus__description__dark')
        $socialMediaCardCounter[2].classList.add('social-media__card__followers__plus__description__dark')
        $socialMediaCardCounter[3].classList.add('social-media__card__followers__plus__description__dark')
        $overviewTitle.classList.add('overview__title__dark')
        $overviewCardsCardData[0].classList.add('overview__cards__card__data__dark')
        $overviewCardsCardData[1].classList.add('overview__cards__card__data__dark')
        $overviewCardsCardData[2].classList.add('overview__cards__card__data__dark')
        $overviewCardsCardData[3].classList.add('overview__cards__card__data__dark')
        $overviewCardsCardData[4].classList.add('overview__cards__card__data__dark')
        $overviewCardsCardData[5].classList.add('overview__cards__card__data__dark')
        $overviewCardsCardData[6].classList.add('overview__cards__card__data__dark')
        $overviewCardsCardData[7].classList.add('overview__cards__card__data__dark')
        $overviewDataNumbersView[0].classList.add('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersView[1].classList.add('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersView[2].classList.add('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersView[3].classList.add('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersLikes[0].classList.add('overview__cards__card__data__likes__number__dark')
        $overviewDataNumbersLikes[1].classList.add('overview__cards__card__data__likes__number__dark')
        $overviewDataNumbersLikes[2].classList.add('overview__cards__card__data__likes__number__dark')
        $overviewDataNumbersLikes[3].classList.add('overview__cards__card__data__likes__number__dark')
    }else{
        $body.classList.remove('body__dark')            
        $headerTitle.classList.remove('titles__dark')
        $headerFollowers.classList.remove('header__followers__dark')
        $buttonDark.classList.remove('button__dark')
        $buttonDarkIcon.classList.remove('button__circle__dark')
        $socialMediaCard[0].classList.remove('social-media__card__dark')
        $socialMediaCard[1].classList.remove('social-media__card__dark')
        $socialMediaCard[2].classList.remove('social-media__card__dark')
        $socialMediaCard[3].classList.remove('social-media__card__dark')
        $socialMediaCardCounter[0].classList.remove('social-media__card__followers__plus__description__dark')
        $socialMediaCardCounter[1].classList.remove('social-media__card__followers__plus__description__dark')
        $socialMediaCardCounter[2].classList.remove('social-media__card__followers__plus__description__dark')
        $socialMediaCardCounter[3].classList.remove('social-media__card__followers__plus__description__dark')
        $overviewTitle.classList.remove('overview__title__dark')
        $overviewCardsCardData[0].classList.remove('overview__cards__card__data__dark')
        $overviewCardsCardData[1].classList.remove('overview__cards__card__data__dark')
        $overviewCardsCardData[2].classList.remove('overview__cards__card__data__dark')
        $overviewCardsCardData[3].classList.remove('overview__cards__card__data__dark')
        $overviewCardsCardData[4].classList.remove('overview__cards__card__data__dark')
        $overviewCardsCardData[5].classList.remove('overview__cards__card__data__dark')
        $overviewCardsCardData[6].classList.remove('overview__cards__card__data__dark')
        $overviewCardsCardData[7].classList.remove('overview__cards__card__data__dark')
        $overviewDataNumbersView[0].classList.remove('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersView[1].classList.remove('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersView[2].classList.remove('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersView[3].classList.remove('overview__cards__card__data__views__number__dark')
        $overviewDataNumbersLikes[0].classList.remove('overview__cards__card__data__likes__number__dark')
        $overviewDataNumbersLikes[1].classList.remove('overview__cards__card__data__likes__number__dark')
        $overviewDataNumbersLikes[2].classList.remove('overview__cards__card__data__likes__number__dark')
        $overviewDataNumbersLikes[3].classList.remove('overview__cards__card__data__likes__number__dark')
    }
}
DarkMode()