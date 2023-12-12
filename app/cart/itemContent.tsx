import { formatPrice } from "@/utils/fomatPrice";
import { CartProductType } from "../product/[productId]/productDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuatity from "../components/products/SetQuantity";

interface ItemContentProps{
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({item }) => {
    return <div className="grid grid-cols-5 text-xs md:tex-sm gap-4 border-[1.5px] border-slate-2 py-4 items-center">
        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4"><Link href={`/product/${item.id}`}>
            <div className="relative w-[90px] aspect-square">
                <Image src={item.selectedImg.image}
                alt={item.name}
                fill
                className="object-contain"/></div>
            
        </Link></div>
        <div className="flex flex-col justify-between">
            <Link href={`/product/${item.id}`}>
                {truncateText(item.name)}</Link>
            <div>{item.selectedImg.color}</div>
            <div className="w-[700px]">
                <button className="text-slate-500 underline" onClick={() => {}}>Remove
                </button>
            </div>
        </div>
        <div className="justify-self-center">{formatPrice(item.price)}</div>
        <div className="justify-self-center">
            <SetQuatity cartCounter={true} 
            cartProduct={item} handleQtyIncrease={() =>{}}
            handleQtyDecrease={() => {}}/>
        </div>
        <div className="justify-self-end font-semibold">
            {formatPrice(item.price * item.quantity)}
        </div>
    </div>;
}

export default ItemContent;