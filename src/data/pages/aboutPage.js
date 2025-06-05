import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import {
  PLACEHOLDER as contentCTAimg,
  RAYYU_MALDIVES as imgUnderHeader,
  ATLANTA_AIRPORT_SPEEDWAY_FLIGHT_TRAINING_104 as imgHeader,
} from "../../constsImages";

const aboutPage = {
  pageTitle:
    "About Us - Speedway Flight Training Scholarship Fund | Aviation Scholarship Program",
  pageDescription:
    "Learn about the Speedway Flight Training Scholarship Fund's mission to provide fully funded flight training for high school students in Hampton, Georgia. Supporting future aviators through comprehensive scholarship programs.",
  pageKeywords:
    "about speedway scholarship, aviation scholarship fund, flight training foundation, high school pilot scholarship, Hampton Georgia aviation, scholarship mission, future aviators",
  data: {
    header: {
      stars: true,
      imagePath: imgHeader.imagePath,
      imageAlt: imgHeader.imageAlt,
      headerH1:
        "Training Future Aviators: <br> Funded, Focused, and Responsible",
      paragraph:
        "Get 15 Hours of Free Flight Training—Earn the Rest with Dedication! <br/>The Speedway Flight Training Scholarship helps high school students take off toward a professional aviation career—at no cost to their families.",
      buttons: [
        {
          name: "More",
          link: "#about",
          primary: true,
        },
        {
          name: "Donate",
          link: "/donate",
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
          link: "/donate",
        },
      ],
    },
  },
};

export default aboutPage;
