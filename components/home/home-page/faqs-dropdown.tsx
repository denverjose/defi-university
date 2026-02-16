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
      setExpanded(newExpanded ? panel : false); // Set the panel that is expanded
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
            borderRadius: 4,
            "&.Mui-expanded": {
              backgroundColor: "background.paper",
              margin: 0,
            },
            "&::before": {
              content: "none", // Remove the content of the ::before pseudo-element
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <RemoveIcon
                  sx={{
                    border: "1px solid ",
                    borderRadius: 100,
                  }}
                />
              ) : (
                <AddIcon
                  sx={{
                    border: "1px solid ",
                    borderRadius: 100,
                  }}
                />
              )
            }
            sx={{
              fontWeight: "bold",
              backgroundColor: "background.default",
              borderRadius: 4,
              p: 4,
              px: { xs: 2, sm: 4 },
              "&.Mui-expanded": {
                backgroundColor: "background.paper",
                margin: 0,
                my: 0,
              },
              "& .MuiAccordionSummary-content": {
                my: 0,
                backgroundColor: "background.paper",
              },
            }}
          >
            <Typography variant="body1" color="text.primary">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 4, pt: 0, px: { xs: 2, sm: 4 } }}>
            <Typography variant="subtitle1" color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
