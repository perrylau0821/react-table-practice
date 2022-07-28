import React, { useState } from "react";
import "./style.css";
import { rows, columns } from "../../data/data";
import {
	Container,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "../../../node_modules/@mui/material/index";

export default function IncomeRecord() {
	const [isHovering, setIsHovering] = useState("");
	const [isClicked, setIsClicked] = useState([]);

	const multipleClick = (cell) => (event) => {
		let clickedArray = [];

		setIsClicked(isClicked.concat(cell));
		console.log(isClicked);
	};
	const hovering = (rowId) => (event) => setIsHovering(rowId);

	return (
		<div>
			Income Records
			<Table>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell onClick={multipleClick} sx={{}}>
								{column.headerName}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow sx={{}}>
							{columns.map((column) => (
								<TableCell
									onClick={multipleClick({ row: row.id, column: column.field })}
									onMouseEnter={hovering(row.id)}
									sx={{
										...(isHovering === row.id
											? { backgroundColor: "rgba(0, 0, 255, 0.1)" }
											: null),
									}}
								>
									{column.formatter
										? column.formatter(row[column.field])
										: row[column.field]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
