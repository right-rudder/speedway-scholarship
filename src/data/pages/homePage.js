import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import {  
    PLACEHOLDER as contentCTAimg, 
    PLACEHOLDER_PERSON as imgUnderHeader,
    PLACEHOLDER as imgUnderHeader,   
    PLACEHOLDER as imgHeader,    
} from "../../constsImages";

const homePage = {
  data: {
    header: {
      stars: true,
      imagePath: imgHeader.imagePath,
      imageAlt: imgHeader.imageAlt,
      headerH1: `Heading h1`,
      paragraph: "Description",
      buttons: [
        {
          name: "Form",
          link: "/#",
          primary: false,
        },
      ],
    },

    underHeader: {
      title: "Your Journey Starts Here",
      paragraphs: [
        "Explanation",
      ],
      image: {
        imagePath: imgUnderHeader.imagePath,
        imageAlt: imgUnderHeader.imageAlt,
      },
      buttons: [
        {
          text: "About Us",
          link: "/about-us",
        },
      ],
    },

    anotherSection: {
      upperHeading: "Why",
      heading: "Heading",
      descriptions: [],
      bullets: [
        {
          title: "title",
          descriptions: [
            "Descriptions",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imageLegend: "Become a Pilot with USATS",
      imagePath: "/src/assets/USATS_banner_Application.webp",
      imageAlt: "",
    },

    oneSection: {
      upperHeading: "",
      heading: "",
      descriptions: [],
      imageLegend: "",
      imagePath: contentCTAimg.imagePath,
      imageAlt: contentCTAimg.imageAlt,
    },

    blogfeed: {
      upperHeading: "",
      heading: "",
      description: "",
    },


    section: {
      upperHeading: "",
      heading: "",
      headingText: ["", ""],
      buttonText: "",
      buttonLink: "",
      reviews: [
        {
          body: "",
          author: "",
        },
      ],
    },

    faQ: {
      title: "",
      description: "",
      questions: [
        {
          question: "",
          answer: "",
        },
      ],
      buttons: [
        {
          name: "Contact Us",
          link: "contact-us",
          primary: true,
        },
      ],
    },
  },
};

export default homePage;
