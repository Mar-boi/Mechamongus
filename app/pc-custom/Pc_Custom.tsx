import getProducts, { IProductParams } from "@/actions/getProducts";
import ProductCard from "../components/products/ProductCard";
import NullData from "../components/NullData";
import Pc_cus_Categories from "./category/pc-cus-categories";
import getCurrentUser from "@/actions/getCurrentUser";
import Pc_cus_cart from "./cart/pc-cus-cart";
import Pc_Cus_Card from "./pc-cus-card";
import Heading from "../components/Heading";

interface HomeProps {
  searchParams: IProductParams;
}

const Pc_Custom = async ({ searchParams }: HomeProps) => {
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledProducts = shuffleArray(products);
  return (
    <div className="m-5">
      <Heading title="Custom PC" center />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12    max-w-[1920px] m-5">
        <div className="relative  h-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="p-4">
            <Pc_cus_cart currentUser={currentUser} />
          </div>
        </div>
        <div className="relative  h-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ">
          <Pc_cus_Categories />
          <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-2 p-4">
            {shuffledProducts.map((product: any) => {
              return (
                <Pc_Cus_Card
                  key={product.id}
                  data={product}
                  product={product}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pc_Custom;
