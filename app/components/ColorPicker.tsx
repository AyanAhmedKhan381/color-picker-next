"use client"; // Add this line at the top

import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import tinycolor from "tinycolor2";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("#aabbcc");

  useEffect(() => {
    const primaryColor = tinycolor(color);
    const gradientColor1 = primaryColor.lighten(30).toHexString();
    const gradientColor2 = primaryColor.darken(30).toHexString();

    document.body.style.background = `linear-gradient(45deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`;
  }, [color]);

  const getSuggestions = (primary: string) => {
    const primaryColor = tinycolor(primary);
    const secondaryColor = primaryColor.complement().toHexString();
    const lightBackground = primaryColor.lighten(30).toHexString();
    const darkBackground = primaryColor.darken(30).toHexString();
    const accentColor = primaryColor.triad()[2].toHexString(); // Using triadic color for accent

    return {
      secondaryColor,
      lightBackground,
      darkBackground,
      accentColor,
    };
  };

  const suggestions = getSuggestions(color);

  const getContrastingTextColor = (bgColor: string) => {
    return tinycolor(bgColor).isLight() ? "#000" : "#fff";
  };

  return (
    <div className="container">
      <div className="left">
        <HexColorPicker className="picker" color={color} onChange={setColor} />
        <p className="selected">Selected Color: {color}</p>
      </div>
      <div
        className="suggestions"
        style={{
          backgroundColor: suggestions.lightBackground,
          color: getContrastingTextColor(suggestions.lightBackground),
        }}
      >
        <div className="suggestion">
          <div
            className="color-box"
            style={{ backgroundColor: suggestions.secondaryColor }}
          ></div>
          <p>Secondary Color: {suggestions.secondaryColor}</p>
        </div>
        <div className="suggestion">
          <div
            className="color-box"
            style={{ backgroundColor: suggestions.lightBackground }}
          ></div>
          <p>Light Background: {suggestions.lightBackground}</p>
        </div>
        <div className="suggestion">
          <div
            className="color-box"
            style={{ backgroundColor: suggestions.darkBackground }}
          ></div>
          <p>Dark Background: {suggestions.darkBackground}</p>
        </div>
        <div className="suggestion">
          <div
            className="color-box"
            style={{ backgroundColor: suggestions.accentColor }}
          ></div>
          <p>Accent Color: {suggestions.accentColor}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
