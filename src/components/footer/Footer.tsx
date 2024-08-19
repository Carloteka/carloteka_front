import css from './footer.module.scss';
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
    <footer className={css.footer}>
      <div>
        <h3>Адреса</h3>
        <address>
          <ul className={css.list}>
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
              <p className={css.worktime}>
                Пн - Пт - {contacts.work_time_mo_fr}, <br></br>Сб -
                {contacts.work_time_sa}, <br></br>Нд - {contacts.work_time_su}
              </p>
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
            </li>
          </ul>
        </address>
      </div>
      <div>
        <h3>Про нас</h3>
        <ul className={css.list}>
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
        </ul>
      </div>
      <div>
        <h3>Допомога</h3>
        <ul className={css.list}>
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
        </ul>
      </div>
    </footer>
  ) : null;
};
