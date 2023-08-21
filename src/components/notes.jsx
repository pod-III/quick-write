import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";

export function Notes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [myNote, setMyNote] = useState("");

  const submitButton = () => {
    setMyNote('')
    onClose();
    console.log(myNote);
  };

  const closeButton = () => {
    setMyNote("")
    onClose()
  }

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    let note = ""
    note = note + value.toString()
    setMyNote(note)
    console.log(myNote);
  };

  return (
    <>
      <Button onClick={onOpen} my={"1rem"}>
        +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input value={myNote} onChange={handleSubmit} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeButton}>
              Close
            </Button>
            <Button variant="ghost" onClick={submitButton}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div id="card-container">
        <Card></Card>
      </div>
    </>
  );
}
