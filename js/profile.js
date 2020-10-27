$(function(){
// get the path length of svg logo
const $signature = $('#fullSig>path');
console.log($signature.length)
for(let i = 0; i<$signature.length;i++){
  console.log(`${i}/${$signature[i].id}'s path length = ${$signature[i].getTotalLength()}`);
}

})