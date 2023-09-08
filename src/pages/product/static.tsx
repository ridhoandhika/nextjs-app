//static side generation

import ProductView from "@/views/product";
import { ProductType } from "../../types/product/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  //fecth data
  const res = await fetch("http://127.0.0.1:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
    // retry per periode yang di tentukan
    revalidate: 10 //detik
  };
}
