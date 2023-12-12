// Install GSAP: npm install gsap
// Install GSAP: npm install gsap
import gsap from 'gsap';

const Navbar2 = () => {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  const createNavItem = (text, iconClass, to) => {
    const navItem = document.createElement('a');
    navItem.href = to;
    navItem.textContent = text;
    navItem.className = 'nav-item';
    navItem.classList.add('nav-item');
    navItem.setAttribute('data-to', to);

    const icon = document.createElement('i');
    icon.className = `fas ${iconClass}`;
    navItem.prepend(icon);

    return navItem;
  };

  const homeLink = createNavItem('Home', 'fa-home', '/');
  const contactLink = createNavItem('Contact Us', 'fa-envelope', '/contact');
  const addBookLink = createNavItem('Add Book', 'fa-plus', '/add-book');
  const favoritesLink = createNavItem('Favorites', 'fa-heart', '/favorites');

  const loginBtn = document.createElement('button');
  loginBtn.className = 'nav-item login-btn';
  loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';

  navbar.append(homeLink, contactLink, addBookLink, favoritesLink, loginBtn);

  document.body.prepend(navbar);

  gsap.from('.navbar', { opacity: 0, duration: 1, delay: 0.5, y: -30, ease: 'power3.inOut' });
  gsap.from('.nav-item', { opacity: 0, duration: 1, delay: 0.8, y: -30, stagger: 0.2, ease: 'power3.inOut' });
};

export default Navbar2;
