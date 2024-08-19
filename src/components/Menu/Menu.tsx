import css from './Menu.module.scss';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../socialLinks';
import { Categories } from '../../../@types/custom';
import { checkLocalStorage } from '../../utils';

interface MenuProps {
  onClickHandle: () => void;
  showMenu: boolean;
}

export const Menu = ({ onClickHandle, showMenu }: MenuProps) => {
  const categories: Categories[] = checkLocalStorage('categories', []);
  console.log(categories);
  // const categories: Categories[] = tempString ? JSON.parse(tempString) : [];

  const [showList, setShowList] = useState<boolean>(false);

  return (
    <>
      <div
        className="backdrop overlay"
        onClick={() => onClickHandle()}
        style={{ display: showMenu ? 'flex' : 'none' }}
      ></div>
      <div className={`${css.menuWrapper} ${showMenu ? css.show : ''}`}>
        <button
          onClick={() => onClickHandle()}
          title="Close menu"
          className={css.closeBtn}
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#close`} />
          </svg>
        </button>
        <nav>
          <ul className={css.navList}>
            <li>
              <div
                className={css.navListFlexItem}
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
              </div>
              {showList && (
                <ul className={css.categoriesList}>
                  {categories?.map((el) => (
                    <li key={el.id}>
                      <Link
                        to={`/catalog?category__id=${el.id}`}
                        onClick={() => onClickHandle()}
                      >
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                to={'/about'}
                onClick={() => onClickHandle()}
                className={css.largeLink}
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link
                to={'/aboutPayment'}
                onClick={() => onClickHandle()}
                className={css.largeLink}
              >
                Оплата & Доставка
              </Link>
            </li>
          </ul>
        </nav>
        <div className={css.contactsDiv}>
          <h3>Зв’язатись з нами</h3>
          <address>
            <ul>
              <li className="tel">
                <a href="tel:+380955810075" title="Call +380955810075">
                  +380 (95) 581-00-75
                </a>
              </li>
            </ul>
            <ul className={css.socials}>
              {socialLinks.map((el) => (
                <li key={el.social}>
                  <a
                    href={el.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={el.social}
                  >
                    <svg width={24} height={24}>
                      <use href={`${sprite}#${el.social}`} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>
    </>
  );
};
