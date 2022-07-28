import moment from "moment";

export function dateFormatter(value) {
	return moment(value).format("L");
}

export function currencyFormatter(value) {
	return Intl.NumberFormat(undefined, {
		style: "currency",
		currency: "HKD",
	}).format(value);
}

export function paidFormatter(value) {
	return value === true ? "Paid" : "Not Paid";
}
