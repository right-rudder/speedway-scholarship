import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import {  
    PLACEHOLDER as contentCTAimg, 
    RAYYU_MALDIVES as imgUnderHeader,
    JORGEN_HENDRICKSEN as imgHeader,    
} from "../../constsImages";

const aboutPage = {
  data: {
    header: {
      stars: true,
      imagePath: imgHeader.imagePath,
      imageAlt: imgHeader.imageAlt,
      headerH1: "Training Future Aviators: <br> Funded, Focused, and Responsible",
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
