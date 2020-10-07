function module() {
    const modalBtns = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

        
    modalBtns.forEach(item => {
        item.addEventListener('click', () => {
            showModal();
        });
    });


    //closing modal by clicking on background
    modal.addEventListener('click', (e) => {
        if (e.target === modal && modal.classList.contains('show') ||
            e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    //for avoidance of repeating the same code draw it into a separate function:
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';//to block scrolling page
        clearInterval(modalTimerId);
    }
    //and then adjust the rest of your code like this:
    //modalClose.addEventListener('click', closeModal);


    //to close modal by clicking on 'Esc' key
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    });

    //to show modal after a while from opening page by user, exploit the setTimeout method:
    const modalTimerId = setTimeout(showModal, 50000);

    //to show modal after scrolling the page to its buttom
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }  
    }
    window.addEventListener('scroll', showModalByScroll);
}

module.exports = module;