import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <h2>Frequently Asked Questions</h2>
      <div>
        {accordionData.map((accordion) => {
          return (
            <Accordion key={accordion.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={accordion.panel1aContent}
                id={accordion.id}
              >
                <p>{accordion.title}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>{accordion.accordionDetails}</p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};
