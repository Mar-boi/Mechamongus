import { AiOutlineHdd } from "react-icons/ai";
import { CgSmartphoneRam } from "react-icons/cg";
import { PiComputerTower } from "react-icons/pi";
import { BsCpu } from "react-icons/bs";
import { PiRectangle } from "react-icons/pi";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { BsGpuCard } from "react-icons/bs";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "CPU",
    icon: BsCpu,
  },
  {
    label: "Ram",
    icon: CgSmartphoneRam,
  },
  {
    label: "Case",
    icon: PiComputerTower,
  },
  {
    label: "Mainboard",
    icon: MdOutlineDeveloperBoard,
  },
  {
    label: "Power Supply",
    icon: PiRectangle,
  },
  {
    label: "HARD DISK/SSD",
    icon: AiOutlineHdd,
  },
  {
    label: "Graphic Card",
    icon: BsGpuCard,
  },
];
