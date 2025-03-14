"use client"; // For App Router, remove for Pages Router
import { useEffect, useState } from "react";
import { PiEyeBold } from "react-icons/pi";

export default function ViewCounter() {
    const [views, setViews] = useState(0);
    const [displayedViews, setDisplayedViews] = useState(0);

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const res = await fetch("/api/views");
                const data = await res.json();
                console.log("Views : "+data.pageviews)
                setViews(data.pageviews || 100);
            } catch (error) {
                console.error("Failed to fetch views:", error);
                setViews(100);
            }
        };

        fetchViews();
    }, []);

    // Animate counter from 0 to views
    useEffect(() => {
        let start = 0;
        if (views === 0) return;
        const duration = 2000; // 2 seconds
        const increment = Math.ceil(views / 50); // Smooth steps

        const interval = setInterval(() => {
            start += increment;
            if (start >= views) {
                setDisplayedViews(views);
                clearInterval(interval);
            } else {
                setDisplayedViews(start);
            }
        }, duration / 50); // Adjust speed based on total views

        return () => clearInterval(interval);
    }, [views]);

    return (
        <div className="fixed top-4 right-4 bg-transparent min-w-[100px] flex gap-4 items-center 
        justify-between text-zinc-400 border hover:border-zinc-400/50 border-zinc-600 px-4 py-1 
        rounded-full shadow-lg font-semibold">
            <PiEyeBold /> {displayedViews}
        </div>
    );
}
