/*!
* Start Bootstrap - Zlatev Academy v6.0.8 (https://zlatevacademy.com)
* Copyright 2013-2022 Marian Zlatev
* Licensed under MIT (https://github.com/NewestUser/NewestUser.github.io/blob/main/LICENSE)
*/
'use strict';

//
// Application code
// 

resolveCookieConsent();

window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

function resolveCookieConsent() {
    const COOKE_ACCEPTED_KEY = 'cookiesAccepted';
    const cookieModal = document.getElementById('cookie-consent-modal');

    const cookiesAcceptedValue = localStorage.getItem(COOKE_ACCEPTED_KEY)
    if (localStorage.getItem(COOKE_ACCEPTED_KEY) === '1' ) {
        hideElement(cookieModal);
    } else {
        const acceptButton = document.getElementById('cookie-consent-accept-btn');

        acceptButton.addEventListener('click', function () {
            localStorage.setItem(COOKE_ACCEPTED_KEY, '1');
            hideElement(cookieModal);
        });
    }
}

function hideElement(htmlElement) {
    htmlElement.style.setProperty('display', 'none', 'important');
}

function setFragmentUrl(fragment) {
    window.location.hash = fragment;
}
