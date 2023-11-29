//import "./App.css";
import React from "react";

import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import crudStyles from "./styles/crud.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
	const [fruits, setFruits] = useState([
		{ fruit: "apple", quantity: "12", price: "300" },
		{ fruit: "banana", quantity: "12", price: "200" },
		{ fruit: "orange", quantity: "24", price: "600" },
	]);
	const [currentInput, setCurrentInput] = useState({ fruit: "", quantity: "", price: "" });
	const [selectedIndex, setSelectedIndex] = useState(null);

	const handleTotalPrice = () => {
		return fruits.reduce((acc, curr) => Number(acc) + Number(curr.price), 0);
	};
	const clearFruits = () => {
		setFruits([]);
		setCurrentInput({ fruit: "", quantity: "", price: "" });
	};

	const addFruit = () => {
		if (currentInput.fruit === "" || currentInput.quantity === "" || currentInput.price === "") {
			alert("Please fill the value first....");
		} else {
			const addNewFruit = [...fruits, { ...currentInput }];
			setFruits(addNewFruit);
			setCurrentInput({ fruit: "", quantity: "", price: "" });
		}
	};
	const delFruit = (index) => {
		const deleteFruit = fruits.filter((data, id) => id !== index);
		setFruits(deleteFruit);
	};

	const editFruit = (index) => {
		setCurrentInput(fruits[index]);
		setSelectedIndex(index);
	};
	const updateFruits = () => {
		let updatedFruit = [...fruits];
		updatedFruit[selectedIndex] = currentInput;
		setFruits(updatedFruit);
		setCurrentInput({ fruit: "", quantity: "", price: "" });
		setSelectedIndex(null);
	};
	return (
		<div>
			<Form>
					<p>{<Header />}</p>

				<div className={crudStyles.crudBody}>
					<h3 className={crudStyles.heading}>CRUD Application</h3>

					<div className={crudStyles.inputBlock}>
						<input
							type="text"
							value={currentInput.fruit}
							placeholder="Enter the fruit"
							onChange={(e) => {
								setCurrentInput({ ...currentInput, fruit: e.target.value });
							}}
						/>
						<input
							style={{ marginLeft: "15px" }}
							type="text"
							value={currentInput.quantity}
							placeholder="Enter the quantity"
							onChange={(e) => {
								setCurrentInput({ ...currentInput, quantity: e.target.value });
							}}
						/>
						<input
							style={{ marginLeft: "15px" }}
							type="text"
							value={currentInput.price}
							placeholder="Enter the price"
							onChange={(e) => {
								setCurrentInput({ ...currentInput, price: e.target.value });
							}}
						/>
					</div>
					<div>
						<br />
						<Button
							variant="success"
							onClick={() => {
								addFruit();
							}}
						>
							Add Fruit
						</Button>
						<Button
							className={crudStyles.input_btn}
							variant="info"
							onClick={() => {
								clearFruits();
							}}
						>
							Clear List{" "}
						</Button>
						{selectedIndex !== null && (
							<Button
								className={crudStyles.input_btn}
								variant="dark"
								onClick={() => {
									updateFruits();
								}}
							>
								Update Fruit{" "}
							</Button>
						)}

						<br />
						<br />
					</div>
					<div className={crudStyles.col_setting}>
						{" "}
						<Row className={crudStyles.top_row}>
							<Col>FRUITS</Col>
							<Col>QUANTITY</Col>
							<Col>PRICE</Col>
							<Col></Col>
							<Col></Col>
						</Row>
						<div className={crudStyles.dispBlock}>
							{fruits.map((data, index) => (
								<Row className={crudStyles.row_setting} key={index}>
									<Col>{data.fruit}</Col>
									<Col>{data.quantity}</Col>
									<Col>{data.price}</Col>
									<Col>
										<span>
											{" "}
											<Button
												variant="warning"
												onClick={() => {
													editFruit(index);
												}}
											>
												Eddit
											</Button>
										</span>
									</Col>
									<Col>
										<span>
											{" "}
											<Button
												variant="danger"
												onClick={() => {
													delFruit(index);
												}}
											>
												Delete
											</Button>
										</span>
									</Col>
								</Row>
							))}
						</div>
						<Row className={crudStyles.rowTotPrice}>Total Price={handleTotalPrice()}</Row>
					</div>

					<br />
				</div>
				<p>{<Footer />}</p>
			</Form>
		</div>
	);
}

export default App;
