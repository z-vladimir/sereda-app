import Navigation from '@/components/Navigation/Navigation';
import Logo from '@/components/Logo/Logo';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <Navigation />

            <p className={styles.copyright}>© 2022. All rights reserved</p>
        </footer>
    );
};

export default Footer;
