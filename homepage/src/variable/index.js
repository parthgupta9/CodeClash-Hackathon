import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  import rafting from "../assets/rafting.jpg";
  import bunjee from "../assets/bunjee.jpg";
  import hiking from "../assets/hiking.jpg";
  import skii from "../assets/SKIING-LL.jpg";
  import skydiving from "../assets/skydiving.jpg";
  import camping from "../assets/camping.jpg";
  
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Rafting",
      content: "Navigate Rapids, conquer currents amidst.",
      backgroundImage: rafting,
    },
    {
      icon: RxPencil2,
      title: "Bunjee Jump",
      content: "Summon courage,take the plunge into the abyss.",
      backgroundImage: bunjee,
    },
    {
      icon: RxDesktop,
      title: "Skiing",
      content: "Crave through powdery slopes mastering the balance on mountains.",
      backgroundImage: skii,
    },
    {
      icon: RxReader,
      title: "Hiking",
      content: "Journey through rugged terrail conquer peaks and hidden valleys.",
      backgroundImage: hiking,
    },
    {
      icon: RxAccessibility,
      title: "Camping",
      content: "Retreat into nature tranquility under a blanket of stars admist crackling campfires.",
      backgroundImage: camping,
    },
    {
      icon: RxRocket,
      title: "Skydiving",
      content: "Leap into dizzying heights soaring.",
      backgroundImage: skydiving,
    },
  ];