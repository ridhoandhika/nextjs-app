import { ProductType } from "@/types/product/product.type";
import styles from "./DetailProduct.module.scss";

const DetailProductView = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h3 className={styles.productDetail__title}>Detail Product</h3>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={products.image && products.image} alt={products.name} />
        </div>
        <h4 className={styles.productDetail__name}>{products.name}</h4>
        <p className={styles.productsDetail__category}>{products.category}</p>
        <p className={styles.productsDetail__price}>
          {products.price &&
            products.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProductView;
