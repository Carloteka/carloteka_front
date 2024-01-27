import {
  Backdrop,
  MenuContainer,
  CloseButton,
  List,
  FlexCatalogContainer,
  CategoriesList,
  LinkLarge,
  Contacts,
  Tel,
  Socials,
} from './Menu.styled';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../../socialLinks';
import { Categories } from '../../../../@types/custom';

interface MenuProps {
  onClickHandle: () => void;
  showMenu: boolean;
}

export const Menu = ({ onClickHandle, showMenu }: MenuProps) => {
  const tempString = localStorage.getItem('categories') as string;
  const categories: Categories[] = JSON.parse(tempString);

  const [showList, setShowList] = useState<boolean>();

  return (
    <>
      <Backdrop
        onClick={() => onClickHandle()}
        style={{ display: showMenu ? 'flex' : 'none' }}
      ></Backdrop>
      <MenuContainer
        style={{
          right: showMenu ? '0' : '-1400px',
        }}
      >
        <CloseButton onClick={() => onClickHandle()}>
          <svg width={24} height={24}>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseButton>
        <nav>
          <List>
            <li>
              <FlexCatalogContainer
                onClick={() => setShowList((prev) => !prev)}
              >
                <h3>Каталог</h3>
                <svg
                  width={24}
                  height={24}
                  style={{
                    transform: showList ? 'rotate(90deg)' : 'rotate(270deg)',
                  }}
                >
                  <use href={`${sprite}#chevron`} />
                </svg>
              </FlexCatalogContainer>
              {showList && (
                <CategoriesList>
                  {categories.map((el) => (
                    <li key={el.id}>
                      <Link
                        to={`/catalog?category__id=${el.id}`}
                        onClick={() => onClickHandle()}
                      >
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </CategoriesList>
              )}
            </li>
            <li>
              <LinkLarge to={'/about'} onClick={() => onClickHandle()}>
                Про нас
              </LinkLarge>
            </li>
            <li>
              <LinkLarge to={'/aboutPayment'} onClick={() => onClickHandle()}>
                Оплата & Доставка
              </LinkLarge>
            </li>
          </List>
        </nav>
        <Contacts>
          <h3>Зв’язатись з нами</h3>
          <address>
            <ul>
              <Tel>
                <a href="tel:+380955810075" title="Call +380955810075">
                  +380 (95) 581-00-75
                </a>
              </Tel>
              <Socials>
                {socialLinks.map((el) => (
                  <li key={el.social}>
                    <a href={el.href} target="_blank" rel="noopener noreferrer">
                      <svg width={24} height={24}>
                        <use href={`${sprite}#${el.social}`} />
                      </svg>
                    </a>
                  </li>
                ))}
              </Socials>
            </ul>
          </address>
        </Contacts>
      </MenuContainer>
    </>
  );
};
