import UnderHeader from "../components/UnderHeader.astro";
import { 
  RAYYU_MALDIVES as imgTestPhase,
  MENTOR_PILOT_SHAKING_HANDS_WITH_STUDENT as imgAboutMission,
  PILOT_STUDENT_DOING_CHECKLIST_ON_PLANE  as imgAboutCommitment,
} from "../constsImages";


export const speedwayScholarship = {
    about: {
      upperHeading: "About",
      title: "Speedway Flight Training Scholarship Fund, Inc.",
      description: "The Speedway Flight Training Scholarship Fund is a nonprofit organization transforming aviation dreams into reality. We provide fully funded FAA Private Pilot Certificates to deserving high school students, creating pathways to professional aviation careers while instilling the discipline and responsibility essential for success in the skies. Through financial support and mentorship, we're building a new generation of skilled, safety-conscious pilots from all backgrounds.",
      imagePath: "",
      imageAlt: "",
      missionStatement: {
        upperHeading: "",
        title: "Mission Statement",
        imagePath: imgAboutMission.imagePath,
        imageAlt: imgAboutMission.imageAlt,
        description: [
          "The Speedway Flight Training Scholarship Fund is dedicated to opening doors for ambitious, college-bound high school students who dream of flying. ",
          "Our mission is to support aspiring aviators by covering the full cost of earning their FAA Private Pilot Certificate—a crucial first step toward a professional aviation career. ",
          "By removing financial barriers, this scholarship empowers students to begin flight training and obtain the credentials needed to enroll in accredited college or university aviation programs.",
          "From there, they can continue their journey toward advanced certifications and a degree in aviation. ",
          "Awards are granted through a competitive application process based solely on financial need and demonstrated potential—regardless of race, gender, or religious background. We’re committed to elevating the next generation of pilots by investing in talent, passion, and perseverance.",
        ]
      },
  
      commitment: {
        upperHeading: "",
        title: "Commitment to Excellence and Responsibility",
        imagePath: imgAboutCommitment.imagePath,
        imageAlt: imgAboutCommitment.imageAlt,
        description: [
          "Aviation is a profession that demands discipline, sound judgment, and a deep sense of responsibility—qualities that distinguish it from many other careers. One of the core goals of the Speedway Flight Training Scholarship Fund is not only to provide financial support but also to help shape the character and professionalism of the next generation of aviators. Where possible, we aim to offer mentorship to guide scholarship recipients toward long-term success in the field.",
          "As part of this commitment, scholarship recipients must understand that the misuse of alcohol or drugs can jeopardize their careers. Such behavior may disqualify a pilot from obtaining an FAA medical certificate, which is a critical requirement for all professional pilots. Likewise, a record of traffic violations can indicate poor judgment or a lack of maturity—traits that are incompatible with the responsibilities of flight.",
          "For these reasons, all scholarship recipients are required to pledge, for the duration of the award:",
        ],
        bullets: [
          "Remain drug- and alcohol-free",
          "Adhere to all traffic laws and regulations while operating a motor vehicle",
        ],
        lastParagraph: "This pledge reflects the high standards of the aviation industry and the expectations of this scholarship program. It is not just a rule—it’s a reflection of the professionalism that defines a successful pilot.",
      },
    },
  
    programStructure: {
      title: "Progressive Award Structure & Program Requirements",
      description: [
        "A three-phase aviation training program designed to guide high-potential students to earn their FAA Private Pilot Certificate.",
        "Each phase builds on the previous, ensuring readiness and competence before progressing."
      ],
      phases: [
        {
          title: "Phase One: FAA Knowledge Test Preparation",
          id: "test",
          imagePath: imgTestPhase.imagePath,
          imageAlt: imgTestPhase.imageAlt,
          description: [
            "Successful applicants will receive FAA-approved study materials, personalized instructional support, and coverage of all exam fees. To advance to Phase Two, recipients must pass the FAA Private Pilot Knowledge Test with a score of at least 80% by the scholarship award expiration date, with up to three attempts."
          ],
          bullets: [
            "FAA-approved study materials",
            "Personalized instructional support",
            "All fees required to take the FAA Private Pilot Knowledge Exam",
            "Pass the Knowledge Test with ≥80% by award expiration (3 attempts)"
          ],
        },
        {
          title: "Phase Two: First Solo Flight",
          id: "solo-flight",
          description: [
            "Upon passing the knowledge exam, recipients will receive aircraft rental, ground school, and flight instruction at Atlanta Speedway Airport in Hampton, GA.",
            "Students must complete their first solo flight within 15 logged flight hours to progress to the final phase."
          ],
          bullets: [
            "Aircraft rental and flight instruction provided",
            "Conducted by Speedway Flight Training, LLC at Atlanta Speedway Airport",
            "Solo flight must occur within 15 logged hours"
          ]
        },
        {
          title: "Phase Three: Private Pilot Certification",
          id: "private-pilot-certification",
          description: [
            "Once the first solo is completed, students will receive continued aircraft rental and instruction, with coverage of final certification testing fees.",
            "Funding includes up to 50 flight hours, with a possible 10-hour extension in exceptional cases (max 60 hours)."
          ],
          bullets: [
            "Coverage of checkride examiner fees for first attempt",
            "Up to 50 funded flight hours (plus 10 exceptional)",
            "Completion of FAA Private Pilot Certificate requirements"
          ]
        }
      ]
    },
  
    eligibility: {
      upperHeading: "Requirements",
      title: "Eligibility & Program Requirements",
      description: "To ensure the safety, success, and professionalism of all recipients, the following conditions apply:",
      subSections: [
        {
          title: "Eligibility Criteria",
          imagePath: "",
          imageAlt: "",
          description: "",
          bullets: [
            "Open to high school juniors and seniors who are college-bound and planning on enrolling in an aviation degree program",
            "Must be at least 16 years old by the time of solo flight and 19 by certification",
            "Prepared to identify the college or university they plan to attend"
          ]
        },
        {
          title: "Testing & Certifications",
          imagePath: "",
          imageAlt: "",
          description: "",
          bullets: [
            "Pass a DOT-standard drug test before receiving Phase One materials",
            "Obtain an FAA First Class Medical Certificate before beginning Phase Two"
          ]
        },
        {
          title: "Code of Conduct",
          imagePath: "",
          imageAlt: "",
          // description: "Aviation requires exceptional responsibility and character. All recipients must:",
          description: "Violation of this pledge may result in immediate termination of the scholarship and loss of any remaining benefits.",
          bullets: [
            "Pledge to remain drug and alcohol-free",
            "Pledge to follow all traffic laws and regulations while operating a motor vehicle",
            "Violation may result in immediate termination of the scholarship and loss of remaining benefits"
          ]
        },
        {
          title: "Transportation & Attendance",
          imagePath: "",
          imageAlt: "",
          description: "Three or more no-shows may result in the forfeiture of the scholarship.",
          bullets: [
            "Students are responsible for transportation to and from Atlanta Speedway Airport",
            "Students and a parent/guardian must sign a release of liability waiver before Phase Two",
            "Timeliness and professionalism are expected",
            "Arrive at least 15 minutes early for all scheduled lessons",
            "Cancel any session at least 24 hours in advance (3 no-shows may forfeit scholarship)"
          ]
        }
      ]
    },
  
    awardDetails: {
      upperHeading: "Details",
      title: "Award Details & Terms",
      description: "This all-inclusive scholarship covers every step of your Private Pilot Certificate journey. Review what's included, how the phased program works, and important terms for recipients.",
      subSections: [
        {
          title: "Phase One Award – Training Materials",
          description: "Each Phase One recipient will receive the Gleim Aviation Deluxe Private Pilot Kit with Audio Review—a comprehensive, Part 141-approved learning package designed to support success on the FAA Private Pilot Knowledge Exam. Kit includes:",
          bullets: [
            "Gleim Online Ground School for Private Pilot (Part 141-approved)",
            "FAA Test Prep Online - Private Pilot",
            "Private Pilot Audio Review",
            "FAR/AIM (Federal Aviation Regulations / Aeronautical Information Manual)",
            "Pilot Logbook",
            "Pilot Handbook",
            "Flight Plotter",
            "E6B Flight Computer",
            "Private Pilot Oral Exam Guide & ACS (Airman Certification Standards)",
            "Private Pilot Flight Maneuvers and Practical Test Prep",
            "FAA Private Pilot Knowledge Test Book",
            "Private Pilot Syllabus",
            "Private Pilot Training Record Book",
            "Online Aviation Communications Course",
            "Security-Related Airspace Course",
          ],
        },
        {
          title: "Phase Two & Three Awards – Flight Training",
          bullets: [
            "Flight instruction and aircraft rental for Phases Two and Three will be provided by Speedway Flight Training, LLC, located at Atlanta Speedway Airport, Hampton, GA.",
          ],
        },        
        {
          title: "Testing Fees",
          bullets: [
            "FAA Knowledge and Checkride Examiner Fees for first attempt covered",
            "Retake or retest fees after failure are the recipient’s responsibility"
          ]
        },
        {
          title: "Program Duration & Extensions",
          bullets: [
            "All flight training and certification must be completed within 18 months of the initial award notification or before the start of the recipient’s freshman year of college, whichever comes first.",
            "Extensions may be considered on a case-by-case basis, but are not guaranteed.",
          ]
        },
        {
          title: "General Terms",
          bullets: [
            "This scholarship has no cash value",
            "The Speedway Flight Training Scholarship Fund will make all payments directly to product and service providers.",
            "No funds will be distributed directly to recipients under any circumstances.",
          ]
        }
      ]
    }
  };
  