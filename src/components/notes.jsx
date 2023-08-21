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
import { useState, useEffect } from "react";

export function Notes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [myNote, setMyNote] = useState("");
  const [keys, setMyKeys] = useState([]);
  const [cards, setCards] = useState([]);

  const submitButton = () => {
    localStorage.setItem(`Note_${cards.length + 1}`, myNote)
    setMyNote("");
    onClose();
    cardsFetcher();
    console.log(myNote);
  };

  const closeButton = () => {
    setMyNote("");
    onClose();
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    let note = "";
    note = note + value.toString();
    setMyNote(note);
    console.log(myNote);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Handle the key press event here

      console.log("Key pressed:", event.key);
    };

    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    // Your function logic here
    console.log("Page loaded!");
    console.log(cards)
    cardsFetcher();
  }, []);

  const cardsFetcher = () => {
    const cards = [];
    let status = true;
    let i = 0;
    while (status) {
      let card = localStorage.getItem(`Note_${i + 1}`);
      console.log(card, status, i);
      if (card === undefined || card === null) {
        status = false;
      } else {
        cards.push(card);
      }
      i += 1;
    }
    setCards(cards);
  };
  return (
    <>
      <Button onClick={onOpen} my={"1rem"}>
        +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                value={myNote}
                onChange={handleSubmit}
                placeholder="Place your thoughts here..."
              />
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
        {cards.map((card, index) => (
          <Card key={index} p={4} borderWidth={1}>
              <p>{card}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
