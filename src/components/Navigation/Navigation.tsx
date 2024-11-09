import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Route } from '@/types';
import { routes } from '@/mocks/routes';

import styles from './Navigation.module.scss';

interface NavigationProps {
    isHeader?: boolean;
}

const Navigation = ({ isHeader = false }: NavigationProps) => {
    return (
        <nav className={styles.navigation}>
            <ul
                className={classNames(styles.list, {
                    [styles.header]: isHeader,
                })}
            >
                {routes.map((route: Route) => (
                    <li key={route.name}>
                        <NavLink
                            end
                            to={route.path}
                            className={({ isActive }) =>
                                classNames(styles.link, {
                                    [styles.active]: isActive,
                                    [styles.header]: isHeader,
                                })
                            }
                        >
                            {route.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
