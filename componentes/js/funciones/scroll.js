export function headerScroll () {
    const header = document.getElementById('barraNavegacion')
  
    if (header) {
      window.addEventListener('scroll', function () {
        if (window.scrollY >= 50) {
          header.classList.add('barraColor')
        } else {
          header.classList.remove('barraColor')
        }
      })
    }
  }