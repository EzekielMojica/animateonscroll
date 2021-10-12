var animation = document.querySelectorAll('[data-animation]');
  window.addEventListener('scroll', function(){
    for(let i=0; i<animation.length; i++){
      var onView = animation[i].getBoundingClientRect().top - (window.innerHeight * 0.5) <= 0;
      if(onView){
        animation[i].classList.add('animate');
      }else{
        animation[i].classList.remove('animate');
      }
    }
  });
