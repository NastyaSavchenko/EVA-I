import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Plus from "../../assets/images/plus.svg";
import Minus from "../../assets/images/minus.svg";
import { IconButton } from "@mui/material";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { QuestionsList, QuestionsItem } from "./FAQ.styled";

const CustomExpandIcon = () => {
  return (
    <IconButton
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
        <img src={Minus} alt="Close FAQ" />
      </div>
      <div className="collapsIconWrapper">
        <img src={Plus} alt="Open FAQ" />
      </div>
    </IconButton>
  );
};

// const QuestionWrapp = {
//   boxShadow: "none",
//   background: "var(--dark)",

//   "&:first-of-type, &:last-of-type": {
//     borderRadius: "12px",
//     color: "var(--white)",
//     backgroundColor: "transparent",
//     border: "1px solid var(--primary-purple)",

//     "&:hover, &:active": {
//       border: "2px solid var(--primary-purple)",
//     }
//   },

//   "&:before": {
//     content: "none",
//   },
// };

const QuestionWrapp = {
  boxShadow: "none",
  background: "var(--dark)",

  // ".Mui-focused": {
  //   boxShadow: "0px 0px 15px 2px var(--primary-purple) !important",
  // },

  "&:first-of-type, &:last-of-type": {
    borderRadius: "12px",
    color: "var(--white)",
    backgroundColor: "transparent",
    border: "1px solid var(--primary-purple)",
    transition: "box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

    "&:hover": {
      boxShadow: " 0px 0px 15px 2px var(--primary-purple)",
    },
  },

  "&:before": {
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
              <QuestionsItem key={accordion.id} tabIndex={0}>
                <Accordion sx={QuestionWrapp}>
                  <AccordionSummary
                    
                    expandIcon={<CustomExpandIcon />}
                    aria-controls={accordion.ariaControls}
                    id={accordion.id}
                    sx={{
                      padding: "32px",
                      fontSize: "32px",
                      fontWeight: 600,
                      lineHeight: 1.37,
                    }}
                  >
                    <p>{accordion.title}</p>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      padding: "32px 32px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
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
