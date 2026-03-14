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

// ===== FILTER FUNKSIONALITETI =====
function filterEvents() {
    const activeCategory = document.querySelector('.category-chip.active')?.getAttribute('data-category') || 'all';
    const selectedRegion = document.getElementById('regionFilter')?.value || 'all';
    
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardRegion = card.getAttribute('data-region');
        
        // Kontrollo kategorinë
        let categoryMatch = false;
        if (activeCategory === 'all') {
            categoryMatch = true;
        } else if (activeCategory === 'past') {
            // Eventet e kaluara - mund të shtosh logjikën këtu
            categoryMatch = cardCategory === 'past';
        } else {
            categoryMatch = cardCategory === activeCategory;
        }
        
        // Kontrollo rajonin
        const regionMatch = selectedRegion === 'all' || cardRegion === selectedRegion;
        
        // Shfaq ose fshih kartën
        if (categoryMatch && regionMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter listeners
const categoryChips = document.querySelectorAll('.category-chip');
const regionFilter = document.getElementById('regionFilter');

if (categoryChips.length > 0) {
    categoryChips.forEach(chip => {
        chip.addEventListener('click', function() {
            categoryChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            filterEvents();
        });
    });
}

if (regionFilter) {
    regionFilter.addEventListener('change', filterEvents);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) window.scrollTo({top: target.offsetTop-70, behavior:'smooth'});
        document.querySelector('nav ul')?.classList.remove('active');
    });
});

// Inicializo filter-in
filterEvents();
