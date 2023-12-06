import { Avatar, Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
    product: any;
}

const ListRating: React.
FC<ListRatingProps> =({
product}) => {
    return (
    <div>
        <Heading title="Product Review"/>
        <div className="text-sm mt-2">
            {product.Review && product.Review.map
            ((Review: any) => {
                return <div key={Review.id}
                className="max-w-300px">
                    <div className="flex gap-2
                    items-center">
                        <Avatar src={Review?.user.image}/>
                        <div>Avatar</div>
                        <div className="font-semibold">
                        {Review?.user.name}</div>
                        <div className="font-light">
                        {moment(Review.createdData).
                        fromNow()}
                        </div>
                    </div>
                            <div className="mt-2">
                                <Rating value={Review.Rating}
                                readOnly/>
                                <div className="m1-2">
                                {Review.comment}</div>
                                <hr className="mt-4 mb-4"/>
                            </div>
                </div>;
            })}
        </div>
    </div>
    );
    
};

export default ListRating;