import Container from "@/app/components/Container";
import FormWarp from "@/app/components/FormWrap";
import AddProductForm from "./AddProductFrom";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role != "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <Container>
      <FormWarp>
        <AddProductForm />
      </FormWarp>
    </Container>
  );
};

export default AddProducts;
