import Calendar from "../../assets/calendar-2.svg";
import Message from "../../assets/message-text.svg";
import Notification from "../../assets/notification.svg";
import UserAvatar from "../../assets/UserAvatar.png";
import Logo from "../../assets/Logo.png";
import SearchIcon from "../../assets/searchIcon.svg";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
        <div className={styles.separator} />
        <p>Панель</p>
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <img className={styles.searchIcon} src={SearchIcon} alt="search" />
          <input type="search" placeholder="Поиск товаров, складов и другого" />
        </div>
        <button type="button">+</button>
        <div className={styles.separator} />
        <div className={styles.pages}>
          <img src={Calendar} alt="calendar" />
          <img src={Message} alt="calendar" />
          <img src={Notification} alt="calendar" />
        </div>
        <div className={styles.separator} />
        <div className={styles.user}>
          <img src={UserAvatar} alt="user avatar" />
          <div>
            <p>John Kay</p>
            <p className={styles.position}>СТО "Клубнички"</p>
          </div>
        </div>
      </div>
    </header>
  );
}
