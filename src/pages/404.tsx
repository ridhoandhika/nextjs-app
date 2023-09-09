import styles from "@/styles/404.module.scss";
import Image from "next/image";
const Custom404 = () => {
  return (
    <div className={styles.error}>
      {/* <img src="/not_found.png" alt="not_found" className={styles.error__img}/> */}

      
      {/* optimasi menggunakan feature dari nextjs */}
      <Image
        src="/not_found.png"
        alt="not_found"
        width={600}
        height={600}
        className={styles.error__img}
      />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
};

export default Custom404;
