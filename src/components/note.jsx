import {
  Editable,
  EditablePreview,
  EditableTextarea,
  IconButton,
  Card,
  CardBody,
  Stack,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState, memo } from "react";

const Note = ({ id, notes, deleteNote, editNote, noteChange }) => {
  // Define note from the Notes Array
  const [note, setNote] = useState(notes[id]);

  const saveEdit = (value) => {
    // console.log(ourId, value);
    editNote(id, value);
    // console.log("edit submitted");
  };

  return (
    <Card
      borderWidth={1}
      m={"2 1"}
      transition={"all 0.3s ease-out"}
      _hover={{
        transform: "scale(1.1)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      }}
    >
      <CardBody>
        <Stack spacing="1">
          <Editable
            value={notes[id]}
            submitOnBlur={true}
            onSubmit={(value) => {
              saveEdit(value);
              setNote(notes[id]);
            }}
            onChange={(e) => {
              setNote(e);
              noteChange(id, e);
            }}
          >
            <EditablePreview />
            <EditableTextarea />
          </Editable>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              aria-label="delete note"
              icon={<DeleteIcon />}
              onClick={() => {
                deleteNote(id);
              }}
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default memo(Note);
