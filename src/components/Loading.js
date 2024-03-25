import React from "react";

export default function Loading() {
    return (
        <div className="w-full h-[50vh] flex justify-center items-center">
            <div>
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        </div>
    )
}