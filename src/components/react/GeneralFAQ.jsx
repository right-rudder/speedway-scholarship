import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import parse from "html-react-parser";
import { PHONE_NUMBER } from "../../consts";

const GeneralFAQs = () => {
  const faqs = [
    {
      question: "Where is Speedway Flight Training located?",
      answer:
        "We’re located at Atlanta Speedway Airport (KHMP) in Hampton, GA, a non-towered airport with minimal traffic—perfect for efficient flight training.",
    },
    {
      question: "What are Speedway’s hours of operation?",
      answer:
        "Our business hours are 9:00 AM - 4:00 PM. Flight training is available daily from 6:00 AM - 11:30 PM. For inquiries outside business hours, please contact us directly.",
    },
    {
      question: "What pilot training programs does Speedway Flight Training offer?",
      answer:
        "<ul className='list-disc ml-5'><li>Private Pilot License (PPL)</li><li>Instrument Rating (IR)</li><li>Commercial Pilot License (CPL)</li><li>Certified Flight Instructor (CFI & CFII)</li><li>Instrument Proficiency Check (IPC)</li><li>Biennial Flight Review (BFR)</li><li>Professional Pilot Program (Zero to Commercial)</li></ul>",
    },
    {
      question: "Does Speedway offer accelerated training?",
      answer:
        "While we don’t offer traditional accelerated programs, our structured training approach allows students to progress efficiently based on their availability and learning pace.",
    },
    {
      question: "Are there any prerequisites for enrollment?",
      answer:
        "<ul className='list-disc ml-5'><li>Completion of a discovery flight (recommended)</li><li>A valid FAA Medical Certificate (required for solo flight)</li><li>Required materials: logbook, headset, Gleim student kit, iPad (6th gen or newer, cellular-capable), and sunglasses</li></ul>",
    },
    {
      question: "Is the training Part 61 or Part 141?",
      answer:
        "We currently operate under Part 61 and are in the process of obtaining Part 141 certification to provide additional training flexibility.",
    },
    {
      question: "What is your checkride pass rate?",
      answer:
        "Our students maintain an impressive 82% first-time checkride pass rate, thanks to our dedicated instructors and structured training environment.",
    },
    {
      question: "How often should I train per week?",
      answer:
        "For best results, we recommend training at least 3 times per week to maintain proficiency and ensure steady progress toward your certification.",
    },
    {
      question: "What types of aircraft are in Speedway’s fleet?",
      answer:
        "Our fleet consists of four well-maintained Cessna 172s (models K, L, I, and M), all IFR-certified and equipped with Garmin Dual G5 avionics and G650XI systems.",
    },
    {
      question: "Does Speedway offer financing options?",
      answer:
        "We are partnered with <a href='https://stratus.finance' target='_blank' rel='noopener noreferrer' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to provide financing options for students.",
    },
    {
      question: "Does Speedway offer job placement assistance?",
      answer:
        "Yes! Many of our CFI graduates are offered instructor positions at Speedway, allowing them to build hours while training future pilots.",
    },
    {
      question: "What sets Speedway apart from other flight schools?",
      answer:
        "<ul className='list-disc ml-5'><li>Located at KHMP, a low-traffic training airport with quick access to practice areas</li><li>Training near Atlanta’s Class B airspace for real-world ATC experience</li><li>Competitive pricing without sacrificing quality instruction</li><li>A supportive, community-driven training environment</li></ul>",
    },
    {
      question: "Does Speedway offer discovery flights?",
      answer:
        "Yes! Our discovery flights provide a hands-on introduction to flying with a certified instructor. Learn more on our Discovery Flights page.",
    },
    {
      question: "Can I see scenic landmarks during my training?",
      answer:
        "Yes! Our training routes include beautiful views of **Atlanta Motor Speedway, Stone Mountain, the Atlanta skyline, and local reservoirs.**",
    },
    {
      question: "How do I start the enrollment process?",
      answer:
        "Starting is simple! Book a discovery flight, gather your required materials, and contact us to schedule your first lesson.",
    },
  ];
  
  const [openQuestions, setOpenQuestions] = useState(
    new Array(faqs.length).fill(false)
  );
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    const updatedOpenQuestions = [...openQuestions];
    updatedOpenQuestions[index] = !updatedOpenQuestions[index];
    setOpenQuestions(updatedOpenQuestions);
  };

  const visibleFAQs = showAll ? faqs : faqs.slice(0, 7);

  return (
    <div className="flex flex-col gap-5 max-w-3xl mt-10 lg:mt-0 mx-5">
      <h2 className="uppercase text-mariner-950/80 tracking-widest text-center">
        FAQs
      </h2>
      <h3 className="text-4xl lg:text-6xl mx-auto font-sans2 text-center mb-5 text-primary-800">
        {"Frequently Asked Questions"}
      </h3>
      <div className="flex flex-col gap-5 w-full">
        {visibleFAQs.map((faq, index) => (
          <div key={index} className="border-b border-main-black/30 pb-2" data-aos="fade up">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-xl lg:text-2xl w-full text-left flex justify-between py-3 text-mariner-950/90 hover:text-main-blue"
            >
              {faq.question}
              <IoIosArrowForward
                className={`${
                  openQuestions[index] ? "-rotate-90" : "rotate-90"
                } size-5 duration-200 shrink-0`}
              />
            </button>
            <div
              className={`duration-500 overflow-hidden ${
                openQuestions[index] ? "max-h-min" : "max-h-0"
              }`}
            >
              <div className="text-accent-900/80 text-lg lg:text-xl pl-5">
                {parse(faq.answer)}
              </div>
            </div>
          </div>
        ))}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary self-center"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default GeneralFAQs;