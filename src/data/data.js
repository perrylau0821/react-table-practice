import { faker } from "@faker-js/faker";
import {
	currencyFormatter,
	dateFormatter,
	paidFormatter,
} from "../utilities/formatter";

export const columns = [
	{ field: "id", headerName: "id" },
	{
		field: "dateStart",
		headerName: "Date Start",
		formatter: dateFormatter,
	},
	{
		field: "dateEnd",
		headerName: "Date End",
		formatter: dateFormatter,
	},
	{ field: "clientName", headerName: "Client Name" },
	{ field: "projectName", headerName: "Project Name" },
	{
		field: "totalIncome",
		headerName: "Total Income",
		formatter: currencyFormatter,
	},
	{ field: "paid", headerName: "Paid", formatter: paidFormatter },
];

export const rows = [];

function createRandomUser() {
	return {
		id: faker.datatype.uuid(),
		dateStart: faker.datatype.datetime(),
		dateEnd: faker.datatype.datetime(),
		clientName: faker.name.firstName(),
		projectName: faker.commerce.productName(),
		totalIncome: faker.datatype.number(),
		paid: faker.datatype.boolean(),
	};
}

Array.from({ length: 10 }).forEach(() => {
	rows.push(createRandomUser());
});
