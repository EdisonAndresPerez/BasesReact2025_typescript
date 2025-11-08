//import MyAwesomeApp from './MyAwesomeApp'
import ItemCounter from "./shoppingCart/ItemCounter";

interface itemCart {
  productName: string;
  quantity: number;
  availableQuantity: number;
  isActive: boolean;
}

const itemsCart: itemCart[] = [
  {
    productName: "Portatil V15 Lenovo",
    quantity: 10,
    availableQuantity: 0,
    isActive: false,
  },
  {
    productName: "Consola Nintendo DS",
    quantity: 15,
    availableQuantity: 10,
    isActive: true,
  },
  {
    productName: "Consola Nintendo 3DS",
    quantity: 15,
    availableQuantity: 0,
    isActive: false,
  },
  {
    productName: "Portatil V15 Lenovo 1660 SUPER 16G-RAM",
    quantity: 20,
    availableQuantity: 8,
    isActive: true,
  },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      <hr />

      <div>
        {/*   
      <ItemCounter name="Portatil V15 Lenovo" quantity={10} />
      <ItemCounter name="Consola Nintendo DS" quantity={20} />
      <ItemCounter name="Consola Nintendo 3DS" quantity={30} />
      <ItemCounter name="Portatil V15 Lenovo 1660 SUPER 16G-RAM" quantity={40}/>
      */}

        {itemsCart.map(({ productName, quantity, availableQuantity, isActive }) => (
          <ItemCounter
            key={productName}
            name={productName}
            quantity={quantity}
            availableQuantity={availableQuantity}
            isActive={isActive}
          />
        ))}
      </div>
    </>
  );
}
