import styles from "./Loader.module.css";

function Loader() {
  return (
    <section className="flex items-center h-full ">
      <div className={`${styles.dotSpinner} mx-auto w-[4rem] h-[4rem]`}>
        <div className={styles.dotSpinnerDot}></div>
        <div className={styles.dotSpinnerDot}></div>
        <div className={styles.dotSpinnerDot}></div>
        <div className={styles.dotSpinnerDot}></div>
        <div className={styles.dotSpinnerDot}></div>
        <div className={styles.dotSpinnerDot}></div>
        <div className={styles.dotSpinnerDot}></div>
        <div className={styles.dotSpinnerDot}></div>
      </div>
    </section>
  );
}

export default Loader;
