import { IconButton, Card, CardBody, Stack, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Note = ({ id, note, deleteNote, onEditNote }) => {
  console.log(deleteNote)
  return (
    <Card p={1} borderWidth={1} my={2}>
      <CardBody>
        <Stack spacing="3">
          <p>{note}</p>
          <Box display="flex" justifyContent="flex-end">
            <IconButton aria-label="edit note" icon={<EditIcon />} onClick={() => onEditNote(id)}/>
            <IconButton
              aria-label="delete note"
              icon={<DeleteIcon />}
              onClick={deleteNote}
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Note;
