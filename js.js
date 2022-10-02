
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


/* First carousel for desctop - 992px and more*/

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

}

//first carusel mobile //

$('.images_wrapper').on('touchstart',handleTouchStart);
$('.images_wrapper').on('touchmove',handleTouchMove);

let x1 = 0;

function handleTouchStart(event){
    let firstTouch = event.touches[0];
    x1=firstTouch.clientX;
    console.log(x1)
}

function handleTouchMove(event){
    if (!x1) {
        return false;
    }

    let x2 = 0;
    let endTouch=event.touches[0];
    x2 = endTouch.clientX;
    console.log(x2)

    let xDiff = x2-x1;

    if (xDiff<0 && imageWidth=='200px'){
        console.log("moved to the left")
        $('#images_wrapper').css('right','175px');
        $('#slider_item_forth').removeClass('active_slider');
        $('#slider_item_back').addClass('active_slider');
    } else if (xDiff<0 && imageWidth=='230px'){
        console.log("moved to the left")
        $('#images_wrapper').css('right','115px');
        $('#slider_item_forth').removeClass('active_slider');
        $('#slider_item_back').addClass('active_slider');
    } else if (xDiff<0 && imageWidth=='190px'){
        console.log("moved to the left")
        $('#images_wrapper').css('right','300px');
        $('#slider_item_forth').removeClass('active_slider');
        $('#slider_item_back').addClass('active_slider');
    } else if (xDiff>0){
        console.log("moved to the rigth")
        $('#images_wrapper').css('right','0px');
        $('#slider_item_back').removeClass('active_slider');
        $('#slider_item_forth').addClass('active_slider');
    }
}






//Second carusel destop - 992px and more//

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
    } 

  });

  $('#testimonials_slider_item_back').click(function(){
        $('#images_block').css('right','0px');
        $('#testimonials_slider_item_back').removeClass('active_slider');
        $('#testimonials_slider_item_forth').addClass('active_slider');
    
  })



//second carusel mobile //

$('.images_block').on('touchstart',handleTouchStart2);
$('.images_block').on('touchmove',handleTouchMove2);

let x11 = 0;

function handleTouchStart2(event){
    let firstTouch = event.touches[0];
    x11=firstTouch.clientX;
    console.log(x1)
}

function handleTouchMove2(event){
    if (!x11) {
        return false;
    }

    let x22 = 0;
    let endTouch=event.touches[0];
    x22 = endTouch.clientX;
    console.log(x22)

    let xDiff2 = x22-x11;

    if (xDiff2<0 && cardWidth=='330px'){
        console.log("moved to the left")
        $('#images_block').css('right','230px');
        $('#testimonials_slider_item_forth').removeClass('active_slider');
        $('#testimonials_slider_item_back').addClass('active_slider');
    } else if (xDiff2<0 && cardWidth=='380px'){
        console.log("moved to the left")
        $('#images_block').css('right','180px');
        $('#testimonials_slider_item_forth').removeClass('active_slider');
        $('#testimonials_slider_item_back').addClass('active_slider');
    } else if (xDiff2>0){
        console.log("moved to the rigth")
        $('#images_block').css('right','0px');
        $('#testimonials_slider_item_back').removeClass('active_slider');
        $('#testimonials_slider_item_forth').addClass('active_slider');
    }
}

