const over = document.querySelector(".overlay");
   const modal = document.querySelector(".sharecontainerdiv")
   
function openModal(){
   console.log('modal is open');
   modal.classList.add("active");
   over.classList.add("overlayactive");
}
function closeModal(){
   modal.classList.remove("active");
   over.classList.remove("overlayactive");
 }
