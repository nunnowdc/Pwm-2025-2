const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
    { title: 'Orange', isFruit: true, id: 4 },
];

function Products({product}) {
    return <li key={product.id}>{product.title}</li>
}

export function ProductsList() {
    const listItems = products.map(product =>
    <li key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
    >
        {product.title}
    </li>
    );

    return (
    <ul>{listItems}</ul>
    );
}
