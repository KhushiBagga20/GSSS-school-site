export interface SchoolInfo {
  name: string;
  fullName: string;
  established: number;
  udiseCode: string;
  location: {
    village: string;
    block: string;
    district: string;
    state: string;
    pinCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    officeHours: string;
  };
  academics: {
    classesFrom: number;
    classesTo: number;
    medium: string;
    board: string;
    type: string;
  };
  staff: {
    total: number;
    male: number;
    female: number;
    headTeacher: string;
  };
  infrastructure: {
    classrooms: number;
    libraryBooks: number;
    hasPlayground: boolean;
    hasLibrary: boolean;
    hasElectricity: boolean;
    drinkingWater: string;
    boysToilets: number;
    girlsToilets: number;
  };
  management: string;
  motto: string;
  mottoHi: string;
}

export interface Leader {
  name: string;
  designation: string;
  designationHi: string;
  message: string;
  messageHi: string;
  imageSrc: string | null;
}

export interface QuickStat {
  id: string;
  icon: string;
  labelKey: string;
  value: string;
  subValue?: string;
}

export interface Highlight {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  altKey: string;
  span?: 'normal' | 'wide' | 'tall';
  eventId?: string;
}

export interface GalleryEvent {
  id: string;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  location: string;
  geoTag: string;
  imageSrc: string;
}

export interface StaffMember {
  id: string;
  name: string;
  nameHi: string;
  designation: string;
  designationHi: string;
  subject?: string;
  subjectHi?: string;
  imageSrc: string | null;
}

export interface VisionValue {
  id: string;
  number: string;
  titleKey: string;
  descriptionKey: string;
}

export interface Amenity {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
  category: 'benefits' | 'facilities';
  value: string;
  valueHi: string;
}

export interface NavItem {
  labelKey: string;
  href: string;
}

export type Language = 'en' | 'hi';
