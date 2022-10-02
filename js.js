
/* Burger functionality*/

let NonVisible = true;
       
let button = document.getElementById('burger');
console.log(button);

    
    button.addEventListener('click', function(){
   
        if(NonVisible){
            button.classList.add('burger_onclick');
            document.getElementsByClassName('first_page')[0].classList.add("burger_first_page");
            document.getElementsByTagName('nav')[0].classList.add("burger_nav");
            document.getElementsByTagName('ul')[0].classList.add("burger_menu");
            document.getElementsByClassName('first_page_text')[0].classList.add("burger_first_page_text");

            let ul=document.querySelectorAll('.burger_menu li');
            
            for(let i=0;i<ul.length;i++){
                ul[i].className = "burger_menu_li";
            }

            let a=document.querySelectorAll('.burger_menu li a');
            
            for(let i=0;i<ul.length;i++){
                a[i].className = "burger_menu_li_a";
            }

           
            NonVisible=false;


        } else {
            button.classList.remove('burger_onclick');
            document.getElementsByClassName('first_page')[0].classList.remove("burger_first_page");
            document.getElementsByTagName('nav')[0].classList.remove("burger_nav");
            document.getElementsByTagName('ul')[0].classList.remove("burger_menu");
            document.getElementsByClassName('first_page_text')[0].classList.remove("burger_first_page_text");

            let ul=document.querySelectorAll('.burger_menu_li');
            
            for(let i=0;i<ul.length;i++){
                ul[i].classList.remove("burger_menu_li");
            }

            let a=document.querySelectorAll('a');
            
            for(let i=0;i<ul.length;i++){
                a[i].classList.remove("burger_menu_li_a");
            }

           
            
            NonVisible=true;

        }
        });


/* Adaptive carousel */

const element = document.querySelector('.first_img img');
const style = getComputedStyle(element);
const imageWidth = style.width;
console.log(imageWidth);

if (imageWidth=='545px'){
    $('#slider_item_forth').click(function(){
        $('#images_wrapper').css('right','480px')
        $('#slider_item_forth').removeClass('active_slider');
        $('#slider_item_back').addClass('active_slider');
    });

    $('#slider_item_back').click(function(){
        $('#images_wrapper').css('right','0px')
        $('#slider_item_back').removeClass('active_slider');
        $('#slider_item_forth').addClass('active_slider');
    })
} else if(imageWidth=='300px'){
    $('#slider_item_forth').click(function(){
        $('#images_wrapper').css('right','180px')
        $('#slider_item_forth').removeClass('active_slider');
        $('#slider_item_back').addClass('active_slider');
    });

    $('#slider_item_back').click(function(){
        $('#images_wrapper').css('right','0px')
        $('#slider_item_back').removeClass('active_slider');
        $('#slider_item_forth').addClass('active_slider');
    })
} else if(imageWidth=='230px'){
    $('#slider_item_forth').click(function(){
        $('#images_wrapper').css('right','120px')
        $('#slider_item_forth').removeClass('active_slider');
        $('#slider_item_back').addClass('active_slider');
    });

    $('#slider_item_back').click(function(){
        $('#images_wrapper').css('right','0px')
        $('#slider_item_back').removeClass('active_slider');
        $('#slider_item_forth').addClass('active_slider');
    })
}else if(imageWidth=='200px'){
        $('#slider_item_forth').click(function(){
            $('#images_wrapper').css('right','175px')
            $('#slider_item_forth').removeClass('active_slider');
            $('#slider_item_back').addClass('active_slider');
        });
    
        $('#slider_item_back').click(function(){
            $('#images_wrapper').css('right','0px')
            $('#slider_item_back').removeClass('active_slider');
            $('#slider_item_forth').addClass('active_slider');
        })

}


const cardElement = document.querySelector('.images_block .card');
console.log(cardElement);
const cardstyle = getComputedStyle(cardElement);
const cardWidth = cardstyle.width;
console.log(cardWidth);


  $('#testimonials_slider_item_forth').click(function(){
    if (cardWidth=='700px'){
        $('#images_block').css('right','300px');
        $('#testimonials_slider_item_forth').removeClass('active_slider');
        $('#testimonials_slider_item_back').addClass('active_slider');
    } else if (cardWidth=='500px'){
        $('#images_block').css('right','210px');
        $('#testimonials_slider_item_forth').removeClass('active_slider');
        $('#testimonials_slider_item_back').addClass('active_slider');
    } else if (cardWidth=='380px'){
        $('#images_block').css('right','180px');
        $('#testimonials_slider_item_forth').removeClass('active_slider');
        $('#testimonials_slider_item_back').addClass('active_slider');
    }else if (cardWidth=='330px'){
        $('#images_block').css('right','230px');
        $('#testimonials_slider_item_forth').removeClass('active_slider');
        $('#testimonials_slider_item_back').addClass('active_slider');
    }

  });

  $('#testimonials_slider_item_back').click(function(){
        $('#images_block').css('right','0px');
        $('#testimonials_slider_item_back').removeClass('active_slider');
        $('#testimonials_slider_item_forth').addClass('active_slider');
    
  })



