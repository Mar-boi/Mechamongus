"use client";
"use sever";
import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdCheckCircle } from "react-icons/md";

interface productDetailsProps {
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

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className=" w-[30% my-2]" />;
};

const ProductDetails: React.FC<productDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [IsProductInCart, setIsProductInCart] = useState(false);
  const { cartTotalQty } = useCart();
  const [cartProduct, setCartProduct] = useState<CartProductType>({
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

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    // ไม่รูปเป็นอะไร ต้องใส่ comment ข้างล่าง
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity == 99) {
      return toast.error("Ooop! Maximum reached");
    }
    setCartProduct((prev) => {
      return { ...prev, qty: ++prev.quantity };
    });
  }, [cartProduct]);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity == 1) {
      return toast.error("Ooop! Minimum reached");
    }
    setCartProduct((prev) => {
      return { ...prev, qty: --prev.quantity };
    });
  }, [cartProduct]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className=" flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className=" text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className=" flex items-center gap-2">
          <Rating value={productRating} readOnly />
        </div>
        <div>{product.reviews.length} reviews</div>
        <Horizontal />
        <div className=" text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className=" font-semibold">CATEGORY</span> {product.category}
        </div>
        <div>
          <span className=" font-semibold">Brand</span> {product.brand}
        </div>
        <div className={product.inStock ? " text-teal-400" : " text-rose-400"}>
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        {IsProductInCart ? (
          <>
            <p className=" mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className=" text-teal-400" size={20} />
              <span>Product added to cart</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="View Cart"
                outline
                onClick={() => router.push("/cart")}
              />
            </div>
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            />
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                outline
                label="Add To Cart"
                onClick={() => {
                  handleAddProductToCart(cartProduct);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
