import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import {  
    PLACEHOLDER as contentCTAimg, 
    RAYYU_MALDIVES as imgUnderHeader,
    JORGEN_HENDRICKSEN as imgHeader,    
} from "../../constsImages";

const homePage = {
  data: {
    header: {
      stars: true,
      imagePath: imgHeader.imagePath,
      imageAlt: imgHeader.imageAlt,
      headerH1: "Fully Funded <br> Flight Training",
      paragraph:
        "Get 15 Hours of Free Flight Training—Earn the Rest with Dedication! <br/>The Speedway Flight Training Scholarship helps high school students take off toward a professional aviation career—at no cost to their families.",
      buttons: [
        {
          name: "More",
          link: "#program",
          primary: true,
        },
        {
          name: "Donate",
          link: "/donation",
          primary: true,
        },
      ],
    },

    underHeader: {
      title: "Dream of flying?",
      paragraphs: [
        "We’ll fund your wings. The Speedway Flight Training Scholarship covers 100% of your FAA Private Pilot Certificate costs—so you can soar toward a professional aviation career.",
      ],
      image: {
        imagePath: imgUnderHeader.imagePath,
        imageAlt: imgUnderHeader.imageAlt,
      },
      buttons: [
        {
          text: "Support Future Aviators",
          link: "/donations",
        },
      ],
    },

    missionStatementSection: {
      upperHeading: "Start here",
      title: "Opening Doors for Aspiring Pilots",
      description: "We’re dedicated to removing financial barriers for ambitious high school students. Our scholarship funds flight training, mentorship, and FAA certification, empowering you to enroll in college aviation programs and pursue advanced certifications.",
      imagePath: "",
      imageAlt: "",
      bullets: [
        {
          title: "Master the Basics <br> (FAA Knowledge Test)",
          description: "",
          link: "#",
        },
        {
          title: "Take Control  <br> (First Solo Flight)",
          description: "Earn Your Wings (Private Pilot Certification)",
          link: "#",
        },
        {
          title: "Earn Your Wings <br> (Private Pilot Certification)",
          description: "",
          link: "#",
          
        },
      ],
    },


    aboutTheScholarship: {
      title: "What’s the Scholarship?",
      paragraphs: [
        "The Speedway Flight Training Scholarship is a 3-phase program designed to help high school students earn their FAA Private Pilot Certificate.",
        "Students start with FAA-approved study materials and test prep. If they pass and complete a solo flight within 15 hours, Speedway covers the rest of the training up to 50–60 hours total.",
        "Training is conducted at the Atlanta Speedway Airport in Hampton, GA and includes mentorship and strict safety/character requirements.",
      ],
      image: {
        imagePath: "/src/assets/flight_briefing.jpg",
        imageAlt: "Flight student being briefed by instructor",
      },
      buttons: [
        {
          text: "Learn More",
          link: "#program",
        },
        {
          text: "Donate",
          link: "/donate",
        },
      ],
    },

    programOverview: {
      images: {
        phase1: {
          imagePath: "/src/assets/study_materials.jpg",
          imageAlt: "FAA test preparation kit",
        },
        phase2: {
          imagePath: "/src/assets/solo_flight.jpg",
          imageAlt: "Student pilot flying solo",
        },
        phase3: {
          imagePath: "/src/assets/checkride_pass.jpg",
          imageAlt: "New pilot receiving certificate",
        },
      },
      buttons: [
        {
          name: "Explore All 3 Phases",
          link: "#program",
          primary: true,
        },
      ],
    },

    missionSection: {
      upperHeading: "Why This Matters",
      heading: "Mission-Driven. Character-Focused. Career-Ready.",
      descriptions: [
        "We believe talent shouldn't be grounded by cost. This scholarship supports aspiring pilots by removing financial barriers to professional flight training.",
        "The program is about more than flight hours—students are mentored in aviation professionalism, responsibility, and long-term success.",
        "All applicants pledge to remain drug- and alcohol-free and to follow traffic laws while enrolled. That’s the standard aviation demands—and we uphold it from day one.",
      ],
      bullets: [],
      imageLegend: "Scholarship students in flight school",
      imagePath: "/src/assets/mentor_program.jpg",
      imageAlt: "",
    },

    howItWorks: {
      upperHeading: "HOW TO GET STARTED",
      heading: "Your Steps to Takeoff",
      descriptions: [
        "1. Check your eligibility",
        "2. Submit your application",
        "3. Begin Phase One training and prep for your FAA knowledge test",
        "4. Complete your first solo within 15 hours to earn full funding",
      ],
      imageLegend: "Student pilot preparing aircraft",
      imagePath: "/src/assets/takeoff_steps.jpg",
      imageAlt: "",
    },

    eligibilitySection: {
      title: "Who Should Apply?",
      description: "",
      questions: [
        {
          question: "Who is this scholarship for?",
          answer: "College-bound high school juniors and seniors who are passionate about aviation and ready to commit to the program's requirements.",
        },
        {
          question: "What are the expectations?",
          answer: "Remain drug- and alcohol-free, follow all traffic laws, attend all sessions on time, and show professionalism throughout your training.",
        },
        {
          question: "Where does training take place?",
          answer: "Training is held at the Atlanta Speedway Airport in Hampton, Georgia, by Speedway Flight Training, LLC.",
        },
      ],
      buttons: [
        {
          name: "View Full FAQ",
          link: "/faq",
          primary: true,
        },
      ],
    },
  },
};

export default homePage;
