(function(){
    'use strict';

    const mainWrapper = document.querySelector('.page_slider');
    const slider = document.querySelector('.inner_slider');
    const slides = slider.querySelectorAll('.inner_slide a > img');

    slides.forEach((slide,index) => {     
      slide.addEventListener('click', function(e){
        e.preventDefault();
        const imageSrc = e.target.getAttribute("src");
        const mask = document.querySelector('.slide_previewer');
        const wrap = mask.querySelector('.wrap');
        if(mask){
          mask.classList.add('slide_previewer--active');
          const link = document.createElement("a");
          const image = document.createElement("img");
          link.className = "photo photo--active";
          image.src = imageSrc;
          image.alt = `фото ${index + 1}`;
          link.append(image);
          wrap.append(link);         
          let btn = document.querySelector('.close_preview');
          
          btn.addEventListener('click', function(){
            closeAndClear(mask,wrap);           
          })

          document.querySelector('.photo--active').addEventListener('click', function(){
            closeAndClear(mask,wrap);           
          })
        }
      
       
      })
    });
    

    function closeAndClear(parrent, child){
      if(parrent && parrent.classList.contains('slide_previewer--active')){
        parrent.classList.remove('slide_previewer--active');
        child.innerHTML='';
      }
    }

    function addPreviewer(block){
      if(block){
        const previewer = document.createElement("div");
        const closePreview = document.createElement("button");
        const wrapper = document.createElement("div");
        wrapper.className = "wrap";
        closePreview.type="button";
        closePreview.className ='close_preview';
        previewer.className='slide_previewer';
        previewer.append(closePreview);
        previewer.append(wrapper);
        block.append(previewer);
        
      }
    }


    function init(){
      addPreviewer(mainWrapper);
    }

    init();
    
    $('.inner_slider').slick({  
        slidesToShow: 4,
        dots:false,
        arrows:true,
        slidesToScroll:4,
        responsive: [
                       {
                breakpoint: 769,
                settings: {
                  slidesToShow: 4,
                  arrows:true, 
                  dots:false,
                  s1lidesToScroll:4
                }
              }
        ]
    });

  
    })();