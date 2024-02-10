'use client'

import { Order,User } from "@prisma/client";
import { DataGrid, GridColDef} from "@mui/x-data-grid";
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import {  MdAccessTimeFilled,MdDeliveryDining, MdDone,MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn"
import { useCallback } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import moment from "moment";

import { useRouter } from "next/navigation";

interface OrdersClientProps{
    orders: ExtendedOrders[];
}

 type ExtendedOrders = Order & {
    user: User
 }

const OrdersClient: React.FC<OrdersClientProps> = ({
    orders,
}) => {
    const router = useRouter();
    let rows: any = [];
    if(orders ){
        rows = orders.map((orders)=> {
            return  {
                id: orders.id,
                customer: orders.user.name,
                amount: formatPrice(orders.amount / 100),
                paymentStatus: orders,
                date: moment(orders.createData).fromNow(),
                deliverStatus: orders.deliveryStatus,
            };
        } );
    }

    const columns: GridColDef[] = [
        {field: 'id',headerName: 'ID', width: 220},
        {field: 'customer',headerName: 'Customer Name', width: 130}
        {field: 'amount',headerName: 'Amount(USD)', width: 100, renderCell :
        (params) =>{
            return(<div className="font-bold text-slate-800">{params.row.Amount}</div>
            );
        },
    },
    {field: "paymentStatus",headerName: "Payment Status",width: 130,
    renderCell: (params)=>{
        return (
            <div>
                {params.row.paymentStatus === 'pending' ?(
                <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
                /> ) : params.row.paymentStatus === 'complete' ?(
                <Status
                text="completed"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"/>
                ) : (<></>)}
                
            </div>
        
        );
    },
    {field: "deliveryStatus",headerName: "Delivery Status",width: 130,
    renderCell: (params)=>{
        return (
            <div>
                {params.row.inStock === 'pending' ?(
                <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
                /> ) : params.row.inStock === 'dispatched' ?(
                <Status
                text="dispatched"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
                )}
                
            </div>
        
        );
    },
 },
 {
    field: "date",
    headerName: "Date",
    width: 130,
 },
 { field: "action", 
 headerName: "Action",
 width: 200,
 renderCell: (params) => {
    return <div className="flex justify-between gap-4 w-ull">
        
        <ActionBtn icon={MdRemoveRedEye} onClick={() =>{
            router.push(`order/$product/${params.row.id}`);
        }}/>
        </div>
    }
  }, 
];
 
   



return (
<div className="max-w-[1150px] m-auto">
    <div className="mb-4 mt-8">
        <Heading title=" Orders" center/>
    </div>

   
    <div style={{height: 600,width: "100%"}}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
        pagination: {
            paginationModel: {page: 0, pageSize: 9},
        },
     }}
    pageSizeOptions={[9, 20]}
     checkboxSelection
     disableRowSelectionOnClick
     />
    </div>
</div>);
};


export default OrdersClient;