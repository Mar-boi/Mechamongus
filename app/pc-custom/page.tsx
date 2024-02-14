import getProducts, { IProductParams } from "@/actions/getProducts";
import Container from "../components/Container";
import Pc_Custom from "./Pc_Custom";

interface HomeProps {
  searchParams: IProductParams;
}

const Pc_build = async ({ searchParams }: HomeProps) => {
  return (
    <Container>
      <Pc_Custom searchParams={searchParams}></Pc_Custom>
    </Container>
  );
};

export default Pc_build;
