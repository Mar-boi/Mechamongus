import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div
          className="flex flex-col md:flex-row
     justify-around pt-16 pb-8"
        >
          <FooterList>
            <h3 className="text-base font-bold mb-3">Shop Categories</h3>
            <Link href="/?category=CPU">CPU</Link>
            <Link href="/?category=Ram">Ram</Link>
            <Link href="/?category=Case">Case</Link>
            <Link href="/?category=Mainboard">Mainboard</Link>
            <Link href="/?category=Power Supply">Power Supply</Link>
            <Link href="/?category=HARD DISK/SSD">HARD DISK/SSD</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-3">About Us</h3>
            <p>Computer Accessories Ecommerce-Website</p>
            <p>
              &copy; {new Date().getFullYear()} Mechamongus. All rights reserved{" "}
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
