const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    projects.forEach((project) => {
      const matches = selected === 'all' || project.dataset.category === selected;
      project.classList.toggle('hidden', !matches);
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
