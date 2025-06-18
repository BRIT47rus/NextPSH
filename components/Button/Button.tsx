import React from 'react';
import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
export const Button = ({ appearance, children }: IButtonProps) => {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
        >
            {children}
        </button>
    );
};
