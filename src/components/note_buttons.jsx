import { IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

const NoteButton = (props) => {
  const id = props.ids;
  const [cards, setCards] = useState(props.cardsList);
  console.log(id, cards);
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
  const editNote = () => {};
  return (
    <>
      <IconButton
        aria-label="delete note"
        icon={<DeleteIcon />}
        onClick={deleteNote}
      />
      <IconButton aria-label="edit note" icon={<EditIcon />} />
    </>
  );
};

export default NoteButton;
