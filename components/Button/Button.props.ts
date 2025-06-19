import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
type TButton = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;
export interface IButtonProps extends TButton {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}
