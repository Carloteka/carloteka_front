import css from './Delivery.module.scss';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { CartContext } from '../../components/Layout';
// import { Loader } from '../../components/Loader/Loader';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { InputMask } from 'primereact/inputmask';
import { InvoiceInfo } from '../../components/InvoiceInfo/InvoiceInfo';
import sprite from '../../images/sprite.svg';
import { Good } from '../../../@types/custom';
import {
  fetchNPAreas,
  fetchNPSettlements,
  fetchNPWarehouses,
  createContact,
  createWaybill,
  createOrder,
} from '../../api/api';
import {
  reactSelectStyle,
  checkLocalStorage,
  getTotalPrice,
  getTotalVolume,
} from '../../utils';

type InputObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  name?: string;
};

type NPItemObject =
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Ref?: string;
      Description: string;
    }
  | undefined;

const Delivery = () => {
  const navigate = useNavigate();
  const { amountInCart } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);
  const [weightError, setWeightEror] = useState(false);
  const [serverError, setServerEror] = useState(false);
  const [warehouseError, setWarehouseError] = useState(false);

  const [delivery, setDelivery] = useState<InputObject>();

  const regionsOptions = checkLocalStorage('regionsOptions', []);
  const cityOptions = checkLocalStorage('cityOptions', []);
  const officeOptions = checkLocalStorage('officeOptions', []);

  const deliveryData = checkLocalStorage('delivery', {});

  const c: { Description: string; value: string } = { ...deliveryData?.city };

  c.Description = c?.value ? c.value : '';
  const o = deliveryData?.office?.value;

  const [areasUkr, setAreasUkr] =
    useState<{ Description: string }[]>(regionsOptions);
  const [settlements, setSettlements] = useState<[]>(cityOptions);
  const [warehouses, setWarehouses] = useState(officeOptions);
  const [town, setTown] = useState<NPItemObject>(c);
  const [office, setOffice] = useState<NPItemObject>(o);

  async function getNPAreas() {
    try {
      setIsLoading(true);
      const data = await fetchNPAreas();
      setAreasUkr(data);
      localStorage.setItem('regionsOptions', JSON.stringify(data ? data : []));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNPSettlements(Ref: string) {
    try {
      setIsLoading(true);
      const data = await fetchNPSettlements(Ref);
      setSettlements(data);

      localStorage.setItem('cityOptions', JSON.stringify(data ? data : []));
      if (
        !data.some(
          (el: NPItemObject) => el?.Description === delivery?.city?.value,
        )
      ) {
        setTown(undefined);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNPWarehouses(Ref: string) {
    try {
      setIsLoading(true);
      const data = await fetchNPWarehouses(Ref);
      if (data === 500) {
        setServerEror(true);
      }
      if (serverError && data !== 500) {
        setServerEror(false);
      }
      if (data.length === 0) {
        setWarehouseError(true);
      }
      if (data.length > 0) {
        setWarehouseError(false);
      }

      setWarehouses(typeof data === 'number' || data.length === 0 ? [] : data);
      localStorage.setItem(
        'officeOptions',
        JSON.stringify(
          typeof data === 'number' || data.length === 0 ? [] : data,
        ),
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const deliveryData = checkLocalStorage('delivery', {});
    setDelivery(deliveryData);

    if (deliveryData?.city?.value && !deliveryData?.office?.value) {
      const choosenCity: NPItemObject | undefined = settlements.find(
        (el: NPItemObject) => el?.Description === deliveryData?.city?.value,
      );
      if (choosenCity) {
        getNPWarehouses(choosenCity['Ref'] as string);
      }
    }
  }, []);

  const goodsInCart = checkLocalStorage('cart', []);
  if (goodsInCart.length === 0) {
    navigate('/cart');
  }

  const [inCart, setInCart] = useState<Good[]>(goodsInCart);
  useEffect(() => {
    if (
      inCart.length !== amountInCart ||
      JSON.stringify(inCart) !== JSON.stringify(goodsInCart)
    ) {
      setInCart(goodsInCart);
    }
  }, [inCart, amountInCart]);
  // console.log(inCart);

  function submitHandle(e: React.FormEvent) {
    e.preventDefault();

    // if (delivery?.city && warehouses.length > 0 && warehouses[0] === 404) {
    //   return;
    // }
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
    deliveryDataForBackend.phone = deliveryDataForBackend.phone.replaceAll(
      ' ',
      '',
    );
    const {
      first_name,
      last_name,
      phone,
      email,
      country,
      oblast: region,
      city,
      post,
      office,
      payment: payment_method,
      comment,
    } = deliveryDataForBackend;
    // const deliveryDataForBackend = { ...delivery };
    // for (const key in delivery) {
    //   if (typeof delivery[key] === 'object') {
    //     deliveryDataForBackend[key] = delivery[key].value;
    //   }
    // }

    function getOfficeObj() {
      const officeOptionsObjs = checkLocalStorage('officeOptions', []);
      const officeObj = officeOptionsObjs.find(
        (el: { Description: string }) =>
          el.Description === delivery?.office.value,
      );
      return officeObj;
    }
    const officeObj = getOfficeObj();

    const cost = getTotalPrice(inCart);
    const volume_general = +getTotalVolume(inCart).toFixed(3);
    // const volume_general = 0.029;
    // const weight = +(0.3 * volume_general).toFixed(2);
    const weight = 0.029;
    const items = inCart.map((el) => {
      return { quantity: el?.quantity ? el.quantity : 1, item: el.id };
    });

    async function createOrders() {
      try {
        setIsLoading(true);
        const contact = await createContact({
          first_name,
          middle_name: 'Петрович',
          last_name,
          phone,
          email,
        });

        const waybill_np = await createWaybill({
          description: "Дерев'яні вироби",
          cost,
          volume_general,
          weight,
          recipient_contact: contact.Ref,
          recipient_address: officeObj.Ref,
          recipient_warehouse_index: officeObj.WarehouseIndex,
          recipient_phone: phone,
        });
        if (waybill_np === 'weightError') {
          setWeightEror(true);
          return;
        }
        console.log(waybill_np, 'waybill');

        const order = await createOrder({
          items,
          waybill_np,
          payment_status: 'None',
          acq_id: 0,
          first_name,
          last_name,
          email,
          phone_number: phone,
          total_amount: cost,
          country,
          region,
          city,
          delivery_service: post,
          postoffice: office,
          postbox: null,
          status: 'new',
          payment_method,
          comment,
        });
        console.log(order, 'order');
        if (order?.order_id) {
          localStorage.setItem('order_id', JSON.stringify(order.order_id));
          const temp = checkLocalStorage('delivery', {});
          temp.cart = goodsInCart;
          localStorage.setItem('delivery', JSON.stringify(temp));
          navigate('/payment');
          // e.form.reset();
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    createOrders();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function saveValue(e: any | string, field: string) {
    const temp = checkLocalStorage('delivery', {});
    let newArray;
    if (typeof e === 'string') {
      newArray = { ...temp, [field]: e };
    }

    newArray = { ...temp, [field]: e };
    localStorage.setItem('delivery', JSON.stringify(newArray));

    if (field === 'country' && e.value === 'Україна' && areasUkr.length === 0) {
      getNPAreas();
    }
    if (field === 'oblast') {
      const area: NPItemObject | undefined = areasUkr.find(
        (el: NPItemObject) => el?.Description === e.value,
      );
      if (area) {
        getNPSettlements(area?.Ref as string);
      }
    }
    if (field === 'city') {
      const choosenCity: NPItemObject | undefined = settlements.find(
        (el: NPItemObject) => el?.Description === e.value,
      );
      if (choosenCity) {
        setTown(choosenCity);
        setOffice(undefined);
        getNPWarehouses(choosenCity['Ref'] as string);

        const newArray = JSON.parse(localStorage.getItem('delivery') as string);
        delete newArray.office;
        localStorage.setItem('delivery', JSON.stringify(newArray));
      }
    }
    if (field === 'office') {
      setOffice(e.value);
    }

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

  const getOfficeOptions = (labelsArray: string[]) =>
    labelsArray.map((item) => {
      return {
        value: item,
        label: (
          <>
            <svg className={css.geoIcon} width={24} height={24}>
              <use href={`${sprite}#geo`} />
            </svg>
            <span>{item}</span>
          </>
        ),
      };
    });

  return (
    inCart.length > 0 && (
      <>
        {/* {isLoading && <Loader />} */}
        <ContainerLimiter>
          <section className="deliveryWrapper">
            {serverError ? (
              <p>
                Наразі сервер наших партнерів недоступний. Спробуйте вибрати
                місто для доставки ще раз, або зв&apos;яжіться з нами для
                оформлення заказу
              </p>
            ) : (
              <form
                onSubmit={submitHandle}
                id="delivery"
                className={`payment-delivery_form ${css.deliveryForm}`}
              >
                <h2>Адреса доставки</h2>
                <div>
                  <label className="short">
                    Ім&apos;я
                    <input
                      placeholder="Тарас"
                      name="first_name"
                      type="text"
                      className="short"
                      required
                      onBlur={(e) => saveValue(e.target.value, 'first_name')}
                      defaultValue={
                        delivery?.first_name ? delivery?.first_name : undefined
                      }
                    />
                  </label>
                  <label className="short">
                    Прізвище
                    <input
                      placeholder="Шевченко"
                      name="last_name"
                      type="text"
                      className="short"
                      required
                      onBlur={(e) => saveValue(e.target.value, 'last_name')}
                      defaultValue={
                        delivery?.last_name ? delivery?.last_name : undefined
                      }
                    />
                  </label>
                  <label>
                    Служба доставки
                    <Select
                      className="react-select-container"
                      classNamePrefix="rs"
                      name={'post'}
                      placeholder={'Оберіть службу доставки'}
                      options={getOptions(
                        ['Нова Пошта (1-3 днів)', 'Укрпошта (3-12 днів)'],
                        ['nova_post', 'ukr_post'],
                      )}
                      styles={reactSelectStyle}
                      required
                      onChange={(e) => saveValue(e as object, 'post')}
                      value={delivery?.post ? delivery?.post : undefined}
                    />
                  </label>
                  {delivery?.post && (
                    <label>
                      Країна
                      <Select
                        className="react-select-container"
                        classNamePrefix="rs"
                        name={'country'}
                        placeholder={'Оберіть країну'}
                        options={getOptions(['Україна', 'Польща'])}
                        styles={reactSelectStyle}
                        required
                        onChange={(e) => saveValue(e as object, 'country')}
                        value={
                          delivery?.country ? delivery?.country : undefined
                        }
                      />
                    </label>
                  )}
                  {delivery?.country?.value === 'Україна' && (
                    <label>
                      Регіон
                      <Select
                        className="react-select-container"
                        classNamePrefix="rs"
                        name={'oblast'}
                        placeholder={
                          isLoading ? 'Завантаження' : 'Оберіть регіон'
                        }
                        options={
                          delivery?.country?.value === 'Україна'
                            ? getOptions(
                                areasUkr?.map((el: { Description: string }) => {
                                  return el.Description;
                                }),
                              )
                            : []
                        }
                        styles={reactSelectStyle}
                        required
                        onChange={(e) => saveValue(e as object, 'oblast')}
                        value={delivery?.oblast ? delivery?.oblast : undefined}
                      />
                    </label>
                  )}
                  {delivery?.country?.value === 'Україна' &&
                    delivery?.oblast && (
                      <>
                        <label>
                          Місто
                          <Select
                            className="react-select-container"
                            classNamePrefix="rs"
                            name={'city'}
                            placeholder={
                              isLoading ? 'Завантаження' : 'Оберіть місто'
                            }
                            options={
                              delivery?.oblast?.value
                                ? getOptions(
                                    settlements?.map(
                                      (el: { Description: string }) => {
                                        return el.Description;
                                      },
                                    ),
                                  )
                                : []
                            }
                            styles={reactSelectStyle}
                            required
                            onChange={(e) => saveValue(e as object, 'city')}
                            value={town ? getOptions([town.Description]) : []}
                          />
                        </label>
                        {delivery?.city && warehouseError && (
                          <p className="error">
                            Оберіть населений пункт, в якому є відділення Нової
                            Пошти
                          </p>
                        )}
                      </>
                    )}
                  {delivery?.country?.value === 'Україна' && delivery?.city && (
                    <label>
                      Номер відділення
                      <Select
                        className="react-select-container"
                        classNamePrefix="rs"
                        name={'office'}
                        placeholder={
                          warehouseError
                            ? ' У вибраному населенному пункті не має відділень'
                            : isLoading
                            ? 'Завантаження'
                            : 'Оберіть номер відділення'
                        }
                        options={
                          delivery?.post?.value === 'nova_post' &&
                          warehouses.length === 0
                            ? []
                            : getOfficeOptions(
                                warehouses?.map(
                                  (el: { Description: string }) => {
                                    return el.Description;
                                  },
                                ),
                              )
                        }
                        styles={reactSelectStyle}
                        required
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange={(e: any) =>
                          saveValue(
                            {
                              value: e.value,
                              label: e.value,
                            } as object,
                            'office',
                          )
                        }
                        value={
                          office
                            ? getOfficeOptions([office as unknown as string])
                            : []
                        }
                        isDisabled={
                          !town ||
                          !delivery?.city ||
                          warehouses.length === 0 ||
                          warehouseError
                        }
                      />
                    </label>
                  )}
                  {weightError && (
                    <p className="error">
                      Оберіть відділення, що приймає посилки вагою більше 30кг
                    </p>
                  )}

                  <label>
                    Вид оплати
                    <Select
                      className="react-select-container"
                      classNamePrefix="rs"
                      name={'payment'}
                      placeholder={'Оберіть вид оплати'}
                      options={getOptions(
                        ['Оплата онлайн', 'Оплата Готівкою'],
                        ['online', 'cod'],
                      )}
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
                      value={delivery?.phone ? delivery?.phone : undefined}
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
                      defaultValue={
                        delivery?.email ? delivery?.email : undefined
                      }
                    />
                  </label>
                </div>
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
              </form>
            )}
            <aside className={css.aside}>
              <InvoiceInfo inCart={inCart} total={+getTotalPrice(inCart)} />

              <button type="submit" form="delivery" className="primaryBtn">
                продовжити
              </button>
            </aside>
          </section>
        </ContainerLimiter>
      </>
    )
  );
};
export default Delivery;
