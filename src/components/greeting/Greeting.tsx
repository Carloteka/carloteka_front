import {
  GreetingContainer,
  Box,
  Title,
  Img,
  Description,
  ImgAside,
  Button,
} from './Greeting.styled';
import sprite from '../../images/sprite.svg';
import heroImgPng from '../../images/Shield_and_sword-1.png';
import heroImgAfiv from '../../images/Shield_and_sword-1.avif';

export const Greeting = () => {
  return (
    <GreetingContainer>
      <Box>
        <div>
          <Title>Дерев’яні вироби на будь-який смак</Title>
          <Img>
            <source srcSet={heroImgAfiv} width="640" height="646" />
            <img
              src={heroImgPng}
              alt="Shield and sword"
              width="640"
              height="646"
            />
          </Img>
          <Description>
            Вітаємо в інтернет-магазині КАРЛОТЕКА. Ми виготовляємо якісні
            дерев'яні вироби. У нас ви можете купити або замовити іграшкові
            мечі, щити, машинки, пазли, 3Д пазли, посуд з дерева (підноси для
            піци, посуд для суші, підноси для подачі кави) для ресторанів, кафе,
            барів, магазинів тощо.
          </Description>
          <Button to={'/catalog'}>
            Детальніше
            <svg width={16} height={16}>
              <use href={`${sprite}#arrow-right`} />
            </svg>
          </Button>
        </div>
        <ImgAside>
          <source srcSet={heroImgAfiv} width="640" height="646" />
          <img
            src={heroImgPng}
            alt="Shield and sword"
            width="640"
            height="646"
          />
        </ImgAside>
      </Box>
    </GreetingContainer>
  );
};
