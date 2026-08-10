import aqroOnboarding from '../assets/images/aqro/aqro-onboarding.webp';
import aqroCustomerHomescreen from '../assets/images/aqro/aqro-customer-homescreen.webp';
import aqroScan from '../assets/images/aqro/aqro-scan.webp';
import aqroAdminDashboard from '../assets/images/aqro/aqro-admin-dashboard-statistics.webp';
import aqroThumbnail from '../assets/images/aqro/aqro-thumbnail.webp';
import aqroOnboardingVideo from '../assets/videos/aqro/aqro-onboarding.mp4';

import aqroadThumbnail from '../assets/images/aqroad/aqroad-thumbnail.webp';
import aqroadDetection from '../assets/images/aqroad/aqroad-detection.webp';
import aqroadSignsList from '../assets/images/aqroad/aqroad-signs-list.webp';

import hallpassThumbnail from '../assets/images/HallPass/hallpass-thumbnail.webp';
import hallpassLanding from '../assets/images/HallPass/landing.webp';
import hallpassLogin from '../assets/images/HallPass/login.webp';
import hallpassSignUp from '../assets/images/HallPass/sign-up.webp';
import hallpassMainPage from '../assets/images/HallPass/main-page.webp';
import hallpassMapPage from '../assets/images/HallPass/map-page.webp';
import hallpassProfilePage from '../assets/images/HallPass/profile-page.webp';

import roombaThumbnail from '../assets/images/HallPass/roomba/roomba-thumbnail.webp';
import roombaMain from '../assets/images/HallPass/roomba/main.webp';
import roombaBoardingHouseDetails from '../assets/images/HallPass/roomba/boarding-house-details.webp';
import roombaFilters from '../assets/images/HallPass/roomba/filters.webp';

import dictionaryThumbnail from '../assets/images/dictionary/dictionary-thumbnail.webp';
import dictionaryMain from '../assets/images/dictionary/main-dictionary.webp';
import dictionaryResult from '../assets/images/dictionary/result.webp';

import flowlaunchThumbnail from '../assets/images/FlowLaunch/flowlaunch.webp';
import nightwaveThumbnail from '../assets/images/NightWave/nightwave.webp';
import harborbookThumbnail from '../assets/images/HarborBook/harborbook.webp';
import freshplateThumbnail from '../assets/images/FreshPlate/thumbnaill.webp';
import coursecompassThumbnail from '../assets/images/CourseCompass/thumbnail.webp';
import emberThumbnail from '../assets/images/Ember/ember-thumbnail.webp';
import voyageThumbnail from '../assets/images/Voyage/voyage-thumbnail.webp';
import plantumThumbnail from '../assets/images/Plantum/plantum-thumbnail.webp';
import plantumDemo from '../assets/videos/plantum/plantum-demo.mp4';
import pulseThumbnail from '../assets/images/Pulse/pulse-thumbnail.webp';
import verduraThumbnail from '../assets/images/Verdura/Verdura-thumbnail.webp';

import sweldoThumbnail from '../assets/images/Sweldo/sweldo-thumbnail.webp';

