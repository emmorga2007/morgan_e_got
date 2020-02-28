(() => {
  //variables at the top -> elements on the page we need to work with
  let sigilButtons = document.querySelectorAll('.sigilContainer');
      lightBox = document.querySelector('.lightbox');
      closeLightBox = lightBox.querySelector('.lightbox-close')

  function showLightbox() {
    //pop open a ligthbox here and show some content
    //start with a video

    lightBox.classList.add('show-lightbox');
  }

  function  closeLightBox(){
    lightBox.classList.remove('show-lightbox')
  }

  /// add a click event to the sigilButtons
  sigilButtons.forEach(button => button.addEventListener('click', showLightbox))

  // add an event listener for the light box close buttons
  closeLightBox.addEventListener('click', hideLightbox)

})();
