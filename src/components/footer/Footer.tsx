import { Wrapper, List, WorkTime, Socials } from './footer.styled';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import { socialLinks } from '../../socialLinks';
import { fetchContacts } from '../../api/api';

type Contacts = {
  admin_phone: string;
  telegram_link: string;
  viber_link: string;
  work_time_mo_fr: string;
  work_time_sa: string;
  work_time_su: string;
};

export const Footer = () => {
  const [contacts, setContacts] = useState<Contacts>();

  useEffect(() => {
    if (contacts?.admin_phone) {
      return;
    }
    getContacts();

    async function getContacts() {
      try {
        const data = await fetchContacts();
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [contacts]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return contacts?.admin_phone ? (
    <Wrapper>
      <div>
        <h3>Адреса</h3>
        <address>
          <List>
            <li>
              <svg>
                <use href={`${sprite}#geo`} />
              </svg>
              <p>м. Дніпро</p>
            </li>
            <li>
              <svg>
                <use href={`${sprite}#clock`} />
              </svg>
              <WorkTime>
                Пн - Пт {contacts.work_time_mo_fr}, Сб {contacts.work_time_sa},
                Нд - {contacts.work_time_su}
              </WorkTime>
            </li>
            <li>
              <svg>
                <use href={`${sprite}#phone`} />
              </svg>
              <a href="tel:+380671111111" title="Call +380671111111">
                {contacts.admin_phone}
              </a>
            </li>
            <li>
              <Socials>
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
              </Socials>
            </li>
          </List>
        </address>
      </div>
      <div>
        <h3>Про нас</h3>
        <List>
          <li>
            <Link to={'/about'} onClick={() => scrollToTop()}>
              Наша історія
            </Link>
          </li>
          <li>
            <Link to={'/exampleofwork'} onClick={() => scrollToTop()}>
              Що ми виготовляємо
            </Link>
          </li>
          <li>
            <Link to={'/policy'} onClick={() => scrollToTop()}>
              Політика конфіденційності
            </Link>
          </li>
        </List>
      </div>
      <div>
        <h3>Допомога</h3>
        <List>
          <li>
            <Link to={'/aboutPayment'} onClick={() => scrollToTop()}>
              Оплата & Доставка
            </Link>
          </li>
          <li>
            <Link to={'/refund'} onClick={() => scrollToTop()}>
              Повернення & Відшкодування
            </Link>
          </li>
          <li>
            <Link to={'/help'} onClick={() => scrollToTop()}>
              Служба підтримки
            </Link>
          </li>
        </List>
      </div>
    </Wrapper>
  ) : null;
};
