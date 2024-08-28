"use client";

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return <></>; // Might be content shift

    if (resolvedTheme === 'dark') {
        return (
            <button onClick={() => setTheme('light')}>
                <FiSun size={24} />
            </button>
        );
    }

    if (resolvedTheme === 'light') {
        return (
            <button onClick={() => setTheme('dark')}>
                <FiMoon stroke="black" size={24} />
            </button>
        );
    }
}