// js/event.js
// Logjika kryesore për faqen e eventeve

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE MENU =====
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // ===== DARK MODE =====
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('itreader-theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fa-regular fa-sun"></i> <span>Light</span>';
    } else {
        toggle.innerHTML = '<i class="fa-regular fa-moon"></i> <span>Dark</span>';
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            toggle.innerHTML = isDark ? 
                '<i class="fa-regular fa-sun"></i> <span>Light</span>' : 
                '<i class="fa-regular fa-moon"></i> <span>Dark</span>';
            localStorage.setItem('itreader-theme', isDark ? 'dark' : 'light');
        });
    }

    // ===== FUNKSIONET PËR EVENTET =====
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid) return;

    // Ruaj të dhënat në localStorage për reference
    const { upcoming, past } = getAllEvents();
    localStorage.setItem('upcomingEvents', JSON.stringify(upcoming));
    localStorage.setItem('pastEvents', JSON.stringify(past));

    // Funksioni për të shfaqur eventet
    function displayEvents() {
        const activeCategory = document.querySelector('.category-chip.active')?.getAttribute('data-category') || 'all';
        const selectedRegion = document.getElementById('regionFilter')?.value || 'all';
        
        const { upcoming, past } = getAllEvents();
        
        // Përcakto cilat evente të shfaqë
        let eventsToShow = [];
        let isPastView = false;
        
        if (activeCategory === 'past') {
            eventsToShow = past;
            isPastView = true;
        } else if (activeCategory === 'all') {
            eventsToShow = upcoming;
        } else {
            eventsToShow = upcoming.filter(e => e.category === activeCategory);
        }
        
        // Filtro sipas rajonit
        if (selectedRegion !== 'all') {
            eventsToShow = eventsToShow.filter(e => e.region === selectedRegion);
        }
        
        // Rendit sipas datës (më të rejat në fillim)
        eventsToShow.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Shfaq eventet
        if (eventsToShow.length === 0) {
            eventsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-${activeCategory === 'past' ? 'history' : 'calendar-times'}"></i>
                    <h3>${activeCategory === 'past' ? 'No past events yet' : 'No upcoming events'}</h3>
                    <p>Check back later or try a different filter.</p>
                </div>
            `;
            return;
        }
        
        eventsGrid.innerHTML = eventsToShow.map(event => 
            createEventCard(event, isPastView)
        ).join('');
    }

    // ===== FILTER LISTENERS =====
    const categoryChips = document.querySelectorAll('.category-chip');
    const regionFilter = document.getElementById('regionFilter');

    if (categoryChips.length > 0) {
        categoryChips.forEach(chip => {
            chip.addEventListener('click', function() {
                categoryChips.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                displayEvents();
            });
        });
    }

    if (regionFilter) {
        regionFilter.addEventListener('change', displayEvents);
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
            document.querySelector('nav ul')?.classList.remove('active');
        });
    });

    // ===== INICIALIZO =====
    displayEvents();
});
