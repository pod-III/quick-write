import { IconButton, Card, CardBody, Stack, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Note = (props) => {
  const id = props.id;
  const note = props.note;
  const deleteNote = props.deleteFunction

  

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
                onClick={() => deleteNote(id)}
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
