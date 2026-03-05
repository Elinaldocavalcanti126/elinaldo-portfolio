/**
 * Modern Portfolio V2.0
 * Elinaldo Cavalcanti
 * Features: Counter Animation, Progress Bars, Lightbox, Theme Toggle
 */

// ==========================================
// PROJECTS DATA — do portfólio original
// ==========================================

const projectsData = [
  {
    id: 1,
    title: 'Painel de Vendas Interativo',
    description: 'Dashboard completo para análise de vendas desenvolvido em Streamlit. Inclui métricas e KPIs em tempo real, visualizações dinâmicas e filtros avançados.',
    fullDescription: 'Plataforma completa de Business Intelligence desenvolvida em Python com Streamlit. Inclui análise de dados em tempo real, visualizações interativas com Plotly, filtros dinâmicos, exportação de relatórios e integração com múltiplas fontes de dados. Sistema otimizado para grandes volumes de dados com cache inteligente.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Data Visualization',
    tags: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy'],
    github: 'https://github.com/Elinaldocavalcanti126/dashboard-vendas-streamlit',
    demo: null
  },
  {
    id: 2,
    title: 'Chatbot Inteligente com IA',
    description: 'Chatbot conversacional avançado com integração de IA, banco de dados SQLite, interface intuitiva e sistema de aprendizado contínuo.',
    fullDescription: 'Solução de chatbot baseada em IA com processamento de linguagem natural. Implementa machine learning para respostas contextuais, integração com APIs externas, sistema de aprendizado automático e interface conversacional intuitiva. Suporta múltiplos idiomas e contextos de negócio.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    category: 'AI & Chatbot',
    tags: ['Python', 'Streamlit', 'SQLite', 'NLP', 'Machine Learning'],
    github: 'https://github.com/Elinaldocavalcanti126/chatbot-streamlit',
    demo: null
  },
  {
    id: 3,
    title: 'Sistema de Gestão Hospitalar',
    description: 'Plataforma completa de gestão para hospitais com controle de estoque de medicamentos, alertas automáticos e dashboard administrativo.',
    fullDescription: 'Sistema completo para gestão hospitalar incluindo controle de estoque de medicamentos e materiais, sistema de alertas para itens com baixa quantidade, geração de relatórios gerenciais, controle de fornecedores e histórico completo de movimentações. Interface intuitiva e responsiva.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    category: 'Healthcare',
    tags: ['Python', 'Streamlit', 'SQLite', 'Pandas', 'Plotly'],
    github: 'https://github.com/Elinaldocavalcanti126/estoque-hospitalar',
    demo: null
  },
  {
    id: 4,
    title: 'Suite de Automação RPA',
    description: 'Suite completa de automação com web scraping avançado, processamento automático de documentos, envio de emails em massa e integração com planilhas Excel.',
    fullDescription: 'Suite robusta de automação de processos incluindo web scraping com Selenium, processamento automatizado de planilhas Excel, envio automatizado de emails, geração de relatórios PDF, integração entre sistemas legados e dashboard de monitoramento de processos automatizados.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    category: 'Automation',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'openpyxl', 'Schedule'],
    github: 'https://github.com/Elinaldocavalcanti126/automacao-python-dashboard',
    demo: null
  },
  {
    id: 5,
    title: 'Plataforma Educacional – Flebotomia',
    description: 'Plataforma web educacional completa sobre flebotomia, com conteúdo multimídia, quizzes interativos, vídeos demonstrativos e certificação digital.',
    fullDescription: 'Sistema educacional completo desenvolvido com HTML5, CSS3 e JavaScript puro. Inclui módulos de aprendizado interativo, quizzes com feedback imediato, sistema de gamificação, certificados digitais personalizados, dashboard de progresso e área administrativa para gestão de conteúdo.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    category: 'Web Development',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PWA'],
    github: 'https://github.com/Elinaldocavalcanti126/Elinaldocavalcanti126-curso-flebotomia-',
    demo: null
  }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const showToast = (message, type = 'success') => {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const icon = type === 'success' ? '✅' : '❌';
  toast.innerHTML = `${icon} ${message}`;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
};

