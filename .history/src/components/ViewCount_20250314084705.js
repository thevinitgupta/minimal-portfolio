"use client"; // For App Router, remove for Pages Router
import { useEffect, useState } from "react";

export default function ViewCounter() {
    const [views, setViews] = useState(0);
    const [displayedViews, setDisplayedViews] = useState(0);

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const res = await fetch("/api/views");
                const data = await res.json();
                setViews(data.views || 100);
            } catch (error) {
                console.error("Failed to fetch views:", error);
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
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
            👀 {displayedViews}
        </div>
    );
}
