import styled from "styled-components";
import { IconButton } from "../buttons";
import {
  ArrowLineDown,
  BellRinging,
  CaretLeft,
  CaretRight,
  Paperclip,
  Phone,
  Star,
  VideoCamera,
  X,
} from "@phosphor-icons/react";
import { Avatar, StyledHorizontalLine, Typography } from "../common/common";
import { faker } from "@faker-js/faker";
import {
  handleToggleSidebar,
  handleUpdateToggleSidebar,
} from "@/store/services/app";
import { useSelector } from "@/store/store";
import Tabs from "../common/tabs";
import { useState } from "react";
import { handleGetDocsLogo } from "@/utils/common";
import Conversation from "../conversationArea/conversation";

const StyledContainer = styled("div")(({}) => ({
  minWidth: "350px",
  maxWidth: "350px",
  height: "calc(100vh - 70px)",
}));

// =====  contact info header container ======
const StyledProfileHeader = styled("div")(({}) => ({
  minHeight: "70px",
  boxShadow: "2px 0px 2px 0px #000",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 12,
  paddingLeft: 12,
}));

const ContactInfo = ({ infoType = "overview" }) => {
  return (
    <StyledProfileHeader>
      {infoType == "overview" ? (
        <IconButton
          size="29px"
          icon={<X size={20} />}
          noshadow
          onClick={() => {
            handleToggleSidebar();
          }}
        />
      ) : (
        <IconButton
          size="29px"
          icon={<CaretLeft size={20} />}
          noshadow
          onClick={() => {
            handleUpdateToggleSidebar("overview");
          }}
        />
      )}
      <Typography type="h5" color="gray">
        {infoType == "overview"
          ? "Contact Info"
          : infoType == "media"
          ? "Media, Docs, Links"
          : infoType == "starred"
          ? "Starred Message"
          : ""}
      </Typography>
    </StyledProfileHeader>
  );
};

// ========= content section ==========
const StyledSection = styled("div")(({ gap = 3 }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: 17,
  gap: gap,
}));

// ======== media images =========
const MediaImage = ({ imageList = [], style = {} }) => {
  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        gridTemplateColumns: "auto auto auto",
        ...style,
      }}
    >
      {imageList?.map((url) => (
        <img src={url} style={{ height: "80px", width: "80px" }} />
      ))}
    </div>
  );
};

// ===== main ======
const ProfileOverview = ({}) => {
  const { app } = useSelector((state) => ({
    app: state.app,
  }));

  return app?.sidebar?.open ? (
    <div>
      <ContactInfo infoType={app?.sidebar?.sidebarType} />
      <StyledContainer>
        {(() => {
          switch (app?.sidebar?.sidebarType) {
            case "overview":
              return <OverViewInfo />;
            case "media":
              return <MediaLinkDocs />;
            case "starred":
              return <StarredSection />;
            default:
              return <>No Profile View</>;
          }
        })()}
      </StyledContainer>
    </div>
  ) : null;
};

// ============ Profile Overview ===============
const OverViewInfo = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9fafe",
      }}
    >
      <StyledSection>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 45,
          }}
        >
          <div>
            <Avatar />
          </div>
          <div>
            <Typography type="h5">{"fake name"}</Typography>
            <Typography color="gray">+91 3483285797</Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Typography>
            <IconButton icon={<VideoCamera size={22} />} noshadow />
            Video
          </Typography>
          <Typography>
            <IconButton icon={<Phone size={22} />} noshadow />
            Audio
          </Typography>
        </div>
      </StyledSection>
      <StyledHorizontalLine width="90%" />
      <StyledSection>
        <Typography type="h5">About</Typography>
        <Typography type="p" bold>
          {faker.music.songName()}
        </Typography>
      </StyledSection>
      <StyledHorizontalLine width="90%" />
      <StyledSection>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Media, links and docs</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>201</Typography>{" "}
            <IconButton
              icon={<CaretRight />}
              noshadow
              onClick={() => {
                handleUpdateToggleSidebar("media");
              }}
            />
          </div>
        </div>
        <MediaImage
          imageList={[faker.image.url(), faker.image.url(), faker.image.url()]}
        />
      </StyledSection>
      <StyledHorizontalLine width="90%" />
      <StyledSection
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Star /> <Typography>Starred Message</Typography>
        </div>
        <div>
          {" "}
          <IconButton
            icon={<CaretRight />}
            noshadow
            onClick={() => {
              handleUpdateToggleSidebar("starred");
            }}
          />{" "}
        </div>
      </StyledSection>
      <StyledHorizontalLine width="90%" />
      <StyledSection
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <BellRinging /> <Typography>Mute Notification</Typography>
        </div>
        <div></div>
      </StyledSection>
      <StyledHorizontalLine width="90%" />
      <div></div>
    </div>
  );
};

