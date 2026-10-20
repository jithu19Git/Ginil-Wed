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
      profession: "Software Engineer",
      description: "Software Engineer with a thoughtful mind, calm strength, and a caring heart, whose warm smile and steadfast devotion lit up Ammu's world from day one.",
      instagram: "#",
    },
    bride: {
      name: "Ammu",
      fullName: "Ammu Elizabeth",
      role: "The Bride",
      profession: "Digital Marketer & Fashion Designer",
      description: "Digital Marketer and Fashion Designer with a vibrant artistic soul, an eye for elegance, and the radiant laughter that turned every ordinary day into an enchanting fairytale.",
      instagram: "#",
    },
    hashtag: "#GinilWedsAmmu",
    weddingDate: "2026-11-05T11:30:00+05:30", // ISO date string for live countdown (November 5, 2026, 11:30 AM)
    displayDate: "Thursday, November 5, 2026",
    location: "Udumbannoor, Kerala, India",
    tagline: "Together with our families, we joyfully invite you to celebrate our union.",
    heroImage: "/images/ginil-ammu-matrimony-steps.jpg",
    heroImages: [
      "/images/ginil-ammu-matrimony-steps.jpg",
      "/images/ginil-ammu-boat-splash.jpg",
      "/images/ginil-ammu-engagement-portrait.jpg",
      "/images/ginil-ammu-courtyard-pillar.jpg",
      "/images/ginil-ammu-dance.jpg",
      "/images/ginil-ammu-window-bench.jpg",
      "/images/ginil-ammu-scooter.jpg",
      "/images/ginil-ammu-anklet-moment.jpg",
      "/images/ginil-ammu-bougainvillea-smile.jpg",
      "/images/ginil-ammu-jasmine-play.jpg",
      "/images/ginil-ammu-arch-walk.jpg",
      "/images/ginil-ammu-boat-cruise.jpg",
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
      image: "/images/ginil-ammu-matrimony-steps.jpg",
    },
  ],

  /**
   * Photo Gallery Configuration
   * Showcasing the couple's genuine moments, engagement celebrations, and wedding memories
   */
  gallery: [
    {
      id: 1,
      src: "/images/ginil-ammu-matrimony-steps.jpg",
      title: "Steps To Forever",
      category: "couple",
      caption: "Sitting together with hands gently entwined, looking ahead to a lifetime of shared dreams and unconditional love.",
      focalPoint: "object-center",
    },
    {
      id: 2,
      src: "/images/ginil-ammu-boat-splash.jpg",
      title: "Splashes Of Joy",
      category: "traditional",
      caption: "Drifting along Kerala's tranquil backwaters in a traditional canoe, sharing laughter and spontaneous water splashes.",
      focalPoint: "object-center",
    },
    {
      id: 3,
      src: "/images/ginil-ammu-boat-cruise.jpg",
      title: "Serenade On The Water",
      category: "traditional",
      caption: "Surrounded by lush green palms, finding calm and quiet harmony in each other's presence.",
      focalPoint: "object-center",
    },
    {
      id: 4,
      src: "/images/ginil-ammu-anklet-moment.jpg",
      title: "The Sacred Kolusu",
      category: "traditional",
      caption: "A timeless, tender gesture steeped in Kerala culture and romance.",
      focalPoint: "object-center",
    },
    {
      id: 5,
      src: "/images/ginil-ammu-jasmine-play.jpg",
      title: "Fragrance Of Mulla Poovu",
      category: "traditional",
      caption: "Playful laughter and fresh jasmine blossoms in the traditional ancestral courtyard.",
      focalPoint: "object-center",
    },
    {
      id: 6,
      src: "/images/ginil-ammu-courtyard-pillar.jpg",
      title: "Ancestral Heritage",
      category: "traditional",
      caption: "Adorned in classic Kerala mundu and saree, blessed by heritage, traditions, and family roots.",
      focalPoint: "object-center",
    },
    {
      id: 7,
      src: "/images/ginil-ammu-saree-twirl.jpg",
      title: "Graceful Rhythm",
      category: "traditional",
      caption: "A graceful twirl in festive handloom, reflecting pure happiness and excitement.",
      focalPoint: "object-center",
    },
    {
      id: 8,
      src: "/images/ginil-ammu-window-bench.jpg",
      title: "Sunlit Window Whispers",
      category: "couple",
      caption: "Perched together on the sunlit white window sill, lost in warm conversations and tender smiles.",
      focalPoint: "object-center",
    },
    {
      id: 9,
      src: "/images/ginil-ammu-arch-walk.jpg",
      title: "Walking Hand In Hand",
      category: "couple",
      caption: "Strolling through the garden archway, stepping side by side into a joyful new chapter.",
      focalPoint: "object-center",
    },
    {
      id: 10,
      src: "/images/ginil-ammu-bougainvillea-smile.jpg",
      title: "Blossoming Romance",
      category: "couple",
      caption: "Warm embraces under blooming vibrant bougainvillea flowers.",
      focalPoint: "object-center",
    },
    {
      id: 11,
      src: "/images/ginil-ammu-forehead-touch.jpg",
      title: "Soulmate Connection",
      category: "couple",
      caption: "A quiet, heartfelt embrace where words are gently replaced by shared affection.",
      focalPoint: "object-center",
    },
    {
      id: 12,
      src: "/images/ginil-ammu-scooter.jpg",
      title: "Vintage Vespa Ride",
      category: "couple",
      caption: "Playful retro charm, bright yellow scooter, and laughter along life's sweetest route.",
      focalPoint: "object-center",
    },
    {
      id: 13,
      src: "/images/ginil-ammu-dance.jpg",
      title: "Dance Under The Sun",
      category: "couple",
      caption: "A celebratory twirl beneath clear skies, celebrating our friendship and eternal bond.",
      focalPoint: "object-center",
    },
    {
      id: 14,
      src: "/images/ginil-ammu-engagement-portrait.jpg",
      title: "The Engagement Promise",
      category: "engagement",
      caption: "With joyful smiles and the blessings of both our families, we sealed our promise to walk together forever.",
      focalPoint: "object-center",
    },
    {
      id: 15,
      src: "/images/ginil-ammu-engagement-stage.jpg",
      title: "A & G - Our Golden Milestone",
      category: "engagement",
      caption: "Sitting beneath our initials 'A & G' on the grand stage, filled with excitement and happiness.",
      focalPoint: "object-center",
    },
    {
      id: 16,
      src: "/images/ginil-ammu-engagement-caress.jpg",
      title: "A Gentle Whisper of Love",
      category: "engagement",
      caption: "A tender, unscripted moment amidst the congratulations and laughter of our loved ones.",
      focalPoint: "object-center",
    },
    {
      id: 17,
      src: "/images/ginil-ammu-engagement-gaze.jpg",
      title: "Eyes Full Of Tomorrow",
      category: "engagement",
      caption: "Holding on to each other, knowing with certainty that our lives have officially intertwined.",
      focalPoint: "object-center",
    },
  ],

  galleryCategories: [
    { key: "all", label: "All Moments" },
    { key: "couple", label: "Pre-Wedding & Outdoor" },
    { key: "traditional", label: "Kerala Heritage & Canoe" },
    { key: "engagement", label: "The Engagement" },
  ],

  contact: {
    rsvpEmail: "celebrate@ginilammu.love",
    phone: "+91 98470 12345",
    familyMessage: "With love and warmest regards from Mathew & Kurian Families",
  },
}
