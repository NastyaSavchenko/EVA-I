import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { QuestionsList, QuestionsItem } from "./FAQ.styled";

const CustomExpandIcon = () => {
  const iconStyles = {
    // color: "var(--primary-gradient)",
    color: "violet",
    width: { xs: "20px", md: "40px" },
    height: { xs: "20px", md: "40px" },
  };
  return (
    <Box
      sx={{
        ".collapsIconWrapper": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <div className="expandIconWrapper">
        <CloseIcon sx={iconStyles} />
      </div>
      <div className="collapsIconWrapper">
        <AddIcon sx={iconStyles} />
      </div>
    </Box>
  );
};

const QuestionWrapp = {
  border: "1px solid #A6A6A6",
  boxShadow: "none",

  "&:first-of-type": {
    borderRadius: "0",
    color: "var(--white)",
    backgroundColor: "transparent",
    border: "none",
  },
  "&:last-of-type": {
    borderRadius: "0",
    color: "var(--white)",
    backgroundColor: "transparent",
    border: "none",
  },
  "&:before ": {
    content: "none",
  },
};

const accordionData = [
  {
    ariaControls: "panel1a-content",
    id: "panel1a-header",
    title: "[Question] Neque porro quisquam est? ",
    accordionDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    ariaControls: "panel2a-content",
    id: "panel2a-header",
    title: "[Question] Neque porro quisquam est? ",
    accordionDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    ariaControls: "panel3a-content",
    id: "panel3a-header",
    title: "[Question] Neque porro quisquam est? ",
    accordionDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    ariaControls: "panel4a-content",
    id: "panel4a-header",
    title: "[Question] Neque porro quisquam est? ",
    accordionDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    ariaControls: "panel5a-content",
    id: "panel5a-header",
    title: "[Question] Neque porro quisquam est? ",
    accordionDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export const FAQ = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={"Frequently Asked Questions"} />
        <QuestionsList>
          {accordionData.map((accordion) => {
            return (
              <QuestionsItem key={accordion.id}>
                <Accordion sx={QuestionWrapp}>
                  <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls={accordion.panel1aContent}
                    id={accordion.id}
                    sx={{
                      padding: "32px",
                      fontSize: "32px",
                      fontWeight: 600,
                      lineHeight: 1.37,
                      background: "var(--dark)",
                      borderRadius: "12px",
                      border: "1px solid var(--primary-purple)",
                    }}
                  >
                    <p>{accordion.title}</p>
                  </AccordionSummary>
                  <AccordionDetails sx={{
                    padding: "32px 32px",
                    fontSize: "24px"
                  }}>
                    <p>{accordion.accordionDetails}</p>
                  </AccordionDetails>
                </Accordion>
              </QuestionsItem>
            );
          })}
        </QuestionsList>
      </div>
    </section>
  );
};