// ==========================================
// COUNTER ANIMATION
// ==========================================

class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.counter');
    this.hasAnimated = false;
    this.init();
  }

  init() {
    if (this.counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(counter => observer.observe(counter));
  }

  animateCounters() {
    this.counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '+';
        }
      };

      updateCounter();
    });
  }
}

// ==========================================
// PROGRESS BARS ANIMATION
// ==========================================

class ProgressBars {
  constructor() {
    this.progressBars = document.querySelectorAll('.skill-bar-fill');
    this.hasAnimated = false;
    this.init();
  }

  init() {
    if (this.progressBars.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateProgressBars();
        }
      });
    }, { threshold: 0.3 });

    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }

  animateProgressBars() {
    this.progressBars.forEach((bar, index) => {
      setTimeout(() => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
      }, index * 150);
    });
  }
}

// ==========================================
// NAVIGATION
// ==========================================

class Navigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.hamburger = document.getElementById('hamburger');
    this.navMenu = document.getElementById('navMenu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.init();
  }

  init() {
    window.addEventListener('scroll', debounce(() => {
      if (window.scrollY > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
      this.updateActiveLink();
    }, 10));

    this.hamburger?.addEventListener('click', () => {
      this.navMenu?.classList.toggle('active');
      this.hamburger.classList.toggle('active');
    });

    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navMenu?.classList.remove('active');
        this.hamburger?.classList.remove('active');

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offset = 80;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

// ==========================================
// THEME TOGGLE
// ==========================================

class ThemeToggle {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.theme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateIcon();

    this.themeToggle?.addEventListener('click', () => {
      this.toggleTheme();
    });
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
    this.updateIcon();
  }

  updateIcon() {
    const icon = this.themeToggle?.querySelector('i');
    if (icon) {
      icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}

// ==========================================
// PROJECTS RENDERER WITH LIGHTBOX
// ==========================================

class ProjectsRenderer {
  constructor() {
    this.container = document.getElementById('projectsGrid');
    this.lightbox = document.getElementById('projectLightbox');
    this.lightboxBody = document.getElementById('lightboxBody');
    this.closeLightbox = document.getElementById('closeLightbox');
    this.init();
  }

  init() {
    if (!this.container) return;
    this.renderProjects();
    this.setupLightbox();
  }

  renderProjects() {
    this.container.innerHTML = projectsData.map(project => `
      <div class="project-card" data-project-id="${project.id}">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
          <span class="project-category">${project.category}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-link link-github" onclick="event.stopPropagation()">
              <i class="fab fa-github"></i>
              <span>Código</span>
            </a>
            ${project.demo ? `
              <a href="${project.demo}" target="_blank" class="project-link link-demo" onclick="event.stopPropagation()">
                <i class="fas fa-external-link-alt"></i>
                <span>Demo</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');

    const cards = this.container.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const projectId = parseInt(card.getAttribute('data-project-id'));
        this.openLightbox(projectId);
      });
    });
  }

  setupLightbox() {
    this.closeLightbox?.addEventListener('click', () => {
      this.closeLightboxModal();
    });

    this.lightbox?.querySelector('.lightbox-overlay')?.addEventListener('click', () => {
      this.closeLightboxModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.lightbox?.classList.contains('active')) {
        this.closeLightboxModal();
      }
    });
  }

  openLightbox(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    this.lightboxBody.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <span class="project-category">${project.category}</span>
      <h2>${project.title}</h2>
      <p>${project.fullDescription}</p>
      <div class="project-tags" style="margin-bottom: 24px;">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="project-link link-github">
          <i class="fab fa-github"></i>
          <span>Ver Código no GitHub</span>
        </a>
        ${project.demo ? `
          <a href="${project.demo}" target="_blank" class="project-link link-demo">
            <i class="fas fa-external-link-alt"></i>
            <span>Ver Demo</span>
          </a>
        ` : ''}
      </div>
    `;

    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeLightboxModal() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// CONTACT FORM
// ==========================================

class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  async handleSubmit() {
    const formData = new FormData(this.form);
    const name = formData.get('name');

    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Enviando...</span>';

    try {
      const response = await fetch('https://formspree.io/f/xnjbepve', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showToast(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Responderei em breve!`, 'success');
        this.form.reset();
      } else {
        const errorData = await response.json();
        const errorMsg = errorData?.errors?.map(e => e.message).join(', ') || 'Erro desconhecido.';
        showToast(`Erro ao enviar: ${errorMsg}`, 'error');
      }
    } catch (error) {
      showToast('Erro de conexão. Verifique sua internet e tente novamente.', 'error');
      console.error('Formspree error:', error);
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalContent;
    }
  }
}

// ==========================================
// SCROLL TO TOP
// ==========================================

class ScrollToTop {
  constructor() {
    this.button = document.getElementById('scrollTop');
    this.init();
  }

  init() {
    if (!this.button) return;

    window.addEventListener('scroll', debounce(() => {
      if (window.scrollY > 300) {
        this.button.classList.add('show');
      } else {
        this.button.classList.remove('show');
      }
    }, 100));

    this.button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

class AnimationObserver {
  constructor() {
    this.init();
  }

  init() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(`
      .skill-category,
      .project-card,
      .about-card,
      .feature-item,
      .contact-item,
      .timeline-item,
      .skill-bar-item
    `);

    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
      observer.observe(el);
    });
  }
}

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

class Typewriter {
  constructor() {
    this.el = document.getElementById('typewriter');
    this.phrases = [
      'Desenvolvedor Python',
      'Especialista em Streamlit',
      'Analista de Dados',
      'Desenvolvedor Full Stack',
      'Criador de Chatbots IA'
    ];
    this.current = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typeSpeed = 80;
    this.deleteSpeed = 40;
    this.pauseEnd = 1800;
    this.pauseStart = 300;
    if (this.el) this.type();
  }

  type() {
    const phrase = this.phrases[this.current];

    if (this.isDeleting) {
      this.el.textContent = phrase.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.el.textContent = phrase.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === phrase.length) {
      delay = this.pauseEnd;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.current = (this.current + 1) % this.phrases.length;
      delay = this.pauseStart;
    }

    setTimeout(() => this.type(), delay);
  }
}

// ==========================================
// PROJECT FILTER
// ==========================================

class ProjectFilter {
  constructor() {
    this.filterContainer = document.getElementById('projectsFilter');
    this.init();
  }

  init() {
    if (!this.filterContainer) return;

    this.filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      this.filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      this.filterProjects(filter);
    });
  }

  filterProjects(filter) {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      const category = card.querySelector('.project-category')?.textContent.trim();
      const show = filter === 'all' || category === filter;

      if (show) {
        card.classList.remove('hidden');
        card.classList.add('fade-in');
        setTimeout(() => card.classList.remove('fade-in'), 400);
      } else {
        card.classList.add('hidden');
      }
    });
  }
}

// ==========================================
// CUSTOM CURSOR
// ==========================================

class CustomCursor {
  constructor() {
    this.dot  = document.getElementById('cursorDot');
    this.ring = document.getElementById('cursorRing');
    this.mouseX = 0; this.mouseY = 0;
    this.ringX  = 0; this.ringY  = 0;
    this.init();
  }

  init() {
    if (!this.dot || !this.ring) return;
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.dot.style.left = `${e.clientX}px`;
      this.dot.style.top  = `${e.clientY}px`;
    });

    // Smooth ring follows with lag
    const animateRing = () => {
      this.ringX += (this.mouseX - this.ringX) * 0.12;
      this.ringY += (this.mouseY - this.ringY) * 0.12;
      this.ring.style.left = `${this.ringX}px`;
      this.ring.style.top  = `${this.ringY}px`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover effect on interactive elements
    const hoverTargets = 'a, button, .project-card, .service-card, .cert-card, .filter-btn, .nav-link, .skill-category';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => this.ring.classList.add('hovering'));
      el.addEventListener('mouseleave', () => this.ring.classList.remove('hovering'));
    });

    document.addEventListener('mousedown', () => this.ring.classList.add('clicking'));
    document.addEventListener('mouseup',   () => this.ring.classList.remove('clicking'));

    // Hide when leaving window
    document.addEventListener('mouseleave', () => {
      this.dot.style.opacity  = '0';
      this.ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      this.dot.style.opacity  = '1';
      this.ring.style.opacity = '1';
    });
  }
}

