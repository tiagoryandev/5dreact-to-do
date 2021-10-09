import { useState, ChangeEvent } from "react";

import { Container } from "./styles";

import { Item } from "../../types/Item";

type Props = {
	item: Item;
	changeItem: (id: number) => void;
};

const ListItem = ({ changeItem, item }: Props) => {
	const [isChecked, setIsChecked] = useState(item.done);

	const changeChecked = (e: ChangeEvent<HTMLInputElement>): void => {
		setIsChecked(e.target.checked);
		changeItem(item.id);
	};

	return (
		<Container done={isChecked}>
			<input type="checkbox" checked={isChecked} onChange={changeChecked} />
			<label>{item.name} - {item.done ? "Feito" : "Não feito"}</label>
		</Container>
	);
};

export default ListItem;