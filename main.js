document.addEventListener(`click`, e => {
    const origin = e.target.closest(`a`);
    
    if (origin) {
      console.clear();
      console.log(`You clicked ${origin.href}`);
    }
  });