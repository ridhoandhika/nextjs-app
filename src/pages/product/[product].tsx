import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProductView from "@/views/detailProduct";
import { ProductType } from "@/types/product/product.type";

const DetailProductPage = ({ product }: {product: ProductType }) => {
  const { query } = useRouter();
  // console.log(query.product);
  // client side
  const { data, error, isLoading } = useSWR(
    `/api/product/${query.product}`,
    fetcher
  );
  return (
    <div>
      {/* client side render */}
      <DetailProductView products={isLoading ? {} : data.data} />
      {/* server side render */}
      {/* <DetailProductView products={product}/> */}
    </div>
  );
};



export default DetailProductPage;

// export async function getServerSideProps({ params }: { params: {product: string}}) {
//   const res = await fetch(`http:127.0.0.1:3000/api/product/${params.product}`);
//   const response = await res.json();
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
