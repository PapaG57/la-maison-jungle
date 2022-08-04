import plantList from '../datas/plantList';

function ShoppingList() {
  return (
    <ul>
      {plantList.map((plant) => (
        <li key={plant.id}>{plant.isBestSale && <span>🔥</span>}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;
