import Container  from "@/app/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getCurrentUser from "@/actions/getCurrentUser";
import getProducts from "@/actions/getProducts";
import NullData from "@/app/components/NullData";
import getOrders from "@/actions/getOrders";

const ManageProducts = async() => {

  const orders = await getOrders()
  const currentUser = await getCurrentUser()

  if (!currentUser || currentUser.role != "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return <div className="pt-8">
    <Container>
      <ManageProductsClient orders = {orders}/>
    </Container>
  </div>;
};

export default ManageOrders;