"use client";
import { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { faqs } from "@/lib/constants/faqs";

export default function FaqsDropdown() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            boxShadow: "none",
            borderRadius: 3,
            mb: 2,
            "&::before": { content: "none" }, // remove default MUI divider
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <RemoveIcon
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "50%",
                    fontSize: 20,
                  }}
                />
              ) : (
                <AddIcon
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "50%",
                    fontSize: 20,
                  }}
                />
              )
            }
            sx={{
              backgroundColor:
                expanded === `panel${index}`
                  ? "background.paper"
                  : "background.default",
              borderRadius: 3,
              px: { xs: 2, sm: 4 },
              py: 2,
              "& .MuiAccordionSummary-content": {
                my: 0,
              },
            }}
          >
            <Typography variant="body1" color="text.primary">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: { xs: 2, sm: 4 }, pt: 2, pb: 3 }}>
            <Typography variant="subtitle1" color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
