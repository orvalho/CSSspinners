window.addEventListener('load', () => {
  const main = document.querySelector('.main');
  const paragraph = document.querySelector('.main p');
  const spinner = 'spinner-1'; // change to spinner-2 or spinner-3 to check out other spinners

  main.classList.add(spinner);
  paragraph.style.display = 'none';

  // mimic server request
  setTimeout( () => {
    main.classList.remove(spinner);
    paragraph.style.display = 'block';
  }, 4000);
});
