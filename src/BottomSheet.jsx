import React, { useRef, useState, useEffect } from "react";
import "./BottomSheet.css";

const snapPoints = [90, 50, 0]; 

const BottomSheet = () => {
    const sheetRef = useRef(null);
    const [offset, setOffset] = useState(50); 
    const dragging = useRef(false);
    const startY = useRef(0);
    const startOffset = useRef(0);

    const applySpring = (targetOffset) => {
        let position = offset;
        let velocity = 0;
        const stiffness = 0.2;
        const damping = 0.8;

        const step = () => {
            const displacement = targetOffset - position;
            const springForce = stiffness * displacement;
            velocity = damping * (velocity + springForce);
            position += velocity;

            setOffset(position);

            if (Math.abs(displacement) > 0.5 || Math.abs(velocity) > 0.5) {
                requestAnimationFrame(step);
            } else {
                setOffset(targetOffset);
            }
        };

        requestAnimationFrame(step);
    };

    const handleDragStart = (e) => {
        dragging.current = true;
        startY.current = e.touches ? e.touches[0].clientY : e.clientY;
        startOffset.current = offset;
    };

    const handleDragMove = (e) => {
        if (!dragging.current) return;
        const currentY = e.touches ? e.touches[0].clientY : e.clientY;
        const deltaY = currentY - startY.current;
        const deltaPercent = (deltaY / window.innerHeight) * 100;
        const newOffset = Math.min(90, Math.max(0, startOffset.current + deltaPercent));
        setOffset(newOffset);
    };

    const handleDragEnd = () => {
        dragging.current = false;
        const closest = snapPoints.reduce((prev, curr) =>
            Math.abs(curr - offset) < Math.abs(prev - offset) ? curr : prev
        );

        applySpring(closest);
    };

    useEffect(() => {
        const sheet = sheetRef.current;

        sheet.addEventListener("touchstart", handleDragStart);
        sheet.addEventListener("touchmove", handleDragMove);
        sheet.addEventListener("touchend", handleDragEnd);
        sheet.addEventListener("mousedown", handleDragStart);
        window.addEventListener("mousemove", handleDragMove);
        window.addEventListener("mouseup", handleDragEnd);

        return () => {
            sheet.removeEventListener("touchstart", handleDragStart);
            sheet.removeEventListener("touchmove", handleDragMove);
            sheet.removeEventListener("touchend", handleDragEnd);
            sheet.removeEventListener("mousedown", handleDragStart);
            window.removeEventListener("mousemove", handleDragMove);
            window.removeEventListener("mouseup", handleDragEnd);
        };
    }, [offset]);

    return (
        <div
            ref={sheetRef}
            className="bottom-sheet"
            style={{
                transform: `translateY(${offset}%)`,
                transition: dragging.current ? "none" : "transform 0s", // Disable CSS transition (we’re using JS spring)
            }}
        >
            <div className="drag-handle" />
            <div className="sheet-content">
                React Spring Bottom Sheet
                </div>
        </div>
    );
};

export default BottomSheet;
