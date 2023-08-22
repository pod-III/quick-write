import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  useDisclosure,
  FormControl,
  Grid,
  GridItem,
  Box,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export function Notes() {
  const [myNote, setMyNote] = useState("");
  const [cards, setCards] = useState([]);

  const saveCard = () => {
    let data = cards;
    let id = cards.length;
    let object = [`${id}`, myNote];
    data.push(object);
    let dataObj = Object.fromEntries(data);
    const objectString = JSON.stringify(dataObj);
    console.log("this object string", objectString);
    localStorage.setItem("cards", objectString);
  };

  const submitButton = () => {
    if (myNote === "") {
      console.log("write something mate");
    } else {
      saveCard();
      setMyNote("");
      cardsFetcher();
      console.log(myNote);
    }
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    let note = "";
    note = note + value.toString();
    setMyNote(note);
  };

  
  useEffect(() => {
    console.log("Page loaded!");
    cardsFetcher();
  }, []);

  const cardsFetcher = () => {
    const cardsString = localStorage.getItem("cards");
    if (cardsString === undefined || cardsString === null) {
      setCards([]);
    } else {
      const cardsObj = JSON.parse(cardsString);
      const cards = Object.entries(cardsObj);
      let card;
      console.log(cards[0]);
      setCards(cards);
    }
  };

  return (
    <>
      <Box bg={"#5C5470"} px={3} borderRadius="lg" position={"sticky"}>
        <Input
          value={myNote}
          onChange={handleSubmit}
          placeholder="Place your thoughts here..."
          backgroundColor={"#f7f7f7"}
          my={3}
        />
        <Button
          variant="ghost"
          bg={"#B9B4C7"}
          onClick={submitButton}
          w={"100%"}
          my={3}
        >
          Add
        </Button>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {cards.map((card) => (
          <GridItem key={parseInt(card[0])}>
            <Card p={1} borderWidth={1} my={2}>
              <CardBody>
                <Stack spacing="3">
                  <p>{card[1]}</p>
                  <Box display={"flex"} justifyContent={"center"}>
                    <IconButton
                      aria-label="Search database"
                      icon={<DeleteIcon />}
                    />
                    <IconButton
                      aria-label="Search database"
                      icon={<EditIcon />}
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
