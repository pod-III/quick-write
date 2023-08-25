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
import { useEffect, useState } from "react";

const Note = ({ id, note, deleteNote, editNote }) => {
  // Track state for the editables component
  const [ourNote, setOurNote] = useState(note);
  
  const saveEdit = (value) => {
    // console.log(ourId, value);
    editNote(id, value);
    console.log("edit submitted");
  };

  ourNote !== note? setOurNote(note) : console.log("re-rendered")

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
            value={ourNote}
            submitOnBlur={true}
            onSubmit={(value) => saveEdit(value)}
          >
            <EditablePreview />
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
              onClick={() => deleteNote()}
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Note;