const projects = [
  {
    slug: 'sweldo',
    title: 'Sweldo',
    description:
      'Clear pay for Philippine teams. A full-stack payroll management system that unifies employee records, timesheets, pay runs, statutory deductions, and payslips — so HR, managers, payroll admins, and employees work from one workspace instead of spreadsheets.',
    longDescription:
      'Sweldo is a full-stack payroll management system built for Philippine small and mid-sized teams. It brings employee records, timesheets, pay calculation, approvals, and payslips into one workspace — so HR, managers, payroll admins, and employees each get the tools they need without juggling spreadsheets.',
    role: 'Full-Stack Developer',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    year: '2026',
    thumbnail: sweldoThumbnail,
    // Screens (~8.5MB) load only on the project detail page
    screensLoader: () => import('./sweldoScreens'),
    highlights: [
      'Employee management — Maintain job details, departments, pay rates, and employment status in one place',
      'Timesheets — Employees log hours and overtime; managers review, approve, or reject submissions',
      'Payroll runs — Create pay periods, calculate earnings and deductions, then submit for approval and lock',
      'Philippine statutory deductions — Automatically compute SSS, PhilHealth, Pag-IBIG, and BIR withholding',
      'Payslips — Generate downloadable PDF payslips for employees after a run is approved',
      'Payments & bank export — Track disbursement status and export bank-ready CSV files',
      'Role-based access — Separate views for employees, managers, HR, payroll admins, and super admins',
      'Reports & audit trail — View payroll summaries by department or period, with a log of sensitive actions',
      'In-app notifications — Alerts for approvals, ready payslips, and payment updates',
      'Secure accounts — Login with password recovery, admin MFA, and protected sensitive employee data',
    ],
  },
  {
    slug: 'verdura',
    title: 'Verdura',
    description:
      'Breathe Natural. Bring calm, living greenery into your home. Discover house plants chosen for beauty, cleaner air, and everyday ease.',
    longDescription:
      'Breathe Natural. Bring calm, living greenery into your home. Discover house plants chosen for beauty, cleaner air, and everyday ease.',
    role: 'Product Designer & Frontend Developer',
    tech: ['React', 'Tailwind CSS', 'UI/UX', 'E-commerce'],
    year: '2026',
    thumbnail: verduraThumbnail,
    externalLink: 'https://verdura-beta.vercel.app/',
    highlights: [
      'Curated house plants for beauty and cleaner air',
      'Calm, nature-inspired shopping experience',
      'Designed for everyday ease at home',
    ],
  },
  {
    slug: 'voyage',
    title: 'Voyage',
    description:
      'Travel planning experience that helps wanderers map trips from inspiration to itinerary in a few taps.',
    longDescription:
      'Built for wanderers who plan far ahead and dreamers who book on a whim — Voyage turns “someday” into a dated itinerary in a few taps.',
    role: 'Product Designer & Frontend Developer',
    tech: ['React', 'Tailwind CSS', 'UI/UX', 'Travel Planning'],
    year: '2026',
    thumbnail: voyageThumbnail,
    externalLink: 'https://voyage-travel-landing.vercel.app/voyage-travel-landing.html',
    highlights: [
      'Designed for spontaneous and planned travelers alike',
      'Streamlined trip planning from inspiration to itinerary',
      'Clean, immersive interface for browsing and booking experiences',
    ],
  },
  {
    slug: 'plantum',
    title: 'Plantum',
    description:
      'Spot rice leaf disease before it spreads. Photograph a leaf in the field and get a clear diagnosis in seconds.',
    longDescription:
      'Spot rice leaf disease before it spreads. Photograph a leaf in the field and get a clear diagnosis in seconds. Built for quick field checks—no account, no cloud model calls from your phone once the backend is running.',
    role: 'Full-Stack Developer',
    tech: ['Next.js', 'FastAPI', 'PyTorch', 'DINOv2', 'Tailwind CSS', 'Web App', 'Python'],
    year: '2026',
    thumbnail: plantumThumbnail,
    video: plantumDemo,
    videoPoster: plantumThumbnail,
    howItWorksIntro: 'Three steps from leaf to diagnosis.',
    howItWorks: [
      {
        step: '01',
        title: 'Capture',
        description:
          'Fill the frame with a single leaf. Prefer daylight and keep the camera steady.',
      },
      {
        step: '02',
        title: 'Analyze',
        description:
          'Your photo is sent to the local FastAPI model for classification.',
      },
      {
        step: '03',
        title: 'Act',
        description:
          'Review the top prediction and confidence, then decide next steps in the field.',
      },
    ],
    highlights: [
      'DINOv2 rice-leaf disease classifier running on a local FastAPI backend',
      'Next.js frontend with Framer Motion for a clear field-ready scanner flow',
      'Three steps from leaf photo to diagnosis—no account required',
    ],
  },
  {
    slug: 'pulse',
    title: 'Pulse',
    description:
      'Product analytics that ships decisions, not dashboards',
    longDescription:
      'See what users do, where they stall, and what to build next — in one focused workspace for product teams. Pulse turns funnels, retention, and feature adoption into clear next experiments.',
    role: 'Full-Stack Developer',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SaaS', 'Data Analytics'],
    year: '2026',
    thumbnail: pulseThumbnail,
    externalLink: 'https://pulse-phi-navy.vercel.app/',
    highlights: [
      'Opinionated product analytics for activation, retention, and feature adoption',
      'Decision briefs that turn charts into recommended next experiments',
      'Built for product teams who ship weekly, not vanity dashboards',
    ],
  },
  {
    slug: 'freshplate',
    title: 'FreshPlate',
    description:
      'A modern recipe website with a clean interface for discovering and exploring culinary creations.',
    longDescription:
      'FreshPlate is a modern recipe website designed to help food enthusiasts discover, explore, and save their favorite recipes. Built with a clean, intuitive interface that makes browsing recipes a delightful experience.',
    role: 'Full-Stack Developer',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'API Integration'],
    year: '2026',
    thumbnail: freshplateThumbnail,
    externalLink: 'https://fresh-plate-ashy.vercel.app/',
    highlights: [
      'Clean, modern recipe browsing interface',
      'Intuitive search and filtering system',
      'Responsive design for all devices',
    ],
  },
  {
    slug: 'ember',
    title: 'Ember',
    description:
      'A marketing landing page for a copy-paste SaaS landing kit — polished dark, amber-toned pages for product teams who want to ship without designing from scratch.',
    longDescription:
      'Ember is a marketing landing page for a copy-paste SaaS landing kit. Aimed at product teams who want a polished dark, amber-toned site without designing from scratch — drop the React, shadcn/ui, and Tailwind components into a Next.js app, swap branding and copy, and ship.',
    role: 'Product Designer & Frontend Developer',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'SaaS'],
    year: '2026',
    thumbnail: emberThumbnail,
    externalLink: 'https://ember-eight-peach.vercel.app/',
    highlights: [
      'Copy-paste landing kit for React, shadcn/ui, and Tailwind',
      'Dark amber-toned marketing site tuned for SaaS launches',
      'Drop components into Next.js, swap brand and copy, then ship',
    ],
  },
  {
    slug: 'coursecompass',
    title: 'CourseCompass',
    description:
      'A comprehensive course platform with progress tracking and analytics for learners.',
    longDescription:
      'CourseCompass is a feature-rich learning platform where users can take various courses and track their progress with detailed analytics. Built to provide an engaging learning experience with real-time progress insights.',
    role: 'Full-Stack Developer',
    tech: ['React', 'Next.js', 'Analytics', 'Progress Tracking'],
    year: '2026',
    thumbnail: coursecompassThumbnail,
    externalLink: 'https://course-compass-lovat.vercel.app/',
    highlights: [
      'Interactive course catalog and enrollment',
      'Real-time progress tracking and analytics',
      'User-friendly dashboard with insights',
    ],
  },

  {
    slug: 'flowlaunch',
    title: 'FlowLaunch',
    description:
      'AI-powered landing page and funnel studio for course creators and SaaS founders.',
    longDescription:
      'An AI-powered landing page and funnel studio for course creators and SaaS founders. Describe your offer once, and we generate a responsive, on-brand funnel — headlines, sections, layout, and all.',
    role: 'Full-Stack Developer',
    tech: ['React', 'Next.js', 'AI', 'Tailwind CSS'],
    year: '2026',
    thumbnail: flowlaunchThumbnail,
    externalLink: 'https://flowlaunch-five.vercel.app/',
    highlights: [
      'AI-powered funnel generation from a single description',
      'Responsive, on-brand landing pages and sections',
      'Built for course creators and SaaS founders',
    ],
  },
  {
    slug: 'nightwave',
    title: 'NightWave',
    description:
      'A studio that helps SaaS, fintech, and creative platforms ship dark, modern marketing sites.',
    longDescription:
      'A small studio that helps SaaS, fintech, and creative platforms ship dark, modern marketing sites that look as sharp as their product. We handle product shots, motion, and the tiny UI details that make your launch feel intentional.',
    role: 'Full-Stack Developer',
    tech: ['React', 'Motion Design', 'Framer Motion', 'Tailwind CSS'],
    year: '2026',
    thumbnail: nightwaveThumbnail,
    externalLink: 'https://nightwave-five.vercel.app/',
    highlights: [
      'Dark, modern marketing sites for SaaS and fintech',
      'Product shots and motion design',
      'Attention to tiny UI details',
    ],
  },
  {
    slug: 'harborbook',
    title: 'HarborBook',
    description:
      'A friendly, mobile-first booking experience for service businesses.',
    longDescription:
      'HarborBook gives service businesses a friendly, mobile-first booking experience that feels great for clients to use. Capture leads, confirm appointments, send reminders, and get paid — without duct-taping five tools together.',
    role: 'Full-Stack Developer',
    tech: ['React', 'Node.js', 'Scheduling', 'Payments'],
    year: '2026',
    thumbnail: harborbookThumbnail,
    externalLink: 'https://harborbook.vercel.app/',
    highlights: [
      'Mobile-first booking experience',
      'Lead capture, appointments, and reminders',
      'Integrated payment processing',
    ],
  },
  {
    slug: 'aqro-mobile-app',
    title:
      'aQRo Mobile App: QR-Coded Reusable Food and Beverage Containers for the Circular Economy',
    description:
      'Mobile app for intelligent container tracking using QR codes to support a circular economy.',
    longDescription:
      'Main programmer for aQRo. Built the full-stack mobile experience and led backend logic for intelligent container tracking.',
    role: 'Full-Stack Developer',
    tech: ['MongoDB', 'Express.js', 'React Native', 'Node.js', 'Mobile Development'],
    year: '2025',
    thumbnail: aqroThumbnail,
    video: aqroOnboardingVideo,
    videoPoster: aqroThumbnail,
    videoLabel: 'Onboarding',
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
    tech: ['Ionic', 'Angular', 'Firebase', 'Leaflet', 'Geolocation API', 'Mobile Development'],
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

