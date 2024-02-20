import { AiOutlineHdd } from "react-icons/ai";
import { CgSmartphoneRam } from "react-icons/cg";
import { PiComputerTower } from "react-icons/pi";
import { BsCpu } from "react-icons/bs";
import { PiRectangle } from "react-icons/pi";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { BsGpuCard } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";

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
    label: "Graphic Card",
    icon: BsGpuCard,
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
    label: "Case",
    icon: PiComputerTower,
  },
  {
    label: "Computer Set",
    icon: FaComputer,
  },
];
