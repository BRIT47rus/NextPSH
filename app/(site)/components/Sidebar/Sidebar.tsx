'use client';
import React, { useContext, useState, useEffect, createContext } from 'react';
import { ISidebarProps } from './Sidebar.props';
import { Menu } from '../menu';
import { getMenu } from '@/api/menu';
import { MenuItem } from '@/interfaces/menu.interface';

const SidebarContext = createContext<MenuItem[] | null>(null);

export const useSidebarCTX = () => {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebarCTX must be used within a SidebarProvider');
    }
    return context;
};

export const SidebarProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [menuData, setMenuData] = useState<MenuItem[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getMenu(0);
                setMenuData(data);
            } catch (err) {
                console.error('Failed to fetch menu:', err);
                setError('Failed to load menu data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchMenu();
    }, []);

    return (
        <SidebarContext.Provider value={menuData}>
            {isLoading && <div>Загрузка меню...</div>}
            {error && <div>Ошибка: {error}</div>}
            {!isLoading && !error && children}
        </SidebarContext.Provider>
    );
};

const Sidebar = ({ ...props }: ISidebarProps) => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};

export default Sidebar;