// ==========================================
// PARALLAX HERO
// ==========================================

class ParallaxHero {
  constructor() {
    this.heroLeft  = document.querySelector('.hero-animate-left');
    this.heroRight = document.querySelector('.hero-animate-right');
    this.hero      = document.getElementById('inicio');
    this.init();
  }

  init() {
    if (!this.heroLeft || !this.heroRight || !this.hero) return;
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    this.hero.addEventListener('mousemove', (e) => {
      const rect = this.hero.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / rect.width;
      const dy   = (e.clientY - cy) / rect.height;

      // Text moves left, photo moves right — opposite directions
      this.heroLeft.style.transform  = `translate(${dx * -18}px, ${dy * -10}px)`;
      this.heroRight.style.transform = `translate(${dx *  18}px, ${dy *  10}px)`;
    });

    this.hero.addEventListener('mouseleave', () => {
      this.heroLeft.style.transform  = 'translate(0, 0)';
      this.heroRight.style.transform = 'translate(0, 0)';
    });
  }
}

// ==========================================
// TILT 3D ON CARDS
// ==========================================

class TiltCards {
  constructor() {
    this.cards = document.querySelectorAll('.project-card, .service-card, .cert-card, .skill-category');
    this.init();
  }

  init() {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    this.cards.forEach(card => {
      card.addEventListener('mousemove', (e) => this.onMove(e, card));
      card.addEventListener('mouseleave', ()  => this.onLeave(card));
    });
  }

