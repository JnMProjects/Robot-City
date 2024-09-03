"use client"

import React, { useEffect, useState } from 'react';
import { cn } from './twm';
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

const ThemeToggleButton: React.FC<{ size?: number }> = ({ size = 5 }) => {
    const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
    
    useEffect(() => {
        if (storedTheme === 'dark') {
            document.body.classList.add('dark');
            setToggle(true);
        } else {
            document.body.classList.remove('dark');
            setToggle(false);
        }
    }, [storedTheme])

    const [isToggled, setToggle] = React.useState(false);

    function toggle() {
        setToggle(!isToggled);
        const newTheme = isToggled ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
    }


    const num = String(size)
    return (
        <Within
            duration={750}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            toggled={isToggled}
            toggle={toggle}
            reversed
            className={`h-${num} w-${num}`}
        />
    );
};

ThemeToggleButton.displayName = 'ThemeToggleButton';

export { ThemeToggleButton }