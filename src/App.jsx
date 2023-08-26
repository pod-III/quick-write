import {
  Grid,
  GridItem,
  Image,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import { HamburgerIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { NotesContainer } from "./components/notes_container";
import { useEffect } from "react";

const colors = {
  "pallete-1": "#352F44",
  "pallete-2": "#62A87C",
  "pallete-3": "#B9B4C7",
  "pallete-4": "#C3F3C0",
  "pallete-5": "#F7F7F7",
};

function App() {
  // Chakra UI Hook for Modal
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (localStorage.getItem("status")) {
      console.log("welcome back")
    } else {
      localStorage.setItem("status", "true")
      onOpen()
    }
  }, [])

  // Key Binding Functions for the Input Component
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.altKey && event.key === "i") {
        onOpen()
        console.log("Button was pressed");
        event.preventDefault();
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    // Make sure to clean up event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Welcome to QuickWrite</ModalHeader>
          <ModalBody textAlign={"justify"}>
            QuickWrite is a simple note taking app for you to easily put your spontanious Ideas.
            <br />
            Long gone the day of having to find a note app, open it, start a new note, and save it.
            With QuickWrite, you can just write a note, add, and go about your day.
            <br />
            We believe all ideas matters, even if it's brief. So write them, QuickWrite them.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
        <GridItem bg={colors["pallete-2"]} area="header">
          <HStack spacing="1.5em" p={2}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  icon={<InfoOutlineIcon />}
                  command="Alt+I"
                  textColor={"#4B5842"}
                  onClick={onOpen}
                >
                  Info
                </MenuItem>
              </MenuList>
            </Menu>
            <Tooltip
              label="Your One-Stop for Spontaneous Ideas"
              aria-label="A Slogan"
              closeDelay={250}
            >
              <Image
                src="src/assets/quickwrite-logo.png"
                alt="quickwrite"
                width={"250px"}
                margin={"0 1em"}
                padding={0}
                height={"100%"}
              />
            </Tooltip>
          </HStack>
        </GridItem>
        <GridItem
          minWidth={0}
          px={{ base: "10px", sm: "1em" }}
          bg={colors["pallete-4"]}
          textColor={colors["pallete-1"]}
          area="main"
          pt="1em"
        >
          <NotesContainer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
