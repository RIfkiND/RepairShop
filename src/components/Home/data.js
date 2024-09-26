import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  ClockIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";


const benefitOne = {
  title: "DeRepair benefits",
  desc: "we specialize in fast, affordable, and reliable repair services for all your devices. Whether it's a cracked screen, battery replacement, water damage, or software issues, our expert technicians are here to help. We repair smartphones, tablets, laptops, and more, using high-quality parts with quick turnaround times to get your device back in working order as soon as possible.",
  image: "/img/benefit-one.png",
  bullets: [
    {
      title: "Affordable Pricing",
      desc: "Competitive rates without compromising on quality, so you can get the best value for your money.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Enjoy convenient service options, including walk-ins, mail-in repairs, and home delivery, making it easier than ever for customers to get their devices fixed quickly.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "Our loyalty program rewards returning customers with exclusive discounts and priority service, ensuring a long-lasting relationship based on trust and satisfaction.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More Reasons to Choose Us",
  desc: "Highlighting the benefits of choosing our device repair services. This section includes key features of our offerings, presented with a flipped image layout and accompanied by bullet points to showcase the advantages.",
  image: "/img/benefit-two.png",
  bullets: [
    {
      title: "Quick Turnaround",
      desc: "We offer fast repairs, with most jobs completed on the same day to minimize your device downtime.",
      icon: <ClockIcon />,
    },
    {
      title: "Certified Technicians",
      desc: "Our team is composed of trained and certified experts who specialize in a wide range of devices.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Warranty on Repairs",
      desc: "All our repair services come with a warranty, ensuring peace of mind after your device is fixed.",
      icon: <ShieldCheckIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
