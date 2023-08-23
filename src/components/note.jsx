import { IconButton, Card, CardBody, Stack, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Note = (props) => {
  const id = props.id;
  const card = props.card;
  const [cards, setCards] = useState(props.cardsList);
  console.log(id, card, cards);
  const deleteNote = () => {
    const filteredCards = cards.filter((card) => card[0] !== id.toString());
    const newCards = filteredCards.map((card, index) => {
      if (card[0] !== index + 1) {
        card[0] = (index + 1).toString();
      }
    });
    setCards(newCards);
    const dataObj = Object.fromEntries(cards);
    const objectString = JSON.stringify(dataObj);
    localStorage.setItem("cards", objectString);
  };

  const editNote = () => {console.log('this edit button')};

  return (
    <>
      <Card p={1} borderWidth={1} my={2}>
        <CardBody>
          <Stack spacing="3">
            <p>{card[1]}</p>
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
