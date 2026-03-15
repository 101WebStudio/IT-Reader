// js/event-data.js
// Të gjitha eventet e ITreader - PAST dhe UPCOMING

const allEvents = [
    // ========== PAST EVENTS (Manual) ==========
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
    },
    {
        id: 'myriad360-austin',
        title: '2026 Myriad360 Innovation Summit Series – Austin, TX',
        date: '2026-03-05',
        dateDisplay: 'March 5, 2026',
        location: 'Downtown Austin, TX',
        category: 'past',
        region: 'texas',
        image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&h=400&fit=crop&auto=format',
        link: 'events/Austin.html',
        categoryLabel: 'Past Event',
        inviteOnly: true,
        isManualPast: true
    },
    {
        id: 'cheers-austin',
        title: 'Cheers & Clusters Austin: Survivability & Single Malts',
        date: '2026-03-10',
        dateDisplay: 'March 10, 2026 • 5:00 – 8:00 PM',
        location: 'Seven Grand, Austin, TX',
        category: 'past',
        region: 'texas',
        image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&h=400&fit=crop&auto=format',
        link: 'events/Ch%26C-Austin.html',
        categoryLabel: 'Past Event',
        isManualPast: true
    },
    {
        id: 'opentext-nyc',
        title: 'Know Thy Data: Data Security Posture Management (DSPM) in the Age of AI',
        date: '2026-03-11',
        dateDisplay: 'March 11, 2026 • 11:30am – 3:00pm',
        location: 'The Fifth Avenue Hotel, New York City',
        category: 'past',
        region: 'new-york',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop&auto=format',
        link: 'events/newyork.html',
        categoryLabel: 'Past Event',
        isManualPast: true
    },

    // ========== UPCOMING EVENTS ==========
    // Renditur nga data më e hershme tek më e vona
    {
        id: 'zendesk-paloalto',
        title: 'Zendesk CX Trends 2026 – Palo Alto',
        date: '2026-03-17',
        dateDisplay: 'March 17, 2026 • 11:30am – 4:00pm',
        location: 'el Prado Hotel, Palo Alto, CA',
        category: 'cx-trends',
        region: 'california',
        image: 'images/paloalto.png',
        link: 'events/paloalto.html',
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
        image: 'images/atlanta.png',
        link: 'events/atlanta.html',
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
        image: 'images/Los Angeles.png',
        link: 'events/La.html',
        categoryLabel: 'CX Trends'
    },
    {
        id: 'zendesk-boston',
        title: 'Zendesk CX Trends 2026 – Boston',
        date: '2026-03-24',
        dateDisplay: 'March 24, 2026 • 11:30am – 4:00pm',
        location: 'View Boston, Prudential Tower, Boston',
        category: 'cx-trends',
        region: 'massachusetts',
        image: 'images/boston.png',
        link: 'events/Boston.html',
        categoryLabel: 'CX Trends'
    },
    {
        id: 'native-rsac',
        title: 'Join Native and Artemis for Breakfast at RSAC',
        date: '2026-03-25',
        dateDisplay: 'March 25, 2026 • 8:30 – 10:30 AM',
        location: 'Pied Piper Room, Palace Hotel, San Francisco',
        category: 'breakfast',
        region: 'california',
        image: 'images/Palace Hotel, San Francisco.png',
        link: 'events/Native%20%C3%97%20Artemis%20RSAC%20Breakfast.html',
        categoryLabel: 'Breakfast',
        inviteOnly: true
    },
    {
        id: 'myriad360-chicago',
        title: 'Myriad360 Innovation Summit - Chicago',
        date: '2026-04-07',
        dateDisplay: 'April 7, 2026',
        location: 'Sepia, Chicago, IL',
        category: 'summit',
        region: 'illinois',
        image: 'images/chigago.png',
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
        image: 'images/mos.png',
        link: 'events/Cockroach-San%20Francisco.html',
        categoryLabel: 'Dinner',
        inviteOnly: true
    },
    {
        id: 'keepit-helsinki',
        title: 'Keepit Live Nordic Roadshow Helsinki',
        date: '2026-04-15',
        dateDisplay: 'April 15, 2026 • 15:00 – 18:30',
        location: 'NH Collection Helsinki Grand Hansa',
        category: 'live',
        region: 'europe',
        image: 'images/helsinki.png',
        link: 'events/Helsinki.html',
        categoryLabel: 'Live Event'
    },
    {
        id: 'keepit-oslo',
        title: 'Keepit Live Nordic Roadshow, Oslo',
        date: '2026-04-23',
        dateDisplay: 'April 23, 2026 • 15:00 – 18:30',
        location: 'The Thief, Oslo',
        category: 'live',
        region: 'europe',
        image: 'images/oslo.png',
        link: 'events/Oslo.html',
        categoryLabel: 'Live Event'
    },
    {
        id: 'keepit-manchester',
        title: 'Keepit Live Manchester',
        date: '2026-04-29',
        dateDisplay: 'April 29, 2026 • 16:00 – 20:00',
        location: '20 Stories, Manchester, UK',
        category: 'live',
        region: 'uk',
        image: 'images/Manchester.png',
        link: 'events/Manchester.html',
        categoryLabel: 'Live Event'
    }
];
