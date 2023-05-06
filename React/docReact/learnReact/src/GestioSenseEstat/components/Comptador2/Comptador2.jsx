import { useEffect, useState } from "react";

const Comptador2 = () => {
	const [valor, setValor] = useState(0);
	console.log(valor);

	useEffect(() => {
		valor !== 0 && alert("Actuando useEffect...");
	}, [valor]);

	useEffect(() => {
		return () => {
			alert("Desmontando...");
			setValor(0);
		};
	}, []);

	return (
		<div>
			<button onClick={() => setValor((prev) => prev + 1)}>Clica +1</button>
			<p>Valor: {valor}</p>
		</div>
	);
};

export default Comptador2;