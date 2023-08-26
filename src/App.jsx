import { Grid, GridItem, Text } from "@chakra-ui/react";
import { NotesContainer } from "./components/notes_container";

const colors = {
  "pallete-1": "#352F44",
  "pallete-2": "#5C5470",
  "pallete-3": "#B9B4C7",
  "pallete-4": "#FAF0E6",
  "pallete-5": "#F7F7F7",
};

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header"
        "main"`}
        gridTemplateRows="50px 1fr"
        h="100vh"
        gap="0"
        color="blackAlpha.700"
        fontWeight="bold"
        textColor={colors["pallete-5"]}
      >
        <GridItem
          pl="2"
          bg={colors["pallete-2"]}
          area="header"
          textAlign="center"
          pt={5}
        >
          <Text fontSize="2xl">QuickWrite</Text>
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
