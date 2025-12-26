"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function DarkModeToggler() {
    const { theme, setTheme } = useTheme();

    return (
        <Button variant="default" size="icon" onClick={() => {
            if (theme === 'light') {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        }} title={(theme === 'light' ? 'Dark Mode' : 'Light Mode')}>
            {theme === "light"
                ? <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
                : <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            }
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
