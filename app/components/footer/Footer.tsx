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
     justify-between pt-16 pb-8"
        >
          <FooterList>
            <h3 className="text-base font-bold mb-6">Shop Categolists</h3>
            <Link href="#">CPU</Link>
            <Link href="#">Ram</Link>
            <Link href="#">Case</Link>
            <Link href="#">Mainbord</Link>
            <Link href="#">Power Subply</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-6">Shop Categolists</h3>
            <Link href="#">CPU</Link>
            <Link href="#">Ram</Link>
            <Link href="#">Case</Link>
            <Link href="#">Mainbord</Link>
            <Link href="#">Power Subply</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-6">About Us</h3>
            <p>Computer Assesories Ecommerce-Website</p>
            <p>
              &copy; {new Date().getFullYear()} Mechamongus. All rigths reserved{" "}
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-6">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/Hajimemade">
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
