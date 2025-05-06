import React from "react";



export default function MarketingLayout({
  children,
}: {children: 
   React.ReactNode
}) {
  return (
    <html lang="en">
      <body>  
           <header className="p-4 bg-blue-400 text-2xl text-white">
        Header
      </header> 
        {children}
      </body>
    </html>
  );
}
