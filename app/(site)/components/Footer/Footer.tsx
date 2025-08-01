import React from 'react';
import { IFooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: IFooterProps) => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                OwLTop c 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#" target="_blank">
                Пользовательское соглашение
            </a>
            <a href="#" target="_blank">
                Политика конфиденуиальности
            </a>
        </footer>
    );
};

export default Footer;
