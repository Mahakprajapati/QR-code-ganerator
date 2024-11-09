let text=document.querySelector('#text');
let image=document.querySelector('#image');
let imageBox=document.querySelector('.imgBox');
let button=document.querySelector('button');

button.addEventListener('click',()=>{
    generateQR();
})

function generateQR(){
    if(text.value.length>0){
        image.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value;
        imageBox.classList.add('showImage');
    }else{
        text.classList.add('shake' ,'error');
        setTimeout(() => {
        text.classList.remove('shake','error');
        }, 1000);
    }
}