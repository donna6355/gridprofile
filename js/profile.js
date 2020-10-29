// get the length of svg logo
$(function(){
// get the path length of svg logo
const $signature = $('#fullSig>path');
console.log($signature.length)
for(let i = 0; i<$signature.length;i++){
  console.log(`${i}/${$signature[i].id}'s path length = ${$signature[i].getTotalLength()}`);
}
})

// real animatio for full page
$(function(){
  $article = $('.tit');
  setTimeout(function(){
    $('.intro').fadeOut();
  }
    ,5600);
    setTimeout(function(){
      $article.eq(0).addClass('turn');
    },6000);
    setTimeout(function(){
      $article.eq(1).addClass('turn');
    },7500);
    setTimeout(function(){
      $article.eq(2).addClass('turn');
    },9000);

})