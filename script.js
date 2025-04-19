const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "OMG!!!, I like you too";
  gif.src = "gif.webp";
});
noBtn.addEventListener("click", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randonX = Math.floor(Math.random() * maxX);
  const randonY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randonX + "px";
  noBtn.style.top = randonY + "px";
});
