import { useState } from "react";
import { Typography } from "./common";

const Tabs = ({
  tabs = [],
  currentIndex = 0,
  setCurrentIndex = () => {},
  currentIndexName = () => {},
}) => {
  const [tabIndex, setTabIndex] = useState(currentIndex || 0);

  const handleChangeTabIndex = (index) => {
    setTabIndex(index);
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "5px",
        boxShadow: "0px 0.5px 0px 0px #000",
      }}
      key={"common-tab"}
    >
      {tabs?.map((tab, tabIdx) => {
        return (
          <div
            style={{
              padding: 5,
              borderRight: tabIdx >= tabs.length - 1 ? "" : "4px solid #fff",
              borderBottom: tabIdx == tabIndex ? "3px solid #40C7F1" : "",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              handleChangeTabIndex(tabIdx);
              currentIndexName(tab);
            }}
          >
            <Typography type="h5" link={tabIdx == tabIndex}>
              {tab}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
