import { useState, useEffect } from "react";
import { Box, Button, Grid, GridItem, Textarea } from "@chakra-ui/react";
import Note from "./note";

export function Notes() {
  // Two major states
  // State for the notes that is currently taken in the input area
  const [myNote, setMyNote] = useState("");
  
  // State for all the notes 
  const [cards, setCards] = useState([]);

  // Notes Functions
  // Edit Note
  const editNote = (id, newNote) => {
    if (!newNote) {
      deleteNote(id)
    } else {
    const newNotes = cards.map((card, index) => {
      return index === id ? newNote : card;
    });
    localStorage.setItem("cards", JSON.stringify(newNotes));
    setCards(newNotes);
    console.log(cards);
    }
  };


  // Delete Notes
  const deleteNote = (id) => {
    const newNotes = cards.filter((card, index) => index !== id);
    localStorage.setItem("cards", JSON.stringify(newNotes));
    console.log(newNotes, id);
    setCards(newNotes);

    // const filteredNotes = cards.filter((card) => parseInt(card[0]) !== id);
    // const newNotes = filteredNotes.map((card, index) => {
    //   return [index.toString(), card[1]];
    // });
    // setCards(newNotes);
    // const dataObj = Object.fromEntries(newNotes);
    // const objectString = JSON.stringify(dataObj);
    // localStorage.setItem("cards", objectString);
  };


  // Save Notes
  const saveCard = () => {
    const newNotes = [...cards, myNote];
    localStorage.setItem("cards", JSON.stringify(newNotes));
    setCards(newNotes);
  };


  // Add New Notes
  const handleCardSubmit = () => {
    if (!myNote) {
      console.log("Write something, mate");
    } else {
      saveCard();
      setMyNote("");
      // console.log(myNote);
      // console.log(cards);
    }
  };

  // Real Time change for input to change the value State
  const handleNoteChange = (e) => {
    setMyNote(e.target.value);
  };

  // Initiate the page
  useEffect(() => {
    const localCards = localStorage.getItem("cards");
    const parsedCards = localCards ? JSON.parse(localCards) : [];
    setCards(parsedCards);
    console.log(parsedCards);
  }, []);

  return (
    <>
      <Box bg="#5C5470" px={3} borderRadius="lg" position="sticky">
        <Textarea
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
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
        {cards.map((card, index) => {
          console.log("New Card Made", index, card)
          return (
            <GridItem key={index}>
              <Note
                id={index}
                note={card}
                deleteNote={() => deleteNote(index)}
                editNote={editNote}
              ></Note>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
