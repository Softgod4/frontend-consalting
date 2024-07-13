import styles from './PopupSale.module.scss';

interface StarProps {
    CompPercentageDiscount?: string;
}

const PopupSale: React.FC<StarProps> = ({ CompPercentageDiscount }) => {
    return (
        <span className={styles.main}>
            <p>{CompPercentageDiscount}</p>
        </span>
    );
};

export default PopupSale;
