import Navigation from '@/components/Navigation/Navigation';

import Logo from '@/components/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo isSmall />
            <Navigation isHeader />
        </header>
    );
};

export default Header;
