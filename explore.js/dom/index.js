
// document.getElementById('button-post').addEventListener('click', function (){
// const comment = document.getElementById('new-comment');
// const newComment = comment.value;
// const container =document.getElementById('container')
// const p =document.createElement('p');
// p.innerText = newComment;
// container.appendChild(p);
// comment.value = '';

// })
//  document.getElementById('text-field').addEventListener('focus', function(){
//     console.log('eventriger inside the input field')
//  })
//  document.getElementById('text-field').addEventListener('blur', function(){
//     console.log('eventriger inside the input field')
//  })
//  document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value)
//  })
// document.getElementById('text-field').addEventListener('keypress', function(event){
//     console.log(event.target.value)
//  })
document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value)
 })
document.getElementById('btn-event').addEventListener('mousemove' , function(){
    console.log('evenTriger')
})