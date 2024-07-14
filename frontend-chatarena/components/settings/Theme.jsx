import React, { useState } from "react";
import { Typography } from "../common/common";
import { Button, RadioButton } from "../buttons";
import { THEME_OPTIONS } from "@/constants/appConstant";

function ThemeSelection() {
  const [theme, setTheme] = useState(THEME_OPTIONS);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        minWidth: "250px",
      }}
    >
      <Typography type="h3">Choose Theme</Typography>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {theme?.map((item) => (
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <RadioButton
              checked={item?.isChecked}
              onClick={(e) => {
                setTheme((prevState) =>
                  prevState?.map((th) => {
                    if (th.label == item.label) {
                      return {
                        ...th,
                        isChecked: true,
                      };
                    } else {
                      return {
                        ...th,
                        isChecked: false,
                      };
                    }
                  })
                );
              }}
            />
            <Typography type="h4">{item.label}</Typography>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          gap: 7,
        }}
      >
        <Button type="secondary">Cancel</Button>
        <Button>Apply</Button>
      </div>
    </div>
  );
}

export default ThemeSelection;
