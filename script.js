const links = [...document.querySelectorAll('.nav-links a, .subnav a')];
const sections = [...document.querySelectorAll('section[id]')];

const activate = (id) => {
  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      activate(visible.target.id);
    }
  },
  { rootMargin: '-35% 0px -45% 0px', threshold: [0.08, 0.18, 0.32] }
);

sections.forEach((section) => observer.observe(section));
