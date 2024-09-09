// app/page.tsx
import React from "react";
import ColorPicker from "../app/components/ColorPicker";

const HomePage: React.FC = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center ">
      <ColorPicker />
    </div>

    
  );
};

export default HomePage;
