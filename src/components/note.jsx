import {
  Input,
  IconButton,
  Card,
  CardBody,
  Stack,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Note = ({ id, note, deleteNote, editNote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ourNote, setOurNote] = useState(note);
  const saveEdit = () => {
    editNote(id, ourNote)
    onClose()
  }
  return (
    <Card p={1} borderWidth={1} my={2}>
      <CardBody>
        <Stack spacing="3">
          <p>{note}</p>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              aria-label="edit note"
              icon={<EditIcon />}
              onClick={onOpen}
            />
            <IconButton
              aria-label="delete note"
              icon={<DeleteIcon />}
              onClick={deleteNote}
            />
          </Box>
        </Stack>
      </CardBody>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={ourNote}
              onChange={(e) => {
                setOurNote(e.target.value);
              }}
              placeholder="Place your thoughts here..."
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={saveEdit}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default Note;
