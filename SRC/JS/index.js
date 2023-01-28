const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarmodal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarmodal();
    video.setAttribute("src", linkDoVideo);
});


const botaoFecharmodal = document.querySelector(".fechar-modal");

botaoFecharmodal.addEventListener("click", () => {
   modal.classList.toggle("aberto");
   video.setAttribute("src","");
});