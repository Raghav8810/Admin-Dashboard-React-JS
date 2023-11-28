import { Box } from "@mui/material";
import Header from "../../Components/Header";
import Piechart from "../../Components/Piechart";


const Pie = () => {
    return (
      <Box m="20px">
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <Box height="75vh">
          <Piechart />
        </Box>
      </Box>
    );
  };
  
  export default Pie;