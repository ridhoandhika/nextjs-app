import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "@/views/product";
import useSWR from "swr"
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fecting data 
  const { data, error, isLoading } = useSWR(
    "/api/product",
    fetcher
  );

  // console.log(data);
  

  //hook/fect data dari backend
  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data}/>
    </div>
  );
};

export default ProductPage;
