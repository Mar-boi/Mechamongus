'use client'

import { Products } from "@prisma/client";
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from "@/utils/formatPrice";
import { MdAccessTime, MdAccessTimeFilled, MdCached, MdDelete, MdDeliveryDining, MdDone, MdRemove } from "react-icons/md";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { error } from "console";
import firebaseApp from "@/libs/firebase";
import getOrders from "@/actions/getOrders";

interface ManageOrdersClientProps{
    orders: ExtendedOrders[]
}

 type ExtendedOrders = Order & {
    user: User
 }

const ManageOrdersClient: React.FC<ManageOrdersClientProps> = ({
    orders,
}) => {
    const router = useRouter();
    const Storage = getStorage(firebaseApp);
    let rows: any = [];
    if(orders ){
        rows = orders.map((orders)=> {
            return  {
                id: orders.id,
                customer: orders.name,
                amount: formatPrice(orders.amount / 100),
                paymentStatus: orders,
                date: moment(orders.createDate).fromNow(),
                deliverStatus: orders.deliveryStatus,
            };
        } );
    }

    const columns: GridColDef[] = [
        {field: 'id',headerName: 'ID', width: 220},
        {field: 'customer',headerName: 'Customer Name', width: 130}
        {field: 'amount',headerName: 'Amount(USD)', width: 100, renderCell :
        (params) =>{
            return(<div>{params.row.Amount}</div>
            );
        },
    },
    {field: "paymentStatus",headerName: "Payment Status",width: 130}, 
    {field: "deliveryStatus",headerName: "delivery Status",width: 130}, 
    {field: "inStock",headerName: "inStock",width: 120,renderCell: (params)
    =>{
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
 { field: "action", 
 headerName: "Action",
 width: 200,
 renderCell: (params) => {
    return <div className="flex justify-between gap-4 w-ull">
        <ActionBtn icon={MdCached} onClick={() =>{
            handleToggleStock(params.row.id, params.row.inStock);
        }}/>
        <ActionBtn icon={MdDelete} onClick={() =>{
            handleDelete(params.row.id, params.row.image)
        }}/>
        <ActionBtn icon={MdRemove} onClick={() =>{
            router.push('product/${params.row.id}');
        }}/>
        </div>
    }
  }, 
];
 const handleToggleStock = useCallback((id:string, inStock: boolean) =>{
    axios.put('/api/product',{
        id,
        inStock: !inStock
    }).then((res) =>{
        toast.success('Product Status changed')
        router.refresh();
    }).catch((err) =>{
        toast.error('Oops! Something went wrong')
        console.log(err)
    });
 },[])

 const handleDelete = useCallback((id: string, image: any[]) => {
    toast('Deleting product, please wait!')

 const handleImageDelete = async () => {
    try {
        for(const item of image){
            const imageRef = ref(Storage, item.image)
            await deleteObject(imageRef)
            console.log('image deleted',item.image)
        }
    } catch {error} {
        return console.log('Deleting images error', error)
    }
 }

 await handleImageDelete()

 axios.delete('/api/products/${id}').then(
    (res) =>{
        toast.success('Product Status changed')
        router.refresh();
    }).catch((err)=> {
        toast.error("Failed to delete product");
        console.log(err);
    });

 },[])



return (
<div className="max-w-[1150px] m-auto">
    <div className="mb-4 mt-8">
        <Heading little="Manage Product" center/>
    </div>

   
    <div style={{height: 600,width: "100%"}}>
        <DataGrid
        rows={rows}
        columns={colums}
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
</div> );


export default ManageOrdersClient;