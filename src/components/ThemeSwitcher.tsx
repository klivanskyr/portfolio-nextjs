"use client";

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return <></>; // Might be content shift

    if (resolvedTheme === 'dark') {
        return (
            <button
                onClick={() => setTheme('light')}
                className="fixed bottom-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
            >
                <FiSun size={24} />
            </button>
        );
    }

    if (resolvedTheme === 'light') {
        return (
            <button
                onClick={() => setTheme('dark')}
                className="fixed bottom-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
            >
                <FiMoon stroke="black" size={24} />
            </button>
        );
    }
}