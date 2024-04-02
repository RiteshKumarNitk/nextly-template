import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Maximize Your Advantages",
  desc: "Highlight the benefits of partnering with Innovatex Technology Pvt Ltd using this section. You can showcase key features or advantages, accompanied by an illustrative image. Utilize bullet points to succinctly emphasize each benefit.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Top-tier Talent Access",
      desc: "Innovatex offers customized solutions tailored to meet your specific business needs, ensuring maximum efficiency and effectiveness.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Access a pool of skilled professionals across various domains through Innovatex, augmenting your team and accelerating project delivery.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Strategic Digital Marketing",
      desc: "Elevate your brand's online presence and drive growth with Innovatex's strategic digital marketing solutions, tailored to your objectives.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Explore More Benefits",
  desc: "As a leading IT company dedicated to innovation, Innovatex Technology Pvt Ltd delivers cutting-edge technology solutions for businesses of all sizes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Innovative Technologies",
      desc: "Stay ahead with Innovatex's adoption of the latest technologies and tools, ensuring your solutions are at the forefront of innovation.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Responsive Design",
      desc: "Enjoy a seamless experience across all devices with Innovatex's mobile-first responsive design approach, optimizing accessibility and user experience.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Flexible Modes",
      desc: "Adapt to your preferences effortlessly with Innovatex's zero-config light and dark mode feature, ensuring optimal readability and comfort.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
