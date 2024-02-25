"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { useCart } from "@/hooks/useCart";
import { SelectedImgType } from "../product/[productId]/productDetails";
import { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductCardProps {
  data: any;
  product: any;
}

export type CartProductType = {
  quantity: number;
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  qty: number;
  price: number;
};

const Pc_Cus_Card: React.FC<ProductCardProps> = ({ data, product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [IsProductInCart, setIsProductInCart] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existing_index = cartProducts.findIndex(
        (item) => item.id == product.id
      );
      if (existing_index > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product.id]);

  const [cartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    qty: 1,
    price: product.price,
    quantity: 1,
  });

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div
      className=" 
    col-span-1 
    cursor-pointer 
    border-[1.2px] 
    border-slate-200 
    bg-slate-200 
    rounded-sm p-2 
    transition
    hover:scale-105 
    text-center 
    text-sm"
      // onClick={() => router.push(`/product/${data.id}`)}
    >
      <div
        className="
     flex flex-col 
     items-center 
     w-full gap-1"
      >
        <div
          className=" aspect-square overflow-hidden
     relative w-full"
        >
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className=" w-full h-full object-contain"
          />
        </div>
        <div className=" mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        {IsProductInCart ? (
          <>
            <MdCheckCircle className=" text-teal-400" size={35} />
            <span>Product added to cart</span>
          </>
        ) : product.inStock ? (
          <>
            <div className=" justify-end items-end">
              <Button
                outline
                label="Add To Cart"
                onClick={() => {
                  handleAddProductToCart(cartProduct);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="max-w-[300px] text-rose-400">Out Of Stock</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pc_Cus_Card;
