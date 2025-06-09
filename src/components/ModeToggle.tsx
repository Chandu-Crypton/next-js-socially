"use client";

import * as React from "react";
import { MoonIcon, Scale, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "Light" : "dark")}
    >
      <SunIcon
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 translate-all dark:rotate-90
     dark:scale-0"
      />
      <MoonIcon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 translate-all dark:rotate-0
     dark:scale-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
