import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Logo.module.scss';

interface LogoProps {
    isSmall?: boolean;
}

const Logo = ({ isSmall = false }: LogoProps) => {
    return (
        <Link
            to="/"
            className={classNames(styles.logo, { [styles.small]: isSmall })}
        >
            Logo
        </Link>
    );
};

export default Logo;
