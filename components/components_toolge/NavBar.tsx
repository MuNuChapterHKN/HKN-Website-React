import styles from "@/styles/components/Header.module.css";
import { LangSelector } from './LangSelector';

export const Navbar = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="navbar">
      {children}
        <div className={styles.navbar}>
          <LangSelector />
        </div>
    </div>
  );
};