import Accordion from "@mui/material/Accordion";
import { FormattedMessage } from "react-intl";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Plus from "../../assets/images/plus.svg";
import Minus from "../../assets/images/minus.svg";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { QuestionsList, QuestionsItem, AccordionText } from "./FAQ.styled";

const CustomExpandIcon = () => {
  return (
    <IconButton
      sx={{
        ".collapsIconWrapper": {
          display: "flex",
          justifyContent: "end",
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

const QuestionWrapp = {
  boxShadow: "none",
  background: "var(--dark)",

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
    title: <FormattedMessage id="FAQ_title_1" />,
    accordionDetails: <FormattedMessage id="FAQ_accordionDetails_1" />,
  },
  {
    ariaControls: "panel2a-content",
    id: "panel2a-header",
    title: <FormattedMessage id="FAQ_title_2" />,
    accordionDetails: <FormattedMessage id="FAQ_accordionDetails_2" />,
  },
  {
    ariaControls: "panel3a-content",
    id: "panel3a-header",
    title: <FormattedMessage id="FAQ_title_3" />,
    accordionDetails: <FormattedMessage id="FAQ_accordionDetails_3" />,
  },
  {
    ariaControls: "panel4a-content",
    id: "panel4a-header",
    title: <FormattedMessage id="FAQ_title_4" />,
    accordionDetails: <FormattedMessage id="FAQ_accordionDetails_4" />,
  },
  {
    ariaControls: "panel5a-content",
    id: "panel5a-header",
    title: <FormattedMessage id="FAQ_title_5" />,
    accordionDetails: <FormattedMessage id="FAQ_accordionDetails_5" />,
  },
];

export const FAQ = () => {
  const theme = useTheme();
  return (
    <section>
      <div className="container">
        <SectionTitle title={<FormattedMessage id="FAQ_title" />} />
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
                      color: "#FFF",
                      padding: "16px 24px",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: 1.4,

                      [theme.breakpoints.between("sm", "xl")]: {
                        padding: "32px",
                        fontSize: "32px",
                        lineHeight: 1.25,
                      },
                      [theme.breakpoints.up("xl")]: {
                        padding: "32px",
                        fontSize: "32px",
                        lineHeight: 1.25,
                      },
                    }}
                  >
                    <AccordionText>{accordion.title}</AccordionText>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      padding: "16px 24px",
                      fontSize: "16px",
                      lineHeight: "1.5",

                      [theme.breakpoints.between("sm", "xl")]: {
                        padding: "32px",
                      },
                      [theme.breakpoints.up("xl")]: {
                        padding: "32px",
                      },
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
