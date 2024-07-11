import PopupProps from "./PopupProps";
import styles from "./Popup.module.scss"

const Popup: React.FC<PopupProps> = ({active, setActive}) => {
    return (
        <div className={styles.popup} onClick={() => setActive(false)}>
            <div className={styles.popupContent} onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Popup;