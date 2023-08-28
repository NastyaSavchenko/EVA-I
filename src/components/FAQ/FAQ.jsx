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
    title: "How does EVA-I work? ",
    accordionDetails:
      "EVA-I operates through advanced AI technology. It employs natural language processing and machine learning algorithms to understand user input. When a user interacts with EVA-I, the AI analyzes their query, processes it, and generates a relevant response. This enables EVA-I to provide accurate information, assist with tasks, and engage in meaningful conversations. In essence, EVA-I functions as a virtual assistant, using cutting-edge AI techniques to assist users, answer questions, and provide valuable support to businesses.",
  },
  {
    ariaControls: "panel2a-content",
    id: "panel2a-header",
    title: "How does EVA-I handle customer data and privacy? ",
    accordionDetails:
      "EVA-I is designed with a strong commitment to data privacy and security, employing measures that align with industry best practices and regulatory requirements.",
  },
  {
    ariaControls: "panel3a-content",
    id: "panel3a-header",
    title: "Are there customization options available for the AI's responses? ",
    accordionDetails:
      "EVA-I offers extensive response customization, allowing you to mold its answers to match your brand's voice. Customize templates, incorporate industry terms, and provide contextual guidance for tailored interactions that reflect your business uniquely.",
  },
  {
    ariaControls: "panel4a-content",
    id: "panel4a-header",
    title: "What industries is EVA-I most suited for? ",
    accordionDetails:
      "EVA-I suits a variety of industries, excelling in e-commerce, customer service, healthcare, hospitality, finance, technology, education, and retail. Its adaptability enhances engagement, automates tasks, and provides efficient support.",
  },
  {
    ariaControls: "panel5a-content",
    id: "panel5a-header",
    title: "Is there a free trial or demo available? ",
    accordionDetails:
      "EVA-I offers a free trial period, allowing you to experience its capabilities firsthand. You can explore its features, see how it integrates with your business, and evaluate its benefits before making a commitment. Don't miss the chance to discover how EVA-I can elevate your operations and customer interactions.",
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
