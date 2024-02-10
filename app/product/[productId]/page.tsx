"use client";
import Container from "@/app/components/Container";
import ProductDetails from "./productDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";

interface IParams {
  productId?: string;
}
const Product = async ({ params }: { params: IParams }) => {
  console.log("params ", params);

  const product = await getProductById(params);

  if (!product)
    return <NullData title="Oops! Product with the given id does not exist" />;

  return (
    <div className=" p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