  onMove(e, card) {
    const rect   = card.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    const tiltX  = dy * -8;   // max 8deg vertical
    const tiltY  = dx *  8;   // max 8deg horizontal
    const glare  = `radial-gradient(circle at ${(dx+1)*50}% ${(dy+1)*50}%, rgba(255,107,53,0.12) 0%, transparent 70%)`;

    card.style.transform  = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`;
    card.style.background = glare;
    card.style.transition = 'transform 0.1s ease, background 0.1s ease';
  }

  onLeave(card) {
    card.style.transform  = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    card.style.background = '';
    card.style.transition = 'transform 0.5s ease, background 0.5s ease';
  }
}

// ==========================================
// REACTIVE PARTICLES
// ==========================================

class ReactiveParticles {
  constructor() {
    this.particles = document.querySelectorAll('.particle');
    this.mouseX = window.innerWidth  / 2;
    this.mouseY = window.innerHeight / 2;
    this.origins = [];
    this.init();
  }

  init() {
    if (this.particles.length === 0) return;
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    // Store original positions after a brief delay (let CSS place them first)
    setTimeout(() => {
      this.particles.forEach(p => {
        const rect = p.getBoundingClientRect();
        this.origins.push({ x: rect.left + rect.width/2, y: rect.top + rect.height/2 });
      });
    }, 500);

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.react();
    });
  }

  react() {
    this.particles.forEach((p, i) => {
      const origin = this.origins[i];
      if (!origin) return;

      const dx   = this.mouseX - origin.x;
      const dy   = this.mouseY - origin.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const maxDist = 200;

      if (dist < maxDist) {
        const force  = (maxDist - dist) / maxDist;
        const moveX  = -(dx / dist) * force * 60;
        const moveY  = -(dy / dist) * force * 60;
        p.style.transform = `translate(${moveX}px, ${moveY}px)`;
        p.style.opacity   = String(0.4 + force * 0.6);
      } else {
        p.style.transform = 'translate(0, 0)';
        p.style.opacity   = '';
      }
    });
  }
}

// ==========================================
// VISIT COUNTER
// ==========================================

class VisitCounter {
  constructor() {
    this.el = document.getElementById('visitCount');
    this.init();
  }

  async init() {
    if (!this.el) return;

    try {
      // hits.sh — free, no signup, counts unique page views
      const url = 'https://hits.sh/elinaldocavalcanti126.github.io/portfolio.json';
      const res  = await fetch(url);
      const data = await res.json();
      const total = parseInt(data.total_count || data.count || 0);
      this.animateCount(total);
    } catch {
      // Fallback: hide counter gracefully if fetch fails
      if (this.el.closest('.visit-counter')) {
        this.el.closest('.visit-counter').style.display = 'none';
      }
    }
  }

  animateCount(target) {
    if (target === 0) {
      this.el.textContent = '—';
      return;
    }
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      this.el.textContent = current.toLocaleString('pt-BR');
      if (current >= target) clearInterval(timer);
    }, 30);
  }
}

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

class ScrollProgress {
  constructor() {
    this.bar = document.getElementById('scrollProgress');
    this.init();
  }

  init() {
    if (!this.bar) return;
    window.addEventListener('scroll', () => this.update(), { passive: true });
  }

  update() {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const progress     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.bar.style.width = `${Math.min(progress, 100)}%`;
  }
}

// ==========================================
// GLITCH EFFECT ON NAME
// ==========================================

class GlitchEffect {
  constructor() {
    this.el = document.querySelector('.glitch');
    this.init();
  }

  init() {
    if (!this.el) return;

    // Trigger glitch on page load after hero animation settles
    setTimeout(() => {
      this.runGlitch();
    }, 1000);

    // Repeat glitch every 6 seconds subtly
    setInterval(() => {
      this.runGlitch();
    }, 6000);
  }

  runGlitch() {
    this.el.classList.add('glitch-active');
    // Run for 600ms then stop
    setTimeout(() => {
      this.el.classList.remove('glitch-active');
    }, 600);
  }
}

// ==========================================
// EASTER EGG — CONSOLE ART
// ==========================================

class EasterEgg {
  init() {
    const art = `
%c
███████╗██╗     ██╗███╗   ██╗ █████╗ ██╗     ██████╗  ██████╗
██╔════╝██║     ██║████╗  ██║██╔══██╗██║     ██╔══██╗██╔═══██╗
█████╗  ██║     ██║██╔██╗ ██║███████║██║     ██║  ██║██║   ██║
██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██║     ██║  ██║██║   ██║
███████╗███████╗██║██║ ╚████║██║  ██║███████╗██████╔╝╚██████╔╝
╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝
`;

    const info = `
%c👨‍💻  Elinaldo Cavalcanti — Desenvolvedor Python & Full Stack
🐍  Python · Streamlit · FastAPI · JavaScript · SQL
🤖  IA · NLP · Machine Learning · Automação
📧  elinaldocavalcanti88@gmail.com
💼  linkedin.com/in/elinaldocavalcanti-dev/
🐙  github.com/Elinaldocavalcanti126
📱  WhatsApp: +55 81 99714-8884

%c🚀 Gostou do que viu? Vamos conversar!
`;

    console.log(art,    'color: #ff6b35; font-weight: bold;');
    console.log(info,
      'color: #b4bcd0; font-size: 13px; line-height: 1.8;',
      'color: #ff6b35; font-size: 14px; font-weight: bold;'
    );
  }
}

// ==========================================
// APP INITIALIZATION
// ==========================================

class App {
  init() {
    try {
      new Navigation();
      new ThemeToggle();
      new CounterAnimation();
      new ProgressBars();
      new ProjectsRenderer();
      new ProjectFilter();
      new Typewriter();
      new ContactForm();
      new ScrollToTop();
      new AnimationObserver();
      new ScrollProgress();
      new GlitchEffect();
      new EasterEgg().init();
      new CustomCursor();
      new ParallaxHero();
      new TiltCards();
      new ReactiveParticles();
      new VisitCounter();
    } catch (error) {
      console.error('App initialization error:', error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});

window.addEventListener('load', () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
});
