 // Mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Dark mode
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('itreader-theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fa-regular fa-sun"></i> <span>Light</span>';
    } else {
        toggle.innerHTML = '<i class="fa-regular fa-moon"></i> <span>Dark</span>';
    }

    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        toggle.innerHTML = isDark ? 
            '<i class="fa-regular fa-sun"></i> <span>Light</span>' : 
            '<i class="fa-regular fa-moon"></i> <span>Dark</span>';
        localStorage.setItem('itreader-theme', isDark ? 'dark' : 'light');
    });

    // ===== LOGJIKA E EVENTEVE =====
    function displayEvents() {
        const eventsGrid = document.getElementById('eventsGrid');
        if (!eventsGrid) return;
        
        const activeCategory = document.querySelector('.category-chip.active')?.getAttribute('data-category') || 'all';
        const selectedRegion = document.getElementById('regionFilter')?.value || 'all';
        
        // Merr të gjitha eventet
        const { upcoming, past } = getAllEvents();
        
        // Përcakto cilat evente të shfaqë
        let eventsToShow = [];
        if (activeCategory === 'past') {
            eventsToShow = past;
        } else if (activeCategory === 'all') {
            eventsToShow = upcoming;
        } else {
            eventsToShow = upcoming.filter(e => e.category === activeCategory);
        }
        
        // Filtro sipas rajonit
        if (selectedRegion !== 'all') {
            eventsToShow = eventsToShow.filter(e => e.region === selectedRegion);
        }
        
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
            createEventCard(event, activeCategory === 'past')
        ).join('');
    }

    // Filter listeners
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

    // Inicializo
    displayEvents();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) window.scrollTo({top: target.offsetTop-70, behavior:'smooth'});
            document.querySelector('nav ul')?.classList.remove('active');
        });
    });
