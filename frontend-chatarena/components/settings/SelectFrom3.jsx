import { useState } from "react";
import { RadioButton } from "../buttons";
import { Container, StyledHorizontalLine, Typography } from "../common/common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { CaretLeft } from "@phosphor-icons/react";
import { handleUpdateLeftBarSubType } from "@/store/services/app";
import { LEFT_BAR } from "@/constants/appConstant";

function SelectFrom3({
  feature = "",
  message = "",
  getUpdatedState = () => {},
}) {
  const [settingOptions, setSettingOptions] = useState([
    {
      label: "Everyone",
      checked: true,
    },
    {
      label: "My Contacts",
      checked: false,
    },
    {
      label: "Nobody",
      checked: false,
    },
  ]);

  return (
    <>
      <OpenLefBarHeader
        name={feature}
        icon={<CaretLeft />}
        onClick={() => {
          handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.PRIVACY);
        }}
      />
      <Container>
        <Typography type="h5" color="#4172ef" style={{ padding: 12 }}>
          {message}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: 20,
          }}
        >
          {settingOptions?.map((option, index) => (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 20 }}>
                <RadioButton
                  key={option}
                  checked={option.checked}
                  onClick={() => {
                    const updatedSetting = settingOptions?.map((setting) => {
                      if (setting.label == option.label) {
                        return {
                          ...setting,
                          checked: true,
                        };
                      } else {
                        return {
                          ...setting,
                          checked: false,
                        };
                      }
                    });
                    setSettingOptions(updatedSetting);
                    getUpdatedState(updatedSetting);
                  }}
                />
                <Typography type="h5">{option.label}</Typography>
              </div>
              {settingOptions?.length - 1 != index && (
                <StyledHorizontalLine width={"90%"} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default SelectFrom3;
