import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { InputMask } from 'primereact/inputmask';
import {
  DeliveryBox,
  Form,
  FlexContainer,
  StyledSelect,
  GeoIcon,
} from './Delivery.styled';
import { InvoiceInfo } from '../../components/InvoiceInfo/InvoiceInfo';
import sprite from '../../images/sprite.svg';
import { reactSelectStyle } from '../../utils/reactSelectStyle';

type Good = {
  images: [{ image: string }];
  name: string;
  price: number;
  length: number;
  id_name: string;
  quantity: number;
};

type InputObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  name?: string;
};

const Delivery = () => {
  const navigate = useNavigate();

  let goodsInCart: { id: string; amount: number }[] = [];

  const [delivery, setDelivery] = useState<InputObject>();

  useEffect(() => {
    if (!localStorage.getItem('delivery')) {
      localStorage.setItem('delivery', JSON.stringify({}));
    }
    const deliveryData = JSON.parse(localStorage.getItem('delivery') as string);
    setDelivery(deliveryData);
  }, []);

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
    if (goodsInCart.length === 0) {
      navigate('/cart');
    }
  } else {
    navigate('/cart');
  }

  let goods: [] = [];

  if (localStorage.getItem('goods')) {
    goods = JSON.parse(localStorage.getItem('goods') as string);
  }

  const goodsInCartArray = goods.filter(
    (el: { id_name: string; quantity: number }) =>
      goodsInCart.some((item) => {
        if (el.id_name === item.id) {
          el.quantity = item.amount;
          return true;
        } else return false;
      }),
  );

  const [inCart] = useState<Good[]>(
    goodsInCartArray.filter((el: { length: number }) => el.length !== 0),
  );

  function submitHandle(e: React.FormEvent) {
    e.preventDefault();

    // const target = e.target as HTMLFormElement;
    // const elementsCollection =
    //   target.elements as HTMLCollectionOf<HTMLInputElement>;
    // const elements = Array.from(elementsCollection).filter(
    //   (el) => el.value !== '',
    // );

    // type dataObject = {
    //   [key: string]: string | undefined;
    // };

    // const data: dataObject = {};

    // elements.map((el) => (data[el.name] = el.value));

    function updateValues(obj: InputObject): InputObject {
      const updatedObject: InputObject = {};

      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          updatedObject[key] = obj[key].value;
        } else {
          updatedObject[key] = obj[key];
        }
      }

      return updatedObject;
    }

    const deliveryDataForBackend = updateValues(delivery as InputObject);

    // const deliveryDataForBackend = { ...delivery };
    // for (const key in delivery) {
    //   if (typeof delivery[key] === 'object') {
    //     deliveryDataForBackend[key] = delivery[key].value;
    //   }
    // }

    console.log('send to backend', deliveryDataForBackend);

    navigate('/payment');
    // e.form.reset();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function saveValue(e: any | string, field: string) {
    if (!localStorage.getItem('delivery')) {
      localStorage.setItem('delivery', JSON.stringify({}));
    }
    const temp = JSON.parse(localStorage.getItem('delivery') as string);
    let newArray;
    if (typeof e === 'string') {
      newArray = { ...temp, [field]: e };
    }
    if (field === 'office') {
      newArray = { ...temp, [field]: e.value };
    }
    newArray = { ...temp, [field]: e };
    localStorage.setItem('delivery', JSON.stringify(newArray));
    setDelivery(newArray);
  }

  // creating object in the form necessary for the work of the select.
  const getOptions = (labelsArray: string[], valuesArray?: string[]) =>
    labelsArray.map((item, index) => {
      return {
        value: valuesArray ? valuesArray[index] : item,
        label: item,
      };
    });

  const getOfficeOptions = (labelsArray: string[], valuesArray: string[]) =>
    labelsArray.map((item, index) => {
      return {
        value: valuesArray[index],
        label: (
          <>
            <GeoIcon width={24} height={24}>
              <use href={`${sprite}#geo`} />
            </GeoIcon>
            <span>{item}</span>
          </>
        ),
      };
    });

  function getOfficeValue() {
    if (delivery) {
      const selectedLabel = [
        'Відділеня 23, проспект Перемоги 1',
        'Відділеня 11, вул. Вербицького 14',
        'Відділеня 4, Харківське шосе 3',
      ].find((el) => {
        const re = el.match(/\d+/);
        if (re) {
          return parseInt(re[0]) === +delivery?.office;
        }
      });

      return {
        value: delivery?.office,
        label: (
          <>
            <GeoIcon width={24} height={24}>
              <use href={`${sprite}#geo`} />
            </GeoIcon>
            <span>{selectedLabel}</span>
          </>
        ),
      };
    }
  }

  return (
    inCart.length > 0 && (
      <>
        <PageTitle>Доставка</PageTitle>
        <ContainerLimiter paddingTopMob={'24px'} paddingTopDesc={'80px'}>
          <DeliveryBox>
            <Form onSubmit={submitHandle} id="delivery">
              <h2>Адреса доставки</h2>
              <FlexContainer>
                <label className="short">
                  Ім’я
                  <input
                    placeholder="Тарас"
                    name="name"
                    type="text"
                    className="short"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'name')}
                    defaultValue={delivery?.name ? delivery?.name : undefined}
                  />
                </label>
                <label className="short">
                  Прізвище
                  <input
                    placeholder="Шевченко"
                    name="surname"
                    type="text"
                    className="short"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'surname')}
                    defaultValue={
                      delivery?.surname ? delivery?.surname : undefined
                    }
                  />
                </label>
                <label>
                  Країна
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'country'}
                    placeholder={'Оберіть країну'}
                    options={getOptions(['Україна', 'Польща'])}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => saveValue(e as object, 'country')}
                    value={delivery?.country ? delivery?.country : undefined}
                  />
                </label>
                <label>
                  Регіон
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'oblast'}
                    placeholder={'Оберіть регіон'}
                    options={getOptions(['Україна', 'Польща'])}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => saveValue(e as object, 'oblast')}
                    value={delivery?.oblast ? delivery?.oblast : undefined}
                  />
                </label>
                <label>
                  Місто
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'city'}
                    placeholder={'Оберіть місто'}
                    options={getOptions(['Україна', 'Польща'])}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => saveValue(e as object, 'city')}
                    value={delivery?.city ? delivery?.city : undefined}
                  />
                </label>
                <label>
                  Служба доставки
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'post'}
                    placeholder={'Оберіть службу доставки'}
                    options={getOptions(
                      ['Нова Пошта (1-3 днів)', 'Укрпошта (3-12 днів)'],
                      ['novaposhta', 'ukrpost'],
                    )}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => saveValue(e as object, 'post')}
                    value={delivery?.post ? delivery?.post : undefined}
                  />
                </label>
                <label>
                  Номер відділення
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'office'}
                    placeholder={'Оберіть номер відділення'}
                    options={getOfficeOptions(
                      [
                        'Відділеня 23, проспект Перемоги 1',
                        'Відділеня 11, вул. Вербицького 14',
                        'Відділеня 4, Харківське шосе 3',
                      ],
                      ['23', '11', '4'],
                    )}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => {
                      const el = e as { value: string };
                      saveValue(el.value as string, 'office');
                    }}
                    value={getOfficeValue()}
                  />
                </label>
                <label>
                  Вид оплати
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'payment'}
                    placeholder={'Оберіть вид оплати'}
                    options={getOptions(['Оплата онлайн', 'Оплата Готівкою'])}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => saveValue(e as object, 'payment')}
                    value={delivery?.payment ? delivery?.payment : undefined}
                  />
                </label>
                <label>
                  Номер телефону
                  <InputMask
                    placeholder="38067 123 4567"
                    mask="99999 999 9999"
                    name="phone"
                    type="tel"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'phone')}
                    defaultValue={delivery?.phone ? delivery?.phone : undefined}
                  />
                </label>
                <label>
                  Email
                  <input
                    placeholder="myemail@gmail.com"
                    name="email"
                    type="email"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'email')}
                    defaultValue={delivery?.email ? delivery?.email : undefined}
                  />
                </label>
              </FlexContainer>
              <h3>Додаткова інформація</h3>
              <label>
                Коментар щодо замовлення (не обов’язково)
                <textarea
                  placeholder="Напишіть щось"
                  name="comment"
                  onInput={(e) => {
                    const textarea = e.target as HTMLTextAreaElement;
                    saveValue(textarea.value, 'comment');
                  }}
                  defaultValue={
                    delivery?.comment ? delivery?.comment : undefined
                  }
                ></textarea>
              </label>
              <button type="submit" form="delivery" className="primaryBtn">
                продовжити
              </button>
            </Form>
            <aside>
              <InvoiceInfo inCart={inCart} />

              <button type="submit" form="delivery" className="primaryBtn">
                продовжити
              </button>
            </aside>
          </DeliveryBox>
        </ContainerLimiter>
      </>
    )
  );
};
export default Delivery;
