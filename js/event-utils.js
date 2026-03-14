// js/event-utils.js
// Funksionet ndihmëse për eventet

// Kontrollon nëse një event ka kaluar
function isEventPast(eventDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);
    return eventDateObj < today;
}

// Kthen të gjitha eventet e ndara sipas kategorive (upcoming dhe past)
function getAllEvents() {
    // Kontrollo nëse allEvents ekziston
    if (typeof allEvents === 'undefined') {
        console.error('allEvents nuk është i përcaktuar. Sigurohu që event-data.js është ngarkuar para event-utils.js');
        return { upcoming: [], past: [] };
    }
    
    const manualPastEvents = allEvents.filter(e => e.isManualPast === true);
    const upcomingEvents = [];
    const autoPastEvents = [];

    allEvents.forEach(event => {
        // Kapërce eventet manuale past (i kemi marrë më lart)
        if (event.isManualPast) return;
        
        if (isEventPast(event.date)) {
            // Event që ka kaluar - shto në past
            autoPastEvents.push({
                ...event,
                category: 'past',
                categoryLabel: 'Past ' + (event.categoryLabel || 'Event')
            });
        } else {
            // Event i ardhshëm
            upcomingEvents.push(event);
        }
    });

    // Kombino eventet manuale past me ato automatike
    const allPastEvents = [...manualPastEvents, ...autoPastEvents];

    return {
        upcoming: upcomingEvents,
        past: allPastEvents
    };
}

// Filtron eventet sipas kategorisë dhe rajonit
function filterEvents(events, category, region) {
    if (!events || events.length === 0) return [];
    
    return events.filter(event => {
        const categoryMatch = category === 'all' || event.category === category;
        const regionMatch = region === 'all' || event.region === region;
        return categoryMatch && regionMatch;
    });
}

// Krijon HTML për një event card
function createEventCard(event, isPast = false) {
    const badgeClass = isPast ? 'past-event-badge' : '';
    const cardClass = isPast ? 'past-event-card' : '';
    const inviteOnlyHtml = event.inviteOnly ? 
        `<div class="meta-item"><i class="fas fa-user-lock"></i> Invitation-only</div>` : '';

    return `
        <a href="${event.link}" class="event-card ${cardClass}" target="_blank" data-category="${event.category}" data-region="${event.region}">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
                <span class="event-category ${badgeClass}">${event.categoryLabel}</span>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <div class="meta-item"><i class="fas fa-calendar-alt"></i> ${event.dateDisplay}</div>
                    <div class="meta-item"><i class="fas fa-map-pin"></i> ${event.location}</div>
                    ${inviteOnlyHtml}
                </div>
                <div class="event-footer">
                    <span class="event-link">View event <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </a>
    `;
}
