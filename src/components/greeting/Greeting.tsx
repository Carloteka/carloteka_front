import { Box, Title, Img, Description, Button } from './Greeting.styled';
import { Wrapper } from '../pageTitle/PageTitle.styled';
import sprite from '../../images/sprite.svg';
import heroImgPng from '../../images/Shield_and_sword-1.png';
import heroImgAfiv from '../../images/Shield_and_sword-1.avif';

export const Greeting = () => {
  return (
    <Wrapper>
      <Box>
        <Title>Дерев&apos;яні вироби на будь-який смак</Title>
        <Img>
          <source
            srcSet={heroImgAfiv}
            width="288"
            height="290"
            type={'image/avif'}
          />
          <img
            src={heroImgPng}
            alt="Shield and sword"
            width="288"
            height="290"
          />
        </Img>
        <Description>
          Вітаємо в інтернет-магазині КАРЛОТЕКА. Ми виготовляємо якісні
          дерев&apos;яні вироби. У нас ви можете купити або замовити іграшкові
          мечі, щити, машинки, пазли, 3Д пазли, посуд з дерева (підноси для
          піци, посуд для суші, підноси для подачі кави) для ресторанів, кафе,
          барів, магазинів тощо.
        </Description>
        <Button to={'/catalog'} className="primaryBtn">
          Детальніше
          <svg width={16} height={16}>
            <use href={`${sprite}#arrow-right`} />
          </svg>
        </Button>
      </Box>
    </Wrapper>
  );
};
