import styles from '../Container/Container.module.scss';

const Container: React.FC<{ children: any }> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Container;
