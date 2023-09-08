//server side rendering

import ProductView from "@/views/product";
import { ProductType } from "../../types/product/product.type";

const ProductPageServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPageServer;

// dipaanggil setial melakukan request
export async function getServerSideProps() {
  //fecth data
  const res = await fetch("http://127.0.0.1:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
