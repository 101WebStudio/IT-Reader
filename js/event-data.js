// js/event-data.js

// Funksioni për të krahasuar datat
function isEventPast(eventDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);
    return eventDateObj < today;
}

// Funksioni për të marrë të gjitha eventet e ndara
function getAllEvents() {
    // Eventet manuale që duhet të jenë gjithmonë në "past"
    const manualPastEvents = [
        {
            id: 'keepit-bern-past',
            title: 'Keepit Live - Bern',
            date: '2026-02-17',
            dateDisplay: 'February 17, 2026',
            location: 'Wein & Sein, Munstergasse 50, 3011 Bern',
            category: 'past',
            region: 'europe',
            image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&h=400&fit=crop&auto=format',
            link: 'https://itreader.com/keepit-live-bern',
            categoryLabel: 'Past Event',
            isManualPast: true
        }
    ];

    // Të gjitha eventet e ardhshme (nga lista jote)
    const upcomingEventsList = [
        {
            id: 'keepit-manchester',
            title: 'Keepit Live Manchester',
            date: '2026-04-29',
            dateDisplay: 'April 29, 2026 • 16:00 – 20:00',
            location: '20 Stories, Manchester, UK',
            category: 'live',
            region: 'uk',
            image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=600&h=400&fit=crop&auto=format',
            link: 'events/Manchester.html',
            categoryLabel: 'Live Event'
        },
        {
            id: 'myriad360-chicago',
            title: 'Myriad360 Innovation Summit - Chicago',
            date: '2026-04-07',
            dateDisplay: 'April 7, 2026',
            location: 'Sepia, Chicago, IL',
            category: 'summit',
            region: 'illinois',
            image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=600&h=400&fit=crop&auto=format',
            link: 'events/Chicago.html',
            categoryLabel: 'Summit',
            inviteOnly: true
        },
        {
            id: 'cockroach-sanfrancisco',
            title: 'Cockroach Connect: The Enterprise Reckoning',
            date: '2026-04-08',
            dateDisplay: 'April 8, 2026 • 17:00 – 19:30',
            location: 'MOSA, San Francisco, CA',
            category: 'dinner',
            region: 'california',
            image: 'https://mma.prnewswire.com/media/1663429/CockroachLabs_Full_Logo_Horizontal_Full_Color_Light_BG__1_Logo.jpg?w=600&h=400&fit=crop',
            link: 'events/Cockroach-San Francisco.html',
            categoryLabel: 'Dinner',
            inviteOnly: true
        },
        {
            id: 'native-rsac',
            title: 'Join Native and Artemis for Breakfast at RSAC',
            date: '2026-03-25',
            dateDisplay: 'March 25, 2026 • 8:30 – 10:30 AM',
            location: 'Pied Piper Room, Palace Hotel, San Francisco',
            category: 'breakfast',
            region: 'california',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&auto=format',
            link: 'events/Native × Artemis RSAC Breakfast.html',
            categoryLabel: 'Breakfast',
            inviteOnly: true
        },
        {
            id: 'zendesk-boston',
            title: 'Zendesk CX Trends 2026 – Boston',
            date: '2026-03-24',
            dateDisplay: 'March 24, 2026 • 11:30am – 4:00pm',
            location: 'View Boston, Prudential Tower, Boston',
            category: 'cx-trends',
            region: 'massachusetts',
            image: 'https://images.unsplash.com/photo-1487024884796-5bce7e9c61d2?w=600&h=400&fit=crop&auto=format',
            link: 'events/Boston.html',
            categoryLabel: 'CX Trends'
        },
        {
            id: 'zendesk-la',
            title: 'Zendesk CX Trends 2026 – Los Angeles',
            date: '2026-03-19',
            dateDisplay: 'March 19, 2026 • 11:30am – 4:00pm',
            location: '1 Hotel West Hollywood, Los Angeles',
            category: 'cx-trends',
            region: 'california',
            image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&h=400&fit=crop&auto=format',
            link: 'events/La.html',
            categoryLabel: 'CX Trends'
        },
        {
            id: 'zendesk-atlanta',
            title: 'Zendesk CX Trends 2026 – Atlanta',
            date: '2026-03-18',
            dateDisplay: 'March 18, 2026 • 11:30am – 4:00pm',
            location: 'Atlanta Botanical Garden, Atlanta',
            category: 'cx-trends',
            region: 'georgia',
            image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&h=400&fit=crop&auto=format',
            link: 'events/atlanta.html',
            categoryLabel: 'CX Trends'
        },
        {
            id: 'zendesk-paloalto',
            title: 'Zendesk CX Trends 2026 – Palo Alto',
            date: '2026-03-17',
            dateDisplay: 'March 17, 2026 • 11:30am – 4:00pm',
            location: 'el Prado Hotel, Palo Alto, CA',
            category: 'cx-trends',
            region: 'california',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&auto=format',
            link: 'events/paloalto.html',
            categoryLabel: 'CX Trends'
        },
        {
            id: 'opentext-nyc',
            title: 'Know Thy Data: Data Security Posture Management (DSPM) in the Age of AI',
            date: '2026-03-11',
            dateDisplay: 'March 11, 2026 • 11:30am – 3:00pm',
            location: 'The Fifth Avenue Hotel, New York City',
            category: 'data',
            region: 'new-york',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop&auto=format',
            link: 'events/newyork.html',
            categoryLabel: 'Data Summit'
        },
        {
            id: 'cheers-austin',
            title: 'Cheers & Clusters Austin: Survivability & Single Malts',
            date: '2026-03-10',
            dateDisplay: 'March 10, 2026 • 5:00 – 8:00 PM',
            location: 'Seven Grand, Austin, TX',
            category: 'evening',
            region: 'texas',
            image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&h=400&fit=crop&auto=format',
            link: 'events/Ch&C-Austin.html',
            categoryLabel: 'Evening Event'
        },
        {
            id: 'myriad360-austin',
            title: '2026 Myriad360 Innovation Summit Series – Austin, TX',
            date: '2026-03-05',
            dateDisplay: 'March 5, 2026',
            location: 'Downtown Austin, TX',
            category: 'summit',
            region: 'texas',
            image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&h=400&fit=crop&auto=format',
            link: 'events/Austin.html',
            categoryLabel: 'Summit',
            inviteOnly: true
        }
    ];

    // Ndaj eventet në upcoming dhe past bazuar në datë
    const upcoming = [];
    const autoPast = [];

    upcomingEventsList.forEach(event => {
        if (isEventPast(event.date)) {
            // Nëse data ka kaluar, shtoje në past me kategorinë e duhur
            autoPast.push({
                ...event,
                category: 'past',
                categoryLabel: 'Past ' + (event.categoryLabel || 'Event')
            });
        } else {
            upcoming.push(event);
        }
    });

    // Kombino eventet manuale past me ato automatike
    const past = [...manualPastEvents, ...autoPast];

    return { upcoming, past };
}

// Ruaj të dhënat në localStorage që të jenë të qasshme nga faqet e tjera
const { upcoming, past } = getAllEvents();
localStorage.setItem('upcomingEvents', JSON.stringify(upcoming));
localStorage.setItem('pastEvents', JSON.stringify(past));
