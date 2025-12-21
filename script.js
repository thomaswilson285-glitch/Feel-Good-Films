const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});
sections.forEach(s => {
  s.style.opacity = 0;
  s.style.transform = 'translateY(30px)';
  s.style.transition = '1s';
  observer.observe(s);
});
