import { Outlet } from "react-router-dom";
import styles from "./demo2.module.less";
import { Bottom } from "../Buttons";
import { Header } from "./Header";

const Main = () => {
  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <Header Text="Header" />
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
};

export default Main;
