import type { SchoolInfo, Leader, QuickStat, Highlight, GalleryEvent, StaffMember, VisionValue, Amenity } from '@/types';

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
  imageSrc: '/images/principal.jpg',
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

// ─── New Data ──────────────────────────────────────────────

export const visionValues: VisionValue[] = [
  {
    id: 'excellence',
    number: '01',
    titleKey: 'vision.values.excellence.title',
    descriptionKey: 'vision.values.excellence.desc',
  },
  {
    id: 'character',
    number: '02',
    titleKey: 'vision.values.character.title',
    descriptionKey: 'vision.values.character.desc',
  },
  {
    id: 'community',
    number: '03',
    titleKey: 'vision.values.community.title',
    descriptionKey: 'vision.values.community.desc',
  },
  {
    id: 'heritage',
    number: '04',
    titleKey: 'vision.values.heritage.title',
    descriptionKey: 'vision.values.heritage.desc',
  },
];

export const galleryEvents: GalleryEvent[] = [
  {
    id: 'ev1',
    titleKey: 'gallery.events.assembly.title',
    dateKey: 'gallery.events.assembly.date',
    descriptionKey: 'gallery.events.assembly.desc',
    location: 'School Courtyard',
    geoTag: '📍 Trilokpur, Sirmaur',
    imageSrc: '/images/gallery/assembly.png',
  },
  {
    id: 'ev2',
    titleKey: 'gallery.events.sports.title',
    dateKey: 'gallery.events.sports.date',
    descriptionKey: 'gallery.events.sports.desc',
    location: 'School Playground',
    geoTag: '📍 Trilokpur, Sirmaur',
    imageSrc: '/images/gallery/sports.png',
  },
  {
    id: 'ev3',
    titleKey: 'gallery.events.cultural.title',
    dateKey: 'gallery.events.cultural.date',
    descriptionKey: 'gallery.events.cultural.desc',
    location: 'School Hall',
    geoTag: '📍 Trilokpur, Sirmaur',
    imageSrc: '/images/gallery/cultural.png',
  },
  {
    id: 'ev4',
    titleKey: 'gallery.events.classroom.title',
    dateKey: 'gallery.events.classroom.date',
    descriptionKey: 'gallery.events.classroom.desc',
    location: 'Classroom Block',
    geoTag: '📍 Trilokpur, Sirmaur',
    imageSrc: '/images/gallery/classroom.png',
  },
  {
    id: 'ev5',
    titleKey: 'gallery.events.library.title',
    dateKey: 'gallery.events.library.date',
    descriptionKey: 'gallery.events.library.desc',
    location: 'School Library',
    geoTag: '📍 Trilokpur, Sirmaur',
    imageSrc: '/images/gallery/library.png',
  },
  {
    id: 'ev6',
    titleKey: 'gallery.events.republic.title',
    dateKey: 'gallery.events.republic.date',
    descriptionKey: 'gallery.events.republic.desc',
    location: 'School Courtyard',
    geoTag: '📍 Trilokpur, Sirmaur',
    imageSrc: '/images/gallery/republic-day.png',
  },
];

export const staffMembers: StaffMember[] = [
  {
    id: 's1',
    name: 'Priya Bagga',
    nameHi: 'प्रिया बग्गा',
    designation: 'Principal',
    designationHi: 'प्रधानाचार्य',
    imageSrc: '/images/principal.jpg',
  },
  {
    id: 's2',
    name: 'K.S. Rana',
    nameHi: 'के.एस. राणा',
    designation: 'Head Teacher',
    designationHi: 'मुख्य अध्यापक',
    subject: 'Mathematics',
    subjectHi: 'गणित',
    imageSrc: null,
  },
  {
    id: 's3',
    name: 'Sunita Sharma',
    nameHi: 'सुनीता शर्मा',
    designation: 'Senior Teacher',
    designationHi: 'वरिष्ठ अध्यापक',
    subject: 'Hindi',
    subjectHi: 'हिंदी',
    imageSrc: null,
  },
  {
    id: 's4',
    name: 'Rajesh Kumar',
    nameHi: 'राजेश कुमार',
    designation: 'Teacher',
    designationHi: 'अध्यापक',
    subject: 'Science',
    subjectHi: 'विज्ञान',
    imageSrc: null,
  },
  {
    id: 's5',
    name: 'Meena Devi',
    nameHi: 'मीना देवी',
    designation: 'Teacher',
    designationHi: 'अध्यापक',
    subject: 'English',
    subjectHi: 'अंग्रेज़ी',
    imageSrc: null,
  },
  {
    id: 's6',
    name: 'Vikram Thakur',
    nameHi: 'विक्रम ठाकुर',
    designation: 'Teacher',
    designationHi: 'अध्यापक',
    subject: 'Social Studies',
    subjectHi: 'सामाजिक विज्ञान',
    imageSrc: null,
  },
];

export const amenities: Amenity[] = [
  {
    id: 'library',
    icon: '📚',
    titleKey: 'amenities.library.title',
    value: '1,498 Books',
    valueHi: '1,498 पुस्तकें',
  },
  {
    id: 'playground',
    icon: '🏟️',
    titleKey: 'amenities.playground.title',
    value: 'Dedicated Sports Ground',
    valueHi: 'समर्पित खेल मैदान',
  },
  {
    id: 'classrooms',
    icon: '🏫',
    titleKey: 'amenities.classrooms.title',
    value: '3 Classrooms',
    valueHi: '3 कक्षाएं',
  },
  {
    id: 'electricity',
    icon: '⚡',
    titleKey: 'amenities.electricity.title',
    value: 'Fully Electrified',
    valueHi: 'पूर्ण विद्युतीकृत',
  },
  {
    id: 'water',
    icon: '💧',
    titleKey: 'amenities.water.title',
    value: 'Clean Tap Water',
    valueHi: 'स्वच्छ नल जल',
  },
  {
    id: 'sanitation',
    icon: '🚻',
    titleKey: 'amenities.sanitation.title',
    value: 'Separate Facilities',
    valueHi: 'अलग सुविधाएं',
  },
];
