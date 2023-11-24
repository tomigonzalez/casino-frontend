import {
  CardId,
  CardImg,
  CardImgContain,
  CardPrice,
  CardText,
  CardTitle,
  Cards,
} from "./MaxWinStyle";

const CardWin = ({ title, img, price, id }) => {
  return (
    <Cards key={id}>
      <CardImgContain>
        <CardImg src={img} alt={title} />
      </CardImgContain>
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardId>ID {id}</CardId>

        <CardPrice>
          <p>WIN</p>
          {price}
        </CardPrice>
      </CardText>
    </Cards>
  );
};

export default CardWin;
