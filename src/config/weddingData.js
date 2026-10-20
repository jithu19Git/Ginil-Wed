/**
 * Wedding Configuration & Content Data
 * 
 * Modular configuration file for Ginil & Ammu's Wedding Website.
 * Update dates, venues, photos, and story milestones here without touching UI components.
 */

export const weddingData = {
  couple: {
    groom: {
      name: "Ginil",
      fullName: "Ginil Mathew",
      role: "The Groom",
      description: "Software architect, coffee enthusiast, and the one whose warm smile and boundless kindness lit up Ammu's world from day one.",
      instagram: "#",
    },
    bride: {
      name: "Ammu",
      fullName: "Ammu Elizabeth",
      role: "The Bride",
      description: "Creative soul, passionate baker, and the heartbeat that turned every ordinary day into an enchanting fairytale.",
      instagram: "#",
    },
    hashtag: "#GinilWedsAmmu",
    weddingDate: "2026-11-05T11:30:00+05:30", // ISO date string for live countdown (November 5, 2026, 11:30 AM)
    displayDate: "Thursday, November 5, 2026",
    location: "Udumbannoor, Kerala, India",
    tagline: "Together with our families, we joyfully invite you to celebrate our union.",
    heroImage: "/images/ginil-ammu-engagement-portrait.jpg",
    heroImages: [
      "/images/ginil-ammu-engagement-portrait.jpg",
      "/images/ginil-ammu-dance.jpg",
      "/images/ginil-ammu-engagement-stage.jpg",
      "/images/ginil-ammu-scooter.jpg",
      "/images/ginil-ammu-engagement-caress.jpg",
      "/images/ginil-ammu-traditional-embrace.jpg",
      "/images/ginil-ammu-engagement-gaze.jpg",
      "/images/ginil-ammu-portrait.jpg",
      "/images/ginil-ammu-traditional-sitting.jpg",
    ],
    portraitImage: "/images/ginil-ammu-engagement-portrait.jpg",
  },

  events: [

    {
      id: "wedding-ceremony",
      title: "The Holy Matrimony",
      subtitle: "Sacred Vows & Traditional Blessing",
      date: "Thursday, November 5, 2026",
      time: "11:30 AM onwards",
      venue: "St. Sebastian's Syro Malabar Church",
      address: "Mankuzhy, Udumbannoor, Kerala",
      attire: "Traditional Kerala Attire / Elegant Formals",
      description: "Join us as we exchange sacred vows, seek the blessings of our elders and Almighty, and begin our lifelong journey as one.",
      googleCalendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ginil+%26+Ammu+-+Holy+Matrimony&dates=20261105T060000Z/20261105T080000Z&details=Holy+Matrimony+of+Ginil+and+Ammu&location=St.+Sebastian%27s+Syro+Malabar+Church%2C+Mankuzhy%2C+Udumbannoor",
      mapUrl: "https://maps.app.goo.gl/Zf2kJCF7ZhmtrXwG8",
      icon: "ring",
      highlight: true,
    },

  ],

  story: [
    {
      year: "May 31, 2026",
      title: "Marriage Fixation",
      description: "With the loving blessings of our parents and families, our union was officially fixed, marking the auspicious beginning of our wedding journey.",
    },
    {
      year: "October 18, 2026",
      title: "The Official Engagement",
      description: "Surrounded by our dearest families beneath our golden 'A & G' blessing, we exchanged rings and joyfully sealed our promise to forever.",
      image: "/images/ginil-ammu-engagement-stage.jpg",
    },
    {
      year: "November 5, 2026",
      title: "The Holy Matrimony",
      description: "Hand in hand at St. Sebastian's Syro Malabar Church, surrounded by our beloved family and friends, we begin our eternal chapter as one.",
    },
  ],

  /**
   * Photo Gallery Configuration
   * Showcasing the couple's genuine moments, engagement celebrations, and wedding memories
   */
  gallery: [
    {
      id: 1,
      src: "/images/ginil-ammu-engagement-portrait.jpg",
      title: "The Engagement Promise",
      category: "engagement",
      caption: "With joyful smiles and the blessings of both our families, we sealed our promise to walk together forever.",
      focalPoint: "object-center",
    },
    {
      id: 2,
      src: "/images/ginil-ammu-engagement-stage.jpg",
      title: "A & G - Our Golden Milestone",
      category: "engagement",
      caption: "Sitting beneath our initials 'A & G' on the grand stage, filled with excitement and happiness.",
      focalPoint: "object-center",
    },
    {
      id: 3,
      src: "/images/ginil-ammu-engagement-caress.jpg",
      title: "A Gentle Whisper of Love",
      category: "engagement",
      caption: "A tender, unscripted moment amidst the congratulations and laughter of our loved ones.",
      focalPoint: "object-center",
    },
    {
      id: 4,
      src: "/images/ginil-ammu-engagement-gaze.jpg",
      title: "Eyes Full Of Tomorrow",
      category: "engagement",
      caption: "Holding on to each other, knowing with certainty that our lives have officially intertwined.",
      focalPoint: "object-center",
    },
    {
      id: 5,
      src: "/images/ginil-ammu-portrait.jpg",
      title: "The Look Of Love",
      category: "couple",
      caption: "In your eyes, I found my home, my laughter, and my forever promise.",
      focalPoint: "object-[center_20%]",
    },
    {
      id: 6,
      src: "/images/ginil-ammu-dance.jpg",
      title: "Dance Under The Sun",
      category: "couple",
      caption: "A joyful twirl amidst sunlit gardens and blooming bougainvillea.",
      focalPoint: "object-[center_20%]",
    },
    {
      id: 7,
      src: "/images/ginil-ammu-scooter.jpg",
      title: "Riding Into Forever",
      category: "couple",
      caption: "Playful laughter, vintage charm, and side-by-side on life's sweetest adventure.",
      focalPoint: "object-[center_20%]",
    },
    {
      id: 8,
      src: "/images/ginil-ammu-traditional-embrace.jpg",
      title: "Heritage & Timeless Bond",
      category: "traditional",
      caption: "Adorned in classic Kerala elegance beneath blessed marigold garlands in the ancestral courtyard.",
      focalPoint: "object-[center_20%]",
    },
    {
      id: 9,
      src: "/images/ginil-ammu-traditional-sitting.jpg",
      title: "Quiet Smiles on the Verandah",
      category: "traditional",
      caption: "Serene moments steeped in tradition, warm glances, and elder blessings.",
      focalPoint: "object-[center_20%]",
    },
  ],

  galleryCategories: [
    { key: "all", label: "All Moments" },
    { key: "engagement", label: "The Engagement" },
    { key: "couple", label: "Pre-Wedding & Outdoor" },
    { key: "traditional", label: "Heritage & Traditional" },
  ],

  contact: {
    rsvpEmail: "celebrate@ginilammu.love",
    phone: "+91 98470 12345",
    familyMessage: "With love and warmest regards from Mathew & Kurian Families",
  },
}
