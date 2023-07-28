import { ChangeEvent, useState } from "react";
import ICustomerData from "../types/Customer";
import CustomerService from "../services/CustomerService";
import { Link } from "react-router-dom";

const AddCustomer: React.FC = () => {
	const initialCustomerState = {
		id: null,
		birthDate: "",
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		state: "",
		zipCode: "",
	};
	const [customer, setCustomer] = useState<ICustomerData>(initialCustomerState);
	const [submitted, setSubmitted] = useState<boolean>(false);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setCustomer({ ...customer, [name]: value });
	};

	const saveCustomer = () => {
		let data = {
			birthDate: customer.birthDate,
			firstName: customer.firstName,
			lastName: customer.lastName,
			address: customer.address,
			city: customer.city,
			state: customer.state,
			zipCode: customer.zipCode,
		};

		CustomerService.create(data).then((response: any) => {
			setCustomer({
				birthDate: response.data.birthDate,
				firstName: response.data.firstName,
				lastName: response.data.lastName,
				address: response.data.address,
				city: response.data.city,
				state: response.data.state,
				zipCode: response.data.zipCode,
			});
			setSubmitted(true);
		});
	};

	const newCustomer = () => {
		setCustomer(initialCustomerState);
		setSubmitted(false);
	};
	return (
		<div>
			{submitted ? (
				<div>
					Customer added successfully. Next, continue to create{" "}
					<Link to={"/accounts/add-account"} className="btn btn-link">
						a new account
					</Link>{" "}
					or{" "}
					<Link to={"/customers"} className="btn btn-link">
						view all customers.
					</Link>
				</div>
			) : (
				<form className="card m-2 form-horizontal" onSubmit={saveCustomer}>
					<div className="card-header">
						<h3 className="card-title text-center">Add New Customer</h3>
					</div>
					<div className="card-body">
						<div className="column col-12 py-2">
							<div className="form-group">
								<div className="col-3 col-sm-12">
									<label className="form-label" htmlFor="firstName">
										First Name:
									</label>
								</div>
								<div className="col-9 col-sm-12">
									<input
										className="form-input"
										type="text"
										id="firstName"
										value={customer.firstName}
										onChange={handleInputChange}
										name="firstName"
									/>
								</div>
							</div>
						</div>
						<div className="column col-12 py-2">
							<div className="form-group">
								<div className="col-3 col-sm-12">
									<label className="form-label" htmlFor="lastName">
										Last Name:
									</label>
								</div>
								<div className="col-9 col-sm-12">
									<input
										className="form-input"
										type="text"
										id="lastName"
										value={customer.lastName}
										onChange={handleInputChange}
										name="lastName"
									/>
								</div>
							</div>
						</div>
						<div className="column col-12 py-2">
							<div className="form-group">
								<div className="col-3 col-sm-12">
									<label className="form-label" htmlFor="birthDate">
										Birth Date:
									</label>
								</div>
								<div className="col-9 col-sm-12">
									<input
										className="form-input"
										type="date"
										id="birthDate"
										value={customer.birthDate}
										onChange={handleInputChange}
										name="birthDate"
									/>
								</div>
							</div>
						</div>
						<div className="column col-12 py-2">
							<div className="form-group">
								<div className="col-3 col-sm-12">
									<label className="form-label" htmlFor="address">
										Address:
									</label>
								</div>
								<div className="col-9 col-sm-12">
									<input
										className="form-input"
										type="text"
										id="address"
										value={customer.address}
										onChange={handleInputChange}
										name="address"
									/>
								</div>
							</div>
						</div>
						<div className="column col-12 py-2">
							<div className="form-group">
								<div className="col-3 col-sm-12">
									<label className="form-label" htmlFor="city">
										City:
									</label>
								</div>
								<div className="col-9 col-sm-12">
									<input
										className="form-input"
										type="text"
										id="city"
										value={customer.city}
										onChange={handleInputChange}
										name="city"
									/>
								</div>
							</div>
						</div>
						<div className="column col-12 py-2">
							<div className="form-group">
								<div className="col-3 col-sm-12">
									<label className="form-label" htmlFor="state">
										State:
									</label>
								</div>
								<div className="col-9 col-sm-12">
									<input
										className="form-input"
										type="text"
										id="state"
										value={customer.state}
										onChange={handleInputChange}
										name="state"
									/>
								</div>
							</div>
						</div>
						<div className="column col-12 py-2">
							<div className="form-group">
								<div className="col-3 col-sm-12">
									<label className="form-label" htmlFor="zipCode">
										Zip Code:
									</label>
								</div>
								<div className="col-9 col-sm-12">
									<input
										className="form-input"
										type="text"
										id="zipCode"
										value={customer.zipCode}
										onChange={handleInputChange}
										name="zipCode"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer text-center">
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default AddCustomer;