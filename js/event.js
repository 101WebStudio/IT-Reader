    // Mobile menu
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('active');
      const icon = this.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

    // Dark mode persistence
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
      if (isDark) {
        toggle.innerHTML = '<i class="fa-regular fa-sun"></i> <span>Light</span>';
        localStorage.setItem('itreader-theme', 'dark');
      } else {
        toggle.innerHTML = '<i class="fa-regular fa-moon"></i> <span>Dark</span>';
        localStorage.setItem('itreader-theme', 'light');
      }
    });

    // ===== FILTER FUNCTIONALITY =====
    const categoryChips = document.querySelectorAll('.category-chip');
    const regionFilter = document.getElementById('regionFilter');
    const eventCards = document.querySelectorAll('.event-card');

    function filterEvents() {
      const activeCategory = document.querySelector('.category-chip.active')?.getAttribute('data-category') || 'all';
      const selectedRegion = regionFilter.value;

      eventCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardRegion = card.getAttribute('data-region');
        
        // Category match (if active category is 'all', show all)
        const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;
        
        // Region match (if selected region is 'all', show all)
        const regionMatch = selectedRegion === 'all' || cardRegion === selectedRegion;
        
        // Show card if both match
        if (categoryMatch && regionMatch) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Category click handler
    categoryChips.forEach(chip => {
      chip.addEventListener('click', function() {
        // Remove active class from all chips
        categoryChips.forEach(c => c.classList.remove('active'));
        // Add active class to clicked chip
        this.classList.add('active');
        // Apply filters
        filterEvents();
      });
    });

    // Region change handler
    regionFilter.addEventListener('change', filterEvents);

    // Initial filter (in case default active is 'all' and region 'all')
    filterEvents();