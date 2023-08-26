import { useState, useEffect } from "react";
import { Box, Button, Grid, GridItem, Textarea, Tooltip } from "@chakra-ui/react";
import Note from "./note";

export function NotesContainer() {
  // Two major states
  // State for the notes that is currently taken in the input area
  const [myNote, setMyNote] = useState("");

  // State for all the notes
  const [notes, setNotes] = useState([]);

  // State for notes sorting
  // const [sort, setSort] = useState("recent");

  // Function to create and sort the Notes
  // This is important to make sure the sorting is working
  // const sortNotes = (value) => {
  //   let newNotes = [...value]
  //   switch(sort){
  //     case "recent":
  //       newNotes.reverse()
  //       break
  //     case "old":
  //       break
  //   }
  //   setNotes(newNotes)
  // }

  // Notes Functions
  // Edit Note
  const editNote = (id, newNote) => {
    const newNotes = notes.map((card, index) => {
      return index === id ? newNote : card;
    });
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
    console.log(notes);
  };

  // Delete Notes
  const deleteNote = (id) => {
    const newNotes = notes.filter((card, index) => index !== id);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  // Save Notes
  const saveCard = () => {
    let newNotes = [...notes];
    newNotes.unshift(myNote);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  // Add New Notes
  const handleNotesubmit = () => {
    saveCard();
    setMyNote("");
    console.log(myNote);
    console.log(notes);
  };

  // Real Time change for input to change the value State
  const handleNoteChange = (e) => {
    setMyNote(e.target.value);
  };

  // Real Time change for input to change the value State per each note editables
  const handleNotesChange = (id, e) => {
    let newNotes = [...notes];
    newNotes[id] = e.toString();
    setNotes(newNotes);
    console.log("edit", newNotes);
  };

  // Initiate the page
  useEffect(() => {
    const localNotes = localStorage.getItem("notes");
    const parsedNotes = localNotes ? JSON.parse(localNotes) : [];
    setNotes(parsedNotes);
    console.log(parsedNotes);
  }, []);

  //Key Binding
  // useEffect(() => {
  //   function handleKeyDown(event) {
  //     if (event.ctrlKey && event.key === "Enter") {
  //       console.log("Button was pressed");
  //       event.preventDefault();
  //     }
  //   }
  //   window.addEventListener("keydown", handleKeyDown);

  //   // Make sure to clean up event listeners on component unmount
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <>
      <Box
        bg="#62A87C"
        px={3}
        borderRadius="lg"
        position="sticky"
        boxShadow="2xl"
        m={0}
      >
        <Textarea
          value={myNote}
          onChange={handleNoteChange}
          placeholder="Place your thoughts here..."
          backgroundColor="#f7f7f7"
          my={3}
          borderWidth={0}
          textColor={"#4B5842"}
        />
          <Button
            variant="ghost"
            bg="#f7f7f7"
            onClick={handleNotesubmit}
            w="100%"
            my={3}
            textColor={"#4B5842"}
          >
            Add
          </Button>
      </Box>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        mt={4}
      >
        {notes.map((note, index) => {
          // console.log("New Card Made", index, card)
          if (note === "") {
            console.log("Empty Notes");
            let cards = [...notes];
            cards = cards.slice(0, index).concat(cards.slice(index + 1));
            setNotes(cards);
          } else {
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
          }
        })}
      </Grid>
    </>
  );
}
