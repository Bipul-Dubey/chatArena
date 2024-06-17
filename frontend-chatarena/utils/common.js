export const handleGetDocsLogo = (fileType = "image") => {
  switch (fileType?.toLowerCase()) {
    case "image":
      return "/logos/imageLogo.png";
    case "pdf":
      return "/logos/pdfLogo.png";
    case "excel":
      return "/logos/excelLogo.png";
    default:
      break;
  }
};
