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
import { useState } from "react";

const Note = ({ id, note, deleteNote, editNote }) => {
  const [ourNote, setOurNote] = useState(note);
  const saveEdit = (value) => {
    console.log(id, value);
    editNote(id, value);
    console.log("submitted")
  };

  return (
    <Card
      p={1}
      borderWidth={1}
      my={2}
      transition={"all 0.3s ease-out"}
      _hover={{
        transform: "scale(1.1)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      }}
    >
      <CardBody>
        <Stack spacing="3">
          <Editable
            value={ourNote}
            submitOnBlur={true}
            onSubmit={(value) => saveEdit(value)}
          >
            <EditablePreview/>
            <EditableTextarea
              onChange={(e) => {
                setOurNote(e.target.value);
              }}
            />
          </Editable>
          <Box display="flex" justifyContent="flex-end">
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