// ============ MEDIA ===============
const MediaLinkDocs = ({}) => {
  const [currentIndexName, setCurrentIndexName] = useState("media");

  return (
    <div>
      <Tabs
        tabs={["Media", "Docs", "Links"]}
        currentIndexName={setCurrentIndexName}
      />
      <StyledSection style={{ maxHeight: "84vh" }}>
        {(() => {
          switch (currentIndexName?.toLowerCase()) {
            case "media":
              return (
                <MediaImage
                  style={{ overflowY: "scroll", maxHeight: "100%" }}
                  imageList={[
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                    faker.image.url(),
                  ]}
                />
              );
            case "docs":
              return (
                <Docs
                  docs={[
                    {
                      filename: "examplenumber1pdffileishere.pdf",
                      filetype: "pdf",
                      downloadUrl: "",
                    },
                    {
                      filename: "example.pdf",
                      filetype: "pdf",
                      downloadUrl: "",
                    },
                    {
                      filename: "example.pdf",
                      filetype: "pdf",
                      downloadUrl: "",
                    },
                    {
                      filename: "example.xml",
                      filetype: "pdf",
                      downloadUrl: "",
                    },
                    {
                      filename: "example.docx",
                      filetype: "excel",
                      downloadUrl: "",
                    },
                    {
                      filename: "example.pdf",
                      filetype: "image",
                      downloadUrl: "",
                    },
                    {
                      filename: "example.pdf",
                      filetype: "pdf",
                      downloadUrl: "",
                    },
                    {
                      filename: "example.pdf",
                      filetype: "pdf",
                      downloadUrl: "",
                    },
                  ]}
                />
              );
            case "links":
              return (
                <Links
                  links={[
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                    {
                      url: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/?couponCode=ST19MT61724",
                      urlName: "www.Udemy.com",
                    },
                  ]}
                />
              );
            default:
              return <>No Tab</>;
          }
        })()}
      </StyledSection>
    </div>
  );
};

const Links = ({ links = [] }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {links?.map((link) => (
        <LinkSection urlName={link.urlName} url={link.url} />
      ))}
    </div>
  );
};

const LinkSection = ({ urlName = "", url = "" }) => {
  return (
    <StyledSection style={{ padding: 1 }}>
      <div
        style={{
          backgroundColor: "#E0F0F0",
          padding: 5,
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          gap: 17,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "45px",
            width: "45px",
            backgroundColor: "#D9D8D8",
            borderRadius: 7,
            padding: 2,
          }}
        >
          <Paperclip size={35} />
        </div>
        <div>
          <Typography link>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </Typography>
          <Typography type="p">{urlName}</Typography>
        </div>
      </div>
    </StyledSection>
  );
};

// ============ Docs ===============
const Docs = ({ docs = [] }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {docs?.map((doc) => (
        <DocSection
          downloadUrl={doc.downloadUrl}
          filename={doc.filename}
          filetype={doc.filetype}
        />
      ))}
    </div>
  );
};

const DocSection = ({ filename = "", filetype = "", downloadUrl = "" }) => {
  return (
    <StyledSection style={{ padding: 5 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
          backgroundColor: "#fff",
          padding: 7,
          borderRadius: 7,
        }}
      >
        <div
          style={{
            backgroundColor: "#D9D8D8",
            height: "100px",
            borderRadius: 7,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 17, alignItems: "center" }}>
            <div>
              <img
                src={handleGetDocsLogo(filetype)}
                alt=""
                height={"30px"}
                width={"30px"}
              />
            </div>
            <Typography>
              {filename.length > 20
                ? filename.slice(0, 10) + "..." + filename.slice(-5)
                : filename}
            </Typography>
          </div>
          <IconButton noshadow icon={<ArrowLineDown size={25} />} />
        </div>
      </div>
    </StyledSection>
  );
};

// ============ Starred ===============
const StarredSection = ({}) => {
  return <Conversation isMenu={false} />;
};

export default ProfileOverview;
