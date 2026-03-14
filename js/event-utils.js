// js/event-utils.js
// Kontrollon nëse një event ka kaluar
function isEventPast(eventDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);
    return eventDateObj < today;
}


// Kthen të gjitha eventet e ndara sipas kategorive
function getAllEvents() {
    const manualPastEvents = allEvents.filter(e => e.isManualPast);
    const upcomingEvents = [];
    const autoPastEvents = [];

    allEvents.forEach(event => {
        if (event.isManualPast) return; // I kemi marrë tashmë
        
        if (isEventPast(event.date)) {
            autoPastEvents.push({
                ...event,
                category: 'past',
                categoryLabel: 'Past ' + (event.categoryLabel || 'Event')
            });
        } else {
            upcomingEvents.push(event);
        }
    });

    // Kombinoji të gjitha eventet e kaluara
    const allPastEvents = [...manualPastEvents, ...autoPastEvents];

    return {
        upcoming: upcomingEvents,
        past: allPastEvents
    };
}

// Filtron eventet sipas kategorisë dhe rajonit
function filterEvents(events, category, region) {
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
                <img src="${event.image}" alt="${event.title}" loading="lazy">
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
