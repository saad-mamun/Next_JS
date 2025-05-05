"use client"

import { useState } from "react";

const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

export default function Color() {

    const [colors, setColors] = useState<string[]>(Array.from({length: 10}, generateColor ));

    const handleGenerate = () =>{
        setColors(Array.from({length: 10}, generateColor))
    }


    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
           <h1 className="text-2xl text-white font-bold mb-6">🐨 Color Plate Generator</h1>
           <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
            {
                colors.map((color, index) =>(
                    <div 
                    key={index}
                    className="w-20 h-20 rounded-lg shadow-lg"
                    style={{backgroundColor: color}}
                    title="color"
                    >
                        
                    </div>
                ))
            }
           </div>
           <button 
           type="button"
           onClick={handleGenerate}
           className="bg-blue-500 text-w px-4 py-2 rounded hover:blue-700 transition"
           >
            Generate Color Plate
           </button>
        </main>
    )

}