import Link from "next/link";
import Container from "../Container";
import { Kdam_Thmor_Pro } from "next/font/google";
const textlogoBanner = Kdam_Thmor_Pro({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${textlogoBanner.className} font-bold text-2xl`}
            >
              Mechamongus
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Cart Count</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default NavBar;
