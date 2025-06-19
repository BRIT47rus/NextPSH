import React from 'react';
import { ITagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
const Tag = ({
    children,
    className,
    href,
    size = 's',
    color = 'ghost',
    ...props
}: ITagProps) => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
                [styles.primary]: color === 'primary',
                [styles.ghost]: color === 'ghost',
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
            })}
            {...props}
        >
            {href ? <a href={href}> {children}</a> : <>{children}</>}
        </div>
    );
};

export default Tag;
