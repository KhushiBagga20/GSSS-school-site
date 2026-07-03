import type { SchoolInfo, Leader, QuickStat, Highlight, GalleryImage } from '@/types';

export const schoolInfo: SchoolInfo = {
  name: 'GSSS Trilokpur',
  fullName: 'Government Senior Secondary School, Trilokpur',
  established: 1958,
  udiseCode: '02101003204',
  location: {
    village: 'Trilokpur',
    block: 'Surla',
    district: 'Sirmaur',
    state: 'Himachal Pradesh',
    pinCode: '173030',
    country: 'India',
  },
  contact: {
    phone: '+91 XXXXX-XXXXX', // [PLACEHOLDER] Replace with actual phone number
    email: 'gsss.trilokpur@gmail.com',
    officeHours: 'Mon – Sat: 9:00 AM – 4:00 PM', // [PLACEHOLDER] Verify actual hours
  },
  academics: {
    classesFrom: 6,
    classesTo: 12,
    medium: 'Hindi',
    board: 'HP State Board',
    type: 'Co-educational',
  },
  staff: {
    total: 21,
    male: 9,
    female: 12,
    headTeacher: 'K.S. Rana',
  },
  infrastructure: {
    classrooms: 3,
    libraryBooks: 1498,
    hasPlayground: true,
    hasLibrary: true,
    hasElectricity: true,
    drinkingWater: 'Tap Water',
    boysToilets: 2,
    girlsToilets: 2,
  },
  management: 'Department of Education, Himachal Pradesh',
  motto: 'Knowledge, Character, Service',
  mottoHi: 'ज्ञान, चरित्र, सेवा', // [PLACEHOLDER] Replace with official motto if available
};

export const principal: Leader = {
  name: 'Priya Bagga',
  designation: 'Principal',
  designationHi: 'प्रधानाचार्य',
  // [PLACEHOLDER] Replace with actual message from Principal Priya Bagga
  message: `It is my privilege to welcome you to the official website of Government Senior Secondary School, Trilokpur. Since our establishment in 1958, this institution has stood as a beacon of learning in the Surla region of Sirmaur district. Our dedicated team of 21 teachers is committed to nurturing every student — academically, morally, and culturally. We believe that education is not merely the transfer of knowledge, but the shaping of character and the kindling of curiosity. I invite parents, students, and the community to walk this journey of learning and growth with us.`,
  // [PLACEHOLDER] Replace with actual Hindi message
  messageHi: `सरकारी वरिष्ठ माध्यमिक विद्यालय, त्रिलोकपुर की आधिकारिक वेबसाइट पर आपका स्वागत है। वर्ष 1958 से यह संस्था सिरमौर जिले के सुरला क्षेत्र में शिक्षा का केंद्र रही है। हमारे 21 समर्पित शिक्षक विद्यार्थियों के सर्वांगीण विकास के लिए प्रतिबद्ध हैं। मेरा विश्वास है कि शिक्षा केवल ज्ञान का हस्तांतरण नहीं है, बल्कि यह चरित्र निर्माण और जिज्ञासा की ज्योति जलाने का माध्यम है।`,
  imageSrc: null, // [PLACEHOLDER] Replace with actual principal photo path
};

export const quickStats: QuickStat[] = [
  {
    id: 'established',
    icon: '🏛️',
    labelKey: 'stats.established',
    value: '1958',
    subValue: '65+ years of excellence',
  },
  {
    id: 'teachers',
    icon: '👨‍🏫',
    labelKey: 'stats.teachers',
    value: '21',
    subValue: '9 Male · 12 Female',
  },
  {
    id: 'classes',
    icon: '📚',
    labelKey: 'stats.classes',
    value: 'VI – XII',
    subValue: 'Co-educational',
  },
  {
    id: 'location',
    icon: '📍',
    labelKey: 'stats.location',
    value: 'Trilokpur',
    subValue: 'Sirmaur, Himachal Pradesh',
  },
];

export const highlights: Highlight[] = [
  {
    id: 'academic',
    icon: '🎓',
    titleKey: 'highlights.academic.title',
    descriptionKey: 'highlights.academic.desc',
  },
  {
    id: 'sports',
    icon: '⚽',
    titleKey: 'highlights.sports.title',
    descriptionKey: 'highlights.sports.desc',
  },
  {
    id: 'cultural',
    icon: '🎭',
    titleKey: 'highlights.cultural.title',
    descriptionKey: 'highlights.cultural.desc',
  },
  {
    id: 'community',
    icon: '🤝',
    titleKey: 'highlights.community.title',
    descriptionKey: 'highlights.community.desc',
  },
];

export const galleryImages: GalleryImage[] = [
  // [PLACEHOLDER] Replace src values with real school images
  { id: 'g1', src: '/images/gallery/placeholder-1.svg', altKey: 'gallery.img1', span: 'wide' },
  { id: 'g2', src: '/images/gallery/placeholder-2.svg', altKey: 'gallery.img2' },
  { id: 'g3', src: '/images/gallery/placeholder-3.svg', altKey: 'gallery.img3' },
  { id: 'g4', src: '/images/gallery/placeholder-4.svg', altKey: 'gallery.img4', span: 'tall' },
  { id: 'g5', src: '/images/gallery/placeholder-5.svg', altKey: 'gallery.img5' },
  { id: 'g6', src: '/images/gallery/placeholder-6.svg', altKey: 'gallery.img6' },
];
