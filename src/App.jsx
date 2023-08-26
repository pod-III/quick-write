import { Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";
import { NotesContainer } from "./components/notes_container";

const colors = {
  "pallete-1": "#352F44",
  "pallete-2": "#62A87C",
  "pallete-3": "#B9B4C7",
  "pallete-4": "#C3F3C0",
  "pallete-5": "#F7F7F7",
};

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header"
        "main"`}
        gridTemplateRows="10vh 1fr"
        h="100vh"
        gap="0"
        color="blackAlpha.700"
        fontWeight="bold"
        textColor={colors["pallete-5"]}
      >
        <GridItem bg={colors["pallete-2"]} area="header" p={0}>
          <Box p={0}>
            <Image
              src="src/assets/quickwrite-logo.png"
              alt="quickwrite"
              width={"250px"}
              margin={{ base: "0 2em", sm: "0 auto" }}
              padding={0}
              height={"100%"}
            />
          </Box>
        </GridItem>
        <GridItem
          pl="2"
          bg={colors["pallete-4"]}
          textColor={colors["pallete-1"]}
          area="main"
          p="1rem"
        >
          <NotesContainer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
