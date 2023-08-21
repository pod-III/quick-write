import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Notes } from "./components/notes";

function App() {
  const [count, setCount] = useState(0);

  let colors = {
    "pallete-1":"#352F44",
    "pallete-2":"#5C5470",
    "pallete-3":"#B9B4C7",
    "pallete-4":"#FAF0E6",
    "pallete-5":"#F7F7F7"
  }

  return (
    <>
      <Grid
        templateAreas={`"header"
                  "main"`}
        gridTemplateRows={"50px 1fr"}
        h="100vh"
        gap="0"
        color="blackAlpha.700"
        fontWeight="bold"
        textColor={colors["pallete-5"]}
      >
        <GridItem pl="2" bg={colors["pallete-2"]} area={"header"} textAlign={["center"]}>
          QuickWrite
        </GridItem>
        <GridItem pl="2" bg={colors["pallete-4"]} textColor={colors["pallete-1"]} area={"main"} p={"1rem"}>
          <Notes >
          </Notes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
