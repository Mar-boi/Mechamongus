import { CartProductType } from "@/app/product/[productId]/productDetails";
import { products } from "@/utils/products";
import { Jacques_Francois } from "next/font/google";
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
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
  paymentIntent: string | null;
  handleSetPaymentIntent: (val: string | null) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  console.log("qty", cartTotalQty);
  console.log("amount", cartTotalAmount);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("Mechamongus_CartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    const MechamongusPaymentIntent: any = localStorage.getItem(
      "MechamongusPaymentIntent"
    );
    const paymentIntent: string | null = JSON.parse(MechamongusPaymentIntent);
    setCartProducts(cProducts);
    setPaymentIntent(paymentIntent);
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );

        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };

    getTotals();
  }, [cartProducts]);

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

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id != product.id;
        });

        setCartProducts(filteredProducts);
        toast.success("Product remove");
        localStorage.setItem(
          "Mechamongus_CartItems",
          JSON.stringify(filteredProducts)
        );
      }
    },
    [cartProducts]
  );

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      if (product.quantity == 99) {
        return toast.error("Ooop! Maximum reached");
      }

      if (cartProducts) {
        const updateCart = [...cartProducts];

        const existing_index = cartProducts.findIndex(
          (item) => item.id == product.id
        );

        if (existing_index > -1) {
          updateCart[existing_index].quantity = ++updateCart[existing_index]
            .quantity;
        }

        setCartProducts(updateCart);
        localStorage.setItem(
          "Mechamongus_CartItems",
          JSON.stringify(updateCart)
        );
      }
    },
    [cartProducts]
  );

  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      if (product.quantity == 1) {
        return toast.error("Ooop! Minimum reached");
      }

      if (cartProducts) {
        const updateCart = [...cartProducts];

        const existing_index = cartProducts.findIndex(
          (item) => item.id == product.id
        );

        if (existing_index > -1) {
          updateCart[existing_index].quantity = --updateCart[existing_index]
            .quantity;
        }

        setCartProducts(updateCart);
        localStorage.setItem(
          "Mechamongus_CartItems",
          JSON.stringify(updateCart)
        );
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("Mechamongus_CartItems", JSON.stringify(null));
  }, [cartProducts]);

  const handleSetPaymentIntent = useCallback(
    (val: string | null) => {
      setPaymentIntent(val);
      localStorage.setItem("MechamongusPaymentIntent", JSON.stringify(val));
    },
    [paymentIntent]
  );

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
    paymentIntent,
    handleSetPaymentIntent,
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
