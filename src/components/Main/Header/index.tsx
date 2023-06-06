import styles from "./index.module.css";
import { MyDrawer } from "../../Drawer";
export const Header: React.FC<{ Text: string }> = ({ Text }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.left}></div>
      <div className={styles.mid}>{Text}</div>
      <div className={styles.right}>
        <MyDrawer />
      </div>
    </div>
  );
};
