import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface ITagProps
    extends DetailedHTMLProps<
        HtmlHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
}
