import styles from '@/styles/404.module.scss'
const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img src="/not_found.png" alt="not_found" className={styles.error__img}/>
            <div>Halaman tidak ditemukan</div>
        </div>
    )
}

export default Custom404