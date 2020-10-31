// get the length of svg logo
$(function(){
// get the path length of svg logo
const $signature = $('#fullSig>path');
for(let i = 0; i<$signature.length;i++){
  console.log(`${i}/${$signature[i].id}'s path length = ${$signature[i].getTotalLength()}`);
}
$('article>ul>li').addClass('off');
})

// animation for full page
$(function(){
  const $gnb = $('header > nav > ol > li > a');
  const $button = $('section > .grid-container > button');
  const $article = $('section > .grid-container > article');
  const $articleTit = $article.find('.tit');
  let blueberryIdx = 0;
  let travelIdx = 1;
  let careerIdx = 0;

  // function
  const careerSlide = function(){
    $('.done .main').stop().animate({left:`${careerIdx * -100}%`})
    $('.done .pagination > li').eq(careerIdx).addClass('on').siblings().removeClass('on');
  }
  const btnEvent = function(gnbEq, className, liIdx){
    $gnb.eq(gnbEq).trigger('click');
    setTimeout(function(){
      $('article>ul>li.on').removeClass('on').addClass('off');
      $(`article.${className}>ul>li`).eq(liIdx).removeClass('off').addClass('on');
      $('.who > ul > li svg').removeClass('on');
    },500)
  }

  // intro + article coming
  setTimeout(function(){
    $('.intro').fadeOut();
  },5600);
  setTimeout(function(){
    $articleTit.eq(0).addClass('turn');
  },6000);
  setTimeout(function(){
    $articleTit.eq(1).addClass('turn');
  },7500);
  setTimeout(function(){
    $articleTit.eq(2).addClass('turn');
  },9000);

  // article animation is done, then blueberry animation begins 
  setInterval(function(){
    if(blueberryIdx <20){
      blueberryIdx +=1;
    }else{
      blueberryIdx=1;
    }
    let url = `url(./img/profile_main_bb${blueberryIdx}.png)`
    $('section').css({backgroundImage : url})
  },300)
 

  // gnb event
  $gnb.on('click',function(evt){
    const idx = $gnb.index(this);
    evt.preventDefault();
    $(this).parent().addClass('on').siblings().removeClass('on');
    $article.eq(idx).removeClass('off').addClass('on').siblings('article').addClass('off').removeClass('on');
  })
  // button click event
  // trigger the gnb event and show li with additional animation
  $button.on('click',function(){
    $(this).addClass('on').siblings().removeClass('on');
    let btnIdx = $button.index(this);
    if(btnIdx === 0 ){
      // UIUX Renewal
      btnEvent(0,'do',1);
    }else if(btnIdx === 1){
      // Beardex
      btnEvent(0,'do',2);
    }else if(btnIdx === 2){
      // Dodorecycle
      btnEvent(0,'do',3);      
    }else if(btnIdx === 3){
      // React
      btnEvent(0,'do',4);      
    }else if(btnIdx === 4){
      // RWD
      btnEvent(0,'do',5);      
    }else if(btnIdx === 5){
      // Menu & Slide
      btnEvent(0,'do',6);      
    }else if(btnIdx === 6){
      // SVG
      btnEvent(0,'do',7);      
    }else if(btnIdx === 7){
      // profile
      btnEvent(0,'do',8);      
    }else if(btnIdx === 8){
      // 국제행사기획
      btnEvent(2,'done',1);      
    }else if(btnIdx === 9){
      // 영어 더빙
      btnEvent(2,'done',2);      
    }else if(btnIdx === 10){
      // 여행
      btnEvent(2,'done',3);    
    }else if(btnIdx === 11){
      // 코딩 능력
      btnEvent(1,'who',1);  
      // svg event
      setTimeout(function(){
        $('.who > ul > li svg').addClass('on');
      },2200);
    }else if(btnIdx === 12){
      // 경력/학력
      btnEvent(1,'who',2);      
    }else if(btnIdx === 13){
      // 형용사
      btnEvent(1,'who',3);      
    }
  })

  // .done career slide -100% for each click
  $('.done .btn>.prev').on('click',function(evt){
    evt.preventDefault();
    if(careerIdx < 1){
      careerIdx = 3;
    }else{
      careerIdx --;
    }
    careerSlide();
  })
  $('.done .btn>.next').on('click',function(evt){
    evt.preventDefault();
    if(careerIdx > 2){
      careerIdx = 0;
    }else{
      careerIdx ++;
    }
    careerSlide();
  })
  $('.done .pagination > li > a').on('click',function(evt){
    evt.preventDefault();
    careerIdx = $('.done .pagination > li > a').index(this);
    careerSlide()
  })
  // .done travel photo changing
  $('.done .frame > *').addClass('on');
  setInterval(function(){
    if(travelIdx<16){
      travelIdx++;
    }else{
      travelIdx = 1;
    }
    const img = $(`.done .frame>ol>li:nth-child(${travelIdx})>img`);
    $('.done .frame>ol').css({backgroundImage:`url(${img.attr('src')})`})
    $('.done .frame>.record').text(img.attr('alt'));
  },3000) 

})
