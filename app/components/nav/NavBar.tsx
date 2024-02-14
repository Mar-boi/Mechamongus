import Link from "next/link";
import Container from "../Container";
import { Kdam_Thmor_Pro } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";
import Categories from "./Categoties";
import SearchBar from "./SearchBar";

const textLogoBanner = Kdam_Thmor_Pro({
  subsets: ["latin-ext"],
  weight: ["400"],
});

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${textLogoBanner.className} font-bold text-2xl`}
            >
              Mechamongus
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
export default NavBar;
