import styles from './Sidebar.module.css';
import cn from 'classnames';
// import Logo from '../logo.svg';
import { JSX } from 'react';
import { Menu } from '../menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            {/* <Logo className={styles.logo} /> */}
            {/* <Search /> */}
            <Menu />
        </div>
    );
};
