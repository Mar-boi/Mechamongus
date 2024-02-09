'use client'

import { Products } from "@prisma/client";
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from "@/utils/formatPrice";
import { MdCached, MdDelete, MdDone, MdRemove } from "react-icons/md";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { error } from "console";
import firebaseApp from "@/libs/firebase";

interface ManageProductsClientProps{
    products: Products[]
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({products
}) => {
    const router = useRouter();
    const Storage = getStorage(firebaseApp);
    let rows: any = [];
    if(products){
        rows = products.map((product)=> {
            return  {
                id: product.id,
                name: product.name,
                price: formatPrice(product.price),
                category: product.brand,
                inStock: product.inStock,
                image: product.images,
            };
        } );
    }

    const columns: GridColDef[] = [
        {field: 'id',headerName: 'ID', width: 220},
        {field: 'name',headerName: 'Name', width: 220}
        {field: 'price',headerName: 'Price(USD)', width: 100, renderCell :
        (params) =>{
            return(<div>{params.row.price}</div>
            );
        },
    },
    {field: "cetegory",headerName: "Category",width: 100}, 
    {field: "name",headerName: "Brand",width: 100}, 
    {field: "inStock",headerName: "inStock",width: 120,renderCell: (params)
    =>{
        return (
            <div>
                {params.row.inStock === true ?(
                <Status
                text="in stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
                /> ) : (
                <Status
                text="out stock"
                icon={MdDone}
                bg="bg-rose-200"
                color="text-teal-700"
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


export default ManageProductsClient;