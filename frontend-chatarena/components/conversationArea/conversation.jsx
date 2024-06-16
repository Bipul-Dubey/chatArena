import styled from "styled-components";
import { IconButton } from "../buttons";
import { CaretDown } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { Chat_History } from "@/constants/dummyData";
import {
  DocumentMessage,
  ImageMessage,
  LinkMessage,
  ReplyMessage,
  TextMesage,
  TimeLine,
} from "./messagesComponent";

const StyledConversationContainer = styled("div")(({}) => ({
  minHeight: "350px",
  height: "100%",
  maxHeight: "100%",
  padding: 17,
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.5px",
  },
  display: "flex",
  flexDirection: "column",
  gap: 12,
}));

export const ScrollDown = ({ scrollToBottom = () => {} }) => {
  return (
    <div style={{ position: "absolute", zIndex: 1000, bottom: 100, right: 10 }}>
      <IconButton
        backgroundColor="#fff"
        icon={<CaretDown size={24} />}
        onClick={(e) => {
          e.stopPropagation();
          scrollToBottom();
        }}
      />
    </div>
  );
};

const Conversation = () => {
  const parentRef = useRef();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const checkScroll = () => {
    if (parentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = parentRef.current;
      setIsButtonVisible(
        Math.ceil(scrollTop + clientHeight) < scrollHeight - 100
      );
    }
  };

  const scrollToBottom = () => {
    if (parentRef.current) {
      parentRef.current.scrollTop = parentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const parentElement = parentRef.current;
    if (parentElement) {
      parentElement.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (parentElement) {
        parentElement.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <>
      {" "}
      {isButtonVisible ? <ScrollDown scrollToBottom={scrollToBottom} /> : null}
      <StyledConversationContainer ref={parentRef}>
        {Chat_History?.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine divider={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <ImageMessage chat={el} />;
                case "doc":
                  return <DocumentMessage chat={el} />;
                case "link":
                  return <LinkMessage chat={el} />;
                case "reply":
                  return <ReplyMessage chat={el} />;
                default:
                  return <TextMesage chat={el} />;
              }
            default:
              return <>Error</>;
          }
        })}
      </StyledConversationContainer>
    </>
  );
};

export default Conversation;
