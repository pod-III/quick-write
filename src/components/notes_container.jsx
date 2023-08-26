import { useState, useEffect, createContext } from "react";
import { Box, Button, Grid, GridItem, Textarea } from "@chakra-ui/react";
import Note from "./note";
import { easeOut } from "framer-motion";

export function NotesContainer() {
  // Two major states
  // State for the notes that is currently taken in the input area
  const [myNote, setMyNote] = useState("");
  
  // State for all the notes 
  const [notes, setNotes] = useState([]);

  // Key Binding Functions
  const enterKey = (e) => {
    console.log(e)
  }

  // Notes Functions
  // Edit Note
  const editNote = (id, newNote) => {
    if (!newNote) {
      deleteNote(id)
    } else {
    const newNotes = notes.map((card, index) => {
      return index === id ? newNote : card;
    });
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
    console.log(notes);
    }
  };


  // Delete Notes
  const deleteNote = (id) => {
    const newNotes = notes.filter((card, index) => index !== id);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };


  // Save Notes
  const saveCard = () => {
    const newNotes = [...notes, myNote];
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };


  // Add New Notes
  const handleNotesubmit = () => {
    if (!myNote) {
      console.log("Write something, mate");
    } else {
      saveCard();
      setMyNote("");
      // console.log(myNote);
      // console.log(notes);
    }
  };

  // Real Time change for input to change the value State
  const handleNoteChange = (e) => {
    setMyNote(e.target.value);
  };

  // Real Time change for input to change the value State per each note editables
  const handleNotesChange = (id, e) => {
    let newNotes = notes
    newNotes[id] = e.toString()
    setNotes(newNotes);
    console.log("edit", notes)
  };

  // Initiate the page
  useEffect(() => {
    const localNotes = localStorage.getItem("notes");
    const parsedNotes = localNotes ? JSON.parse(localNotes) : [];
    setNotes(parsedNotes);
    console.log(parsedNotes);
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
          onClick={handleNotesubmit}
          onKeyDown={(e) => enterKey(e)}
          w="100%"
          my={3}
        >
          Add
        </Button>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
        {notes.map((card, index) => {
          // console.log("New Card Made", index, card)
          return (
            <GridItem key={index}>
              <Note
                id={index}
                notes={notes}
                deleteNote={deleteNote}
                editNote={editNote}
                noteChange={handleNotesChange}
              ></Note>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
