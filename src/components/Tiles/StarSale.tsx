import styles from './StarSale.module.scss';

interface StarProps {
    CompPercentageDiscount: string;
}

const StarSale: React.FC<StarProps> = ({ CompPercentageDiscount }) => {
    return (
        <span className={styles.main}>
            <p>{CompPercentageDiscount}</p>
        </span>
    );
};

export default StarSale;
