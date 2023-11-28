import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I place an order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Simply browse our website, select your desired item, and proceed to checkout.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I contact customer support? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can reach our dedicated customer support team via [email/phone/live chat] during our business hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Are there any ongoing promotions or discounts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Keep an eye on our website for ongoing promotions or subscribe to our newsletter for exclusive offers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Do you offer technical support for your products/services?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we provide comprehensive technical support to assist you with any issues or queries.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Do you offer software updates for your products? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we regularly provide software updates to enhance functionality and security.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;