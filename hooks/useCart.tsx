import { CartProductType } from "@/app/product/[productId]/productDetails";
import { product } from "@/utils/product";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast, { Toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  //ถ้าเอาออก value บรรทัด 75 แดง
  handleRemoveProductFromCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  useEffect(() => {
    const cartItems: any = localStorage.getItem("Mechamongus_CartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);

    setCartProducts(cProducts);
  }, []);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Product added to cart");
      localStorage.setItem(
        "Mechamongus_CartItems",
        JSON.stringify(updatedCart)
      );
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback((
      product:CartProductType
    ) => {
      if(cartProducts){
        const filteredProducts= cartProducts.filter((item) => {
          return item.id != product.id
        })

        setCartProducts(filteredProducts)
        toast.success("Product remove");
      localStorage.setItem(
        "Mechamongus_CartItems",
        JSON.stringify(filteredProducts));
      }
    },[cartProducts])

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
