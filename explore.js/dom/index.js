document.getElementById('btn-delete').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = "none";
    
})
document.getElementById('delete-confirm').addEventListener('keyup',function(event){

    const text =event.target.value;
    const deletebtn = document.getElementById('btn-delete');
    if(text === 'delete'){
     deletebtn.removeAttribute('disabled');

    }
    else{
        deletebtn.setAttribute('disabled',true)
    }


})