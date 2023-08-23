import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import Note from "./note";

export function Notes() {
  const [myNote, setMyNote] = useState("");
  const [cards, setCards] = useState([]);

  const deleteNote = (id) => {
    const filteredNotes = cards.filter((card) => parseInt(card[0]) !== id);
    const newNotes = filteredNotes.map((card, index) => {
      return [index.toString(), card[1]];
    });
    setCards(newNotes);
    const dataObj = Object.fromEntries(newNotes);
    const objectString = JSON.stringify(dataObj);
    localStorage.setItem("cards", objectString);
  };

  const saveCard = () => {
    const data = [...cards];
    const id = cards.length;
    const object = [id, myNote];
    data.push(object);
    const dataObj = Object.fromEntries(data);
    const objectString = JSON.stringify(dataObj);
    localStorage.setItem("cards", objectString);
  };

  const submitButton = () => {
    if (myNote === "") {
      console.log("Write something, mate");
    } else {
      saveCard();
      setMyNote("");
      cardsFetcher();
      console.log(myNote);
      console.log(cards)
    }
  };

  const handleSubmit = (e) => {
    const { value } = e.target;
    setMyNote(value.toString());
  };

  const cardsFetcher = () => {
    const cardsString = localStorage.getItem("cards");
    if (!cardsString) {
      setCards([]);
    } else {
      const cardsObj = JSON.parse(cardsString);
      const cards = Object.entries(cardsObj);
      setCards(cards);
    }
  };

  useEffect(() => {
    console.log("Page loaded!");
    cardsFetcher();
  }, []);

  return (
    <>
      <Box bg="#5C5470" px={3} borderRadius="lg" position="sticky">
        <Input
          value={myNote}
          onChange={handleSubmit}
          placeholder="Place your thoughts here..."
          backgroundColor="#f7f7f7"
          my={3}
        />
        <Button
          variant="ghost"
          bg="#B9B4C7"
          onClick={submitButton}
          w="100%"
          my={3}
        >
          Add
        </Button>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {cards.map((card, index) => (
          <GridItem key={index}>
            <Note id={index} note={card} deleteFunction={deleteNote}></Note>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
