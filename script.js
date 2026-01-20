// ========================================
// PORTFÓLIO ELINALDO - JAVASCRIPT
// ========================================

// Dados dos Projetos
const projects = [
    {
        id: 1,
        title: '📊 Painel de Vendas Interativo',
        description: 'Dashboard completo para análise de vendas desenvolvido em Streamlit. Inclui métricas e KPIs em tempo real, visualizações dinâmicas, filtros avançados e exportação de relatórios.',
        category: 'Data Visualization',
        technologies: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        github: 'https://github.com/Elinaldocavalcanti126/dashboard-vendas-streamlit'
    },
    {
        id: 2,
        title: '🤖 Chatbot Inteligente com IA',
        description: 'Chatbot conversacional avançado com integração de IA, banco de dados SQLite, interface intuitiva e sistema de aprendizado contínuo para respostas cada vez mais precisas.',
        category: 'AI & Chatbot',
        technologies: ['Python', 'Streamlit', 'SQLite', 'NLP', 'Machine Learning'],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
        github: 'https://github.com/Elinaldocavalcanti126/chatbot-streamlit'
    },
    {
        id: 3,
        title: '🏥 Sistema de Gestão Hospitalar',
        description: 'Plataforma completa de gestão para hospitais com controle de estoque de medicamentos, alertas automáticos, relatórios detalhados e dashboard administrativo.',
        category: 'Healthcare',
        technologies: ['Python', 'Streamlit', 'SQLite', 'Pandas', 'Plotly'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        github: 'https://github.com/Elinaldocavalcanti126/estoque-hospitalar'
    },
    {
        id: 4,
        title: '⚙️ Painel de Automação RPA',
        description: 'Suite completa de automação com web scraping avançado, processamento automático de documentos, envio de emails em massa e integração total com planilhas Excel.',
        category: 'Automation',
        technologies: ['Python', 'Selenium', 'BeautifulSoup', 'openpyxl', 'Schedule'],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
        github: 'https://github.com/Elinaldocavalcanti126/automacao-python-dashboard'
    },
    {
        id: 5,
        title: '🎓 Plataforma Educacional - Flebotomia',
        description: 'Plataforma web educacional completa sobre flebotomia, com conteúdo multimídia, quizzes interativos, vídeos demonstrativos e certificação digital para profissionais da saúde.',
        category: 'Web Development',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PWA'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        github: 'https://github.com/Elinaldocavalcanti126/Elinaldocavalcanti126-curso-flebotomia-'
    }
];

// Dados das Habilidades
const skills = [
    {
        icon: '🐍',
        title: 'Python Development',
        description: 'Desenvolvimento full-stack com Python, incluindo frameworks modernos, automação, análise de dados e APIs RESTful escaláveis.',
        tags: ['Python', 'Flask', 'FastAPI', 'Streamlit', 'Pandas']
    },
    {
        icon: '📊',
        title: 'Data Science & Analytics',
        description: 'Análise de dados, visualização interativa, machine learning e criação de dashboards para insights acionáveis.',
        tags: ['Pandas', 'NumPy', 'Plotly', 'Scikit-learn', 'SQL']
    },
    {
        icon: '💻',
        title: 'Full-Stack Development',
        description: 'Desenvolvimento web completo com interfaces modernas, responsivas e APIs robustas para aplicações escaláveis.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST APIs']
    },
    {
        icon: '🤖',
        title: 'AI & Machine Learning',
        description: 'Implementação de soluções de IA, chatbots inteligentes, NLP e automação com aprendizado de máquina.',
        tags: ['NLP', 'TensorFlow', 'Transformers', 'LangChain', 'OpenAI']
    },
    {
        icon: '🗄️',
        title: 'Database Management',
        description: 'Design e otimização de bancos de dados relacionais e NoSQL, queries complexas e modelagem de dados.',
        tags: ['PostgreSQL', 'SQLite', 'MongoDB', 'SQLAlchemy', 'Redis']
    },
    {
        icon: '🚀',
        title: 'DevOps & Cloud',
        description: 'Deploy, CI/CD, containerização e gerenciamento de infraestrutura em cloud para aplicações modernas.',
        tags: ['Docker', 'Git', 'GitHub Actions', 'Render', 'Railway']
    }
];

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initHeader();
    initScrollTop();
    initSmoothScroll();
    initScrollAnimations();
    initThemeToggle();
    renderSkills();
    renderProjects();
    initContactForm();
});

// ========================================
// PARTÍCULAS DE FUNDO
// ========================================
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.3;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========================================
// HEADER + MENU MOBILE
// ========================================
function initHeader() {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('navLinks');

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const current = window.scrollY;

        header.classList.toggle('scrolled', current > 80);

        if (current > lastScroll && current > 400) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = current;
    });

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(link =>
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        })
    );
}

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================
function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// SCROLL SUAVE
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            const offset = document.getElementById('header')?.offsetHeight || 80;

            window.scrollTo({
                top: target.offsetTop - offset - 20,
                behavior: 'smooth'
            });
        });
    });
}

// ========================================
// ANIMAÇÕES AO SCROLL
// ========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll(
        'section, .skill-card, .project-card, .contact-item, .stat'
    ).forEach(el => observer.observe(el));
}

// ========================================
// TOGGLE TEMA
// ========================================
function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.dataset.theme = saved;
    btn.textContent = saved === 'dark' ? '🌙' : '☀️';

    btn.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        btn.textContent = theme === 'dark' ? '🌙' : '☀️';
    });
}

// ========================================
// RENDERIZAR HABILIDADES
// ========================================
function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;

    container.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ========================================
// RENDERIZAR PROJETOS
// ========================================
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <span class="project-category">${project.category}</span>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank" rel="noopener">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulação de envio (substitua por sua API real)
        showNotification(
            `✅ Obrigado ${data.name}! Sua mensagem foi enviada com sucesso. Responderei em breve!`,
            'success'
        );

        form.reset();
    });
}

// ========================================
// NOTIFICAÇÃO
// ========================================
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    if (!notification) return;

    notification.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// ========================================
// LOG
// ========================================
console.log('%c🚀 Portfólio Elinaldo Cavalcanti', 'color:#00ff88;font-size:18px;font-weight:bold');