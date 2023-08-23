import { useState, useEffect } from "react";
import { Box, Button, Grid, GridItem, Input } from "@chakra-ui/react";
import Note from "./note";

export function Notes() {
  const [myNote, setMyNote] = useState("");
  const [cards, setCards] = useState([]);

  const deleteNote = (id) => {
    const newNotes = cards.filter((card, index) => index !== id);
    localStorage.setItem("cards", JSON.stringify(newNotes));
    setCards(newNotes);
  };

  const saveCard = () => {
    const newNotes = [...cards, myNote];
    localStorage.setItem("cards", JSON.stringify(newNotes));
    setCards(newNotes);
  };

  const handleCardSubmit = () => {
    if (!myNote) {
      console.log("Write something, mate");
    } else {
      saveCard();
      setMyNote("");
      console.log(myNote);
      console.log(cards);
    }
  };

  const handleNoteChange = (e) => {
    setMyNote(e.target.value);
  };

  useEffect(() => {
    const localCards = localStorage.getItem("cards");
    const parsedCards = localCards ? JSON.parse(localCards) : [];
    setCards(parsedCards);
    console.log(parsedCards);
  }, []);

  return (
    <>
      <Box bg="#5C5470" px={3} borderRadius="lg" position="sticky">
        <Input
          value={myNote}
          onChange={handleNoteChange}
          placeholder="Place your thoughts here..."
          backgroundColor="#f7f7f7"
          my={3}
        />
        <Button
          variant="ghost"
          bg="#B9B4C7"
          onClick={handleCardSubmit}
          w="100%"
          my={3}
        >
          Add
        </Button>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {cards.map((card, index) => {
          return (
            <GridItem key={index}>
              <Note
                id={index}
                note={card}
                deleteNote={() => deleteNote(index)}
              ></Note>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
