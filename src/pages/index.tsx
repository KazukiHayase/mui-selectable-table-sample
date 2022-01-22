import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { NextPage } from "next";
import { useRowSelect } from "../hooks/useRowSelect";
import {
  HeadCell,
  SelectableTableHead,
} from "../components/SelectableTableHead";

const headCells: HeadCell[] = [
  {
    id: "name",
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    label: "Calories",
  },
  {
    id: "fat",
    label: "Fat (g)",
  },
  {
    id: "carbs",
    label: "Carbs (g)",
  },
  {
    id: "protein",
    label: "Protein (g)",
  },
];

type Data = {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
};

const createData = (
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data => {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
};

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

const IndexPage: NextPage = () => {
  const {
    selectedRowIds,
    isSelected,
    isSelectedAll,
    isIndeterminate,
    toggleSelected,
    toggleSelectedAll,
  } = useRowSelect(rows.map((row) => row.id));

  return (
    <Box sx={{ maxWidth: 1500, mx: "auto" }}>
      <Typography variant="h4" sx={{ py: 2 }}>
        Selectable Table Sample
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <SelectableTableHead
            onSelectAllClick={toggleSelectedAll}
            headCells={headCells}
            checked={isSelectedAll}
            indeterminate={isIndeterminate}
          />
          <TableBody>
            {rows.map((row) => {
              const isItemSelected = isSelected(row.id);

              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => toggleSelected(row.id)}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ py: 2 }}>
        <Typography variant="h5">selectedRowIds</Typography>
        <Typography>{JSON.stringify(selectedRowIds)}</Typography>
      </Box>
    </Box>
  );
};

export default IndexPage;
