import { nanoid } from "nanoid";
import logo from "../../assets/images/icon.svg";
import { CustomerList, CustomerItems } from "./Сustomers.styled";

export const Сustomers = () => {
  return (
    <section>
        <h2 className="hidden-title">Сustomers</h2>
      <CustomerList>
        {СustomersData.map((cust) => {
          return (
            <CustomerItems key={cust.id}>
              <img src={cust.img} alt={cust.alt} />
            </CustomerItems>
          );
        })}
      </CustomerList>
    </section>
  );
};

const СustomersData = [
  {
    id: nanoid(),
    img: `${logo}`,
    alt: "logo name",
  },
  {
    id: nanoid(),
    img: `${logo}`,
    alt: "logo name",
  },
  {
    id: nanoid(),
    img: `${logo}`,
    alt: "logo name",
  },
  {
    id: nanoid(),
    img: `${logo}`,
    alt: "logo name",
  },
  {
    id: nanoid(),
    img: `${logo}`,
    alt: "logo name",
  },
  {
    id: nanoid(),
    img: `${logo}`,
    alt: "logo name",
  },
];
