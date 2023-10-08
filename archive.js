function moveArchive(number){
  const repositionDiv = document.querySelector(`.archive-container${number}`);

  repositionDiv.addEventListener('click', () => {
    repositionDiv.classList.add('selected');
  });
  audio.play();
}
