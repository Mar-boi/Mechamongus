import Container from "@/app/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getCurrentUser from "@/actions/getCurrentUser";
import getProducts from "@/actions/getProducts";
import NullData from "@/app/components/NullData";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role != "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <Container>
      <ManageProductsClient products={products} />
    </Container>
  );
};

export default ManageProducts;
