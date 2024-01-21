import { PageTitle } from '../../components/pageTitle/PageTitle';
import { Link } from 'react-router-dom';
import {
  SectionAboutBrand,
  FirstP,
  Table,
  SectionAboutShop,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
} from './AboutUs.styled';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import sprite from '../../images/sprite.svg';
import example1Png from '../../images/about-Group-1026.png';
import example1Avif from '../../images/about-Group-1026.avif';
import example2Png from '../../images/about-Group-1023.png';
import example2Avif from '../../images/about-Group-1023.avif';
import example3Png from '../../images/about-Group-1027.png';
import example3Avif from '../../images/about-Group-1027.avif';
import example4Png from '../../images/about-Group-1025.png';
import example4Avif from '../../images/about-Group-1025.avif';
import example5Png from '../../images/about-Group-1024.png';
import example5Avif from '../../images/about-Group-1024.avif';
import imgJpg from '../../images/lamination-wood-grade-cylinders-manufacturer 1.jpg';
import imgAvif from '../../images/lamination-wood-grade-cylinders-manufacturer-1.avif';

const AboutUs = () => {
  return (
    <>
      <PageTitle>Про нас</PageTitle>
      <ContainerLimiter paddingTopMob={'24px'} paddingTopDesc={'80px'}>
        <picture>
          <source
            srcSet={imgAvif}
            width="1312"
            height="800"
            type={'image/avif'}
          />
          <img
            src={imgJpg}
            alt="lamination wood grade cylinders manufacturer"
            width="1312"
            height="800"
          />
        </picture>

        <SectionAboutBrand>
          <div>
            <FirstP>
              Carloteka - це український сімейний бренд, який подарував
              позитивні емоції сотням тисяч людей. Ми розробляємо унікальну
              продукцію, яка відрізняється високою якістю і створена з любов'ю
              до наших клієнтів.
            </FirstP>
            <p>
              Компанія Carloteka була заснована у Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit architecto impedit
              eius dolor eveniet, molestias repellendus officia consectetur
              perferendis nobis, tenetur quaerat laboriosam nisi optio iusto
              neque sint similique dolorum. Unde a ab dolor vel eveniet!
              Reiciendis rerum animi veniam quos incidunt necessitatibus
              officiis fuga, dolore, illum, omnis in. Nihil, iste. Magni illo
              eius saepe necessitatibus aspernatur eaque repellat deleniti esse
              a numquam rerum porro incidunt tempore in corrupti, suscipit
              pariatur obcaecati officia! Eius et officiis dolorum hic
              accusantium nostrum possimus unde, dolores, libero voluptatum nam
              consequuntur eos dignissimos enim repellat quo reiciendis fuga ad
              neque placeat iure nisi provident maxime? Iure quos eveniet aut
              assumenda omnis labore suscipit eius, sed impedit perferendis
              praesentium accusantium magni maiores voluptas quod error nobis
              ullam natus quam veritatis ab odit iste quaerat? Dolor a deserunt
              esse hic sint corrupti, aliquam nemo maiores animi vel. Delectus
              ducimus in velit, quo rem impedit reprehenderit.
            </p>
          </div>
          <div>
            <Table>
              <div>
                <p>Назва компанії</p>
                <p className="companyTitle">Карлотека</p>
              </div>
              <div>
                <p>Власник</p>
                <p>Зайцева Наталія</p>
              </div>
              <div>
                <p>Адреса</p>
                <p>
                  вул. А.Фарба 4б,<br></br> Дніпро, Україна
                </p>
              </div>
              <div>
                <p className="telNo">Номер телефону</p>
                <p>
                  <a href="tel:+380955810075" title="Call +380955810075">
                    +380 (95) 581-00-75
                  </a>
                </p>
              </div>
              <div>
                <p style={{ position: 'absolute', width: '71px' }}>
                  Відділ продажу
                </p>
                <p style={{ marginLeft: 'auto' }}>
                  <a href="tel:+380955810075" title="Call +380955810075">
                    +380955810075
                  </a>
                  <a href="tel:+380955810075" title="Call +380955810075">
                    +380955810075
                  </a>
                  <a
                    href="mailto:info.carloteka@gmail.com"
                    title="mail to info.carloteka@gmail.com"
                  >
                    info.carloteka@gmail.com
                  </a>
                </p>
              </div>
            </Table>
          </div>
        </SectionAboutBrand>
        <SectionAboutShop>
          <div>
            <FirstP>
              У нашому інтернет-магазині представлені тільки якісні дерев'яні
              вироби, в тому числі і власного виробництва з натурального дерева.
              У нас Ви можете купити або замовити іграшкові мечі, щити, машинки,
              пазли, 3Д пазли.
            </FirstP>
            <p>
              Ми виготовляємо для ресторанів, кафе, барів, магазинів будь-який
              посуд з дерева: підноси для піци, посуд для суші, підноси для
              подачі кави. Для Вашої компанії ми зробимо сувеніри або
              головоломки з Вашими логотипами, ексклюзивні брелоки і фірмові
              коробки для Вашої продукції.
            </p>
            <Link
              to={'/catalog'}
              title="На стрінку Товарів"
              className="primaryBtn"
            >
              Каталог
              <svg width={16} height={16}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
            </Link>
          </div>
          <div>
            <Img1>
              <source
                srcSet={example1Avif}
                width="229"
                height="343"
                type={'image/avif'}
              />
              <img
                src={example1Png}
                alt="a wooden amphora"
                width="229"
                height="343"
                loading="lazy"
              />
            </Img1>
            <Img2>
              <source
                srcSet={example2Avif}
                width="343"
                height="228"
                type={'image/avif'}
              />
              <img
                src={example2Png}
                alt="a massive craft bound book"
                width="343"
                height="228"
                loading="lazy"
              />
            </Img2>
            <Img3>
              <source
                srcSet={example3Avif}
                width="345"
                height="276"
                type={'image/avif'}
              />
              <img
                src={example3Png}
                alt="a wooden chessboard with chess"
                width="345"
                height="276"
                loading="lazy"
              />
            </Img3>
            <Img4>
              <source
                srcSet={example4Avif}
                width="345"
                height="276"
                type={'image/avif'}
              />
              <img
                src={example4Png}
                alt="a craft backgammon board"
                width="345"
                height="276"
                loading="lazy"
              />
            </Img4>
            <Img5>
              <source
                srcSet={example5Avif}
                width="276"
                height="345"
                type={'image/avif'}
              />
              <img
                src={example5Png}
                alt="a wooden phone stand"
                width="276"
                height="345"
                loading="lazy"
              />
            </Img5>
          </div>
        </SectionAboutShop>
      </ContainerLimiter>
    </>
  );
};

export default AboutUs;
