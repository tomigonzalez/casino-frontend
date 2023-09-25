import Button from "../UI/button/Button";
import {
  CardId,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  Cards,
} from "./MaxWinStyle";

const CardWin = ({ title, img, price, id }) => {
  return (
    <Cards key={id}>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardId>ID {id}</CardId>

        <CardPrice>
          <p>WIN</p>
          {price}
        </CardPrice>
        <Button width={70} secondary="true">
          VIEW
        </Button>
      </CardText>
    </Cards>
  );
};

export default CardWin;
