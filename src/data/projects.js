import aqroOnboarding from '../assets/images/aqro/aqro-onboarding.png';
import aqroCustomerHomescreen from '../assets/images/aqro/aqro-customer-homescreen.png';
import aqroScan from '../assets/images/aqro/aqro-scan.png';
import aqroAdminDashboard from '../assets/images/aqro/aqro-admin-dashboard-statistics.png';
import aqroThumbnail from '../assets/images/aqro/aqro-thumbnail.JPG';

import aqroadThumbnail from '../assets/images/aqroad/aqroad-thumbnail.JPG';
import aqroadDetection from '../assets/images/aqroad/aqroad-detection.JPG';
import aqroadSignsList from '../assets/images/aqroad/aqroad-signs-list.JPG';

import hallpassThumbnail from '../assets/images/HallPass/hallpass-thumbnail.png';
import hallpassLanding from '../assets/images/HallPass/landing.png';
import hallpassLogin from '../assets/images/HallPass/login.png';
import hallpassSignUp from '../assets/images/HallPass/sign-up.png';
import hallpassMainPage from '../assets/images/HallPass/main-page.png';
import hallpassMapPage from '../assets/images/HallPass/map-page.png';
import hallpassProfilePage from '../assets/images/HallPass/profile-page.png';

import roombaThumbnail from '../assets/images/HallPass/roomba/roomba-thumbnail.png';
import roombaMain from '../assets/images/HallPass/roomba/main.png';
import roombaBoardingHouseDetails from '../assets/images/HallPass/roomba/boarding-house-details.png';
import roombaFilters from '../assets/images/HallPass/roomba/filters.png';

import dictionaryThumbnail from '../assets/images/dictionary/dictionary-thumbnail.png';
import dictionaryMain from '../assets/images/dictionary/main-dictionary.png';
import dictionaryResult from '../assets/images/dictionary/result.png';

const projects = [
  {
    slug: 'aqro-mobile-app',
    title:
      'aQRo Mobile App: QR-Coded Reusable Food and Beverage Containers for the Circular Economy',
    description:
      'Mobile app for intelligent container tracking using QR codes to support a circular economy.',
    longDescription:
      'Main programmer for aQRo. Built the full-stack mobile experience and led backend logic for intelligent container tracking.',
    role: 'Full-Stack Developer',
    tech: ['MongoDB', 'Express.js', 'React Native', 'Node.js'],
    year: '2025',
    thumbnail: aqroThumbnail,
    images: [
      {
        src: aqroOnboarding,
        label: 'Onboarding',
      },
      {
        src: aqroCustomerHomescreen,
        label: 'Customer Home Screen',
      },
      {
        src: aqroScan,
        label: 'QR Scan',
      },
      {
        src: aqroAdminDashboard,
        label: 'Admin Dashboard Statistics',
      },
    ],
    highlights: [
      'Led backend logic for intelligent container tracking',
      'Implemented end-to-end flows for QR-based actions',
      'Built a mobile-first UI with clear states and feedback',
    ],
  },
  {
    slug: 'aqroad-ai-road-sign-detection',
    title: 'AQROAD: AI Road Signs Detection App',
    description:
      'Real-time road sign detection using YOLOv8 trained on the GTSRB dataset.',
    longDescription:
      'Developed a real-time road sign detection application using YOLOv8 trained on the GTSRB dataset and implemented Python-based image processing for accurate detection.',
    role: 'Full-Stack Developer',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'GTSRB'],
    year: '2024',
    thumbnail: aqroadThumbnail,
    images: [
      {
        src: aqroadDetection,
        label: 'Camera Detection',
      },
      {
        src: aqroadSignsList,
        label: 'Signs List',
      },
    ],
    highlights: [
      'Trained YOLOv8 on the GTSRB dataset',
      'Implemented image processing for improved accuracy',
      'Built real-time detection workflow',
    ],
  },
  {
    slug: 'hallpass-campus-navigation',
    title:
      'HallPass: Campus Navigational System for Cagayan State University – Carig Campus',
    description:
      'Mobile navigation app with real-time campus mapping and routing.',
    longDescription:
      'Lead developer for a mobile app built with Ionic Angular and Firebase for real-time navigation across the CSU–Carig campus. Integrated Leaflet Maps and Geolocation API for accurate mapping.',
    role: 'Full-Stack Developer',
    tech: ['Ionic', 'Angular', 'Firebase', 'Leaflet', 'Geolocation API'],
    year: '2024',
    thumbnail: hallpassThumbnail,
    images: [
      {
        src: hallpassLanding,
        label: 'Landing',
      },
      {
        src: hallpassLogin,
        label: 'Login',
      },
      {
        src: hallpassSignUp,
        label: 'Sign Up',
      },
      {
        src: hallpassMainPage,
        label: 'Main Page',
      },
      {
        src: hallpassMapPage,
        label: 'Map Page',
      },
      {
        src: hallpassProfilePage,
        label: 'Profile Page',
      },
    ],
    highlights: [
      'Integrated Leaflet Maps + Geolocation API',
      'Implemented real-time navigation across campus',
      'Built scalable mobile UI with Firebase integration',
    ],
  },
  {
    slug: 'dictionary-app-java',
    title: 'Dictionary App',
    description:
      'Dictionary application built with Java OOP in NetBeans with data retrieval and UI integration.',
    longDescription:
      'Built a dictionary application using Java OOP in NetBeans, handling data retrieval and UI integration.',
    role: 'Full-Stack Developer',
    tech: ['Java', 'OOP', 'NetBeans'],
    year: '2022',
    thumbnail: dictionaryThumbnail,
    images: [
      {
        src: dictionaryMain,
        label: 'Main Dictionary',
      },
      {
        src: dictionaryResult,
        label: 'Search Results',
      },
    ],
    highlights: [
      'Designed OOP structure for maintainable features',
      'Implemented data retrieval and UI integration',
      'Built clean search and results experience',
    ],
  },
  {
    slug: 'roomba-boarding-house-finder',
    title: 'RoomBa: Boarding House Finder Mobile App',
    description: 'UI/UX prototypes for a mobile app to find boarding houses.',
    longDescription:
      'Designed intuitive and user-friendly interface prototypes using Adobe XD and Photoshop.',
    role: 'UI/UX Developer',
    tech: ['Adobe XD', 'Photoshop', 'UI/UX'],
    year: '2022',
    thumbnail: roombaThumbnail,
    images: [
      {
        src: roombaMain,
        label: 'UI/UX Design with AdobeXD',
      },
      {
        src: roombaFilters,
        label: 'Filters',
      },
      {
        src: roombaBoardingHouseDetails,
        label: 'Boarding House Details',
      },
    ],
    highlights: [
      'Designed user-friendly mobile flows and screens',
      'Created consistent UI patterns and components',
      'Produced high-fidelity prototypes for handoff',
    ],
  },
];

export default projects;

