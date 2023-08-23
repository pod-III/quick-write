import { IconButton, Card, CardBody, Stack, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Note = (props) => {
  const id = props.id;
  const note = props.note;
  const [notes, setNotes] = useState(props.notelist);
  const deleteNote = () => {
    const filteredNotes = notes.filter((card) => parseInt(card[0]) !== id);
    const newNotes = filteredNotes.map((card, index) => {
      return [index.toString(), card[1]];
    });
    setNotes(newNotes);
    console.log(id, note, notes, newNotes)
    const dataObj = Object.fromEntries(newNotes);
    const objectString = JSON.stringify(dataObj);
    localStorage.setItem("cards", objectString);
  };
  

  const editNote = () => {console.log('this edit button')};

  return (
    <>
      <Card p={1} borderWidth={1} my={2}>
        <CardBody>
          <Stack spacing="3">
            <p>{note[1]}</p>
            <Box display="flex" justifyContent="center">
              <IconButton
                aria-label="delete note"
                icon={<DeleteIcon />}
                onClick={deleteNote}
              />
              <IconButton aria-label="edit note" icon={<EditIcon />} onClick={editNote}/>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default Note;
