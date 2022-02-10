import Item from "../item/Item";
import { Row } from "react-bootstrap";

const ItemList = ({ productos }) => {
	return (
		<Row xs={1} md={3} lg={4} className="g-4">
			{productos &&
				productos.map((p) => (					
					<Item
						key={p.id}
						id={p.id}
						title={p.title}
						description={p.description}
						price={p.price}
						imageUrl={p.imageUrl}
						stock={p.stock}
						category={p.category.description}
					/>
				))}
		</Row>
	);
};

export default ItemList;