"user client";
import SetColor from "@/app/components/products/SetColor";
import SetQuatity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import Image from "next/image";
import { type } from "os";
import { useCallback, useState } from "react";

interface productDetailsProps {
  product: any;
}

export type CartProductType = {
  quantity: number;
  id: string;
  name: string;
  desscription: string;
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
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    desscription: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    qty: 1,
    price: product.price,
    quantity: 1,
  });

  console.log(cartProduct);
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
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, qty: ++prev.quantity };
    });
  }, [cartProduct]);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity == 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, qty: --prev.quantity };
    });
  }, [cartProduct]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        className=" overflow-hidden
     relative w-full"
      >
        Image ค่อยมาทำ
        {/* <Image
          src={product.images[0].image}
          fill
          alt={product.name}
          className=" w-full h-full object-contain"
          //style={{ position: "relative" }}
        /> */}
      </div>
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
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuatity
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
        <Horizontal />
        <div>Add to Cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
