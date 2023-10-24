import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
import { getNestedValues } from "../../helpers/get-nested-values";
import "./dataTable.css";

function descendingComparator<T>(a: T, b: T, orderBy?: keyof T) {
  const compareField = orderBy || "id";
  const firstElement = a as any;
  const secondElement = b as any;
  if (secondElement[compareField] < firstElement[compareField]) {
    return -1;
  }
  if (secondElement[compareField] > firstElement[compareField]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy?: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array?.map?.(
    (el, index) => [el, index] as [T, number]
  );
  stabilizedThis?.sort?.((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map?.((el) => el[0]);
}

interface EnhancedTableProps<T> {
  numSelected: number;
  headCells: readonly HeadCell<T>[];
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  checkboxes?: boolean;
}

function EnhancedTableHead<T>(props: EnhancedTableProps<T>) {
  const {
    onSelectAllClick,
    headCells,
    order,
    orderBy,
    numSelected,
    rowCount,
    checkboxes,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof T) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {checkboxes && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all",
              }}
            />
          </TableCell>
        )}

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id as React.Key}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

        <TableCell>Ações</TableCell>
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  title?: string;
  addHandler?: Function;
  hideCreate?: boolean;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, title, addHandler, hideCreate } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          {!hideCreate && (
            <Button
              className="btn-add"
              onClick={() => {
                addHandler?.();
              }}
            >
              <AddIcon></AddIcon>
              Adicionar
            </Button>
          )}
          <Tooltip title="Filtrar">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
}

interface HeadCell<T> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric: boolean;
}

// type Rows = {
//   [x: string]: string | number;
//   [x: number]: string | number;
//   [x: symbol]: string | number;
// };

type DataTableProps<T> = {
  rows: T[];
  headCells: readonly HeadCell<T>[];
  checkboxes?: boolean;
  title?: string;
  viewHandler?: Function;
  editHandler?: Function;
  addHandler?: Function;
  deleteHandler?: Function;
  hideDelete?: boolean;
  hideUpdate?: boolean;
  hideCreate?: boolean;
};

export default function DataTable<T extends Record<string, any>>(
  props: DataTableProps<T>
) {
  const {
    rows,
    headCells,
    checkboxes,
    title,
    viewHandler,
    editHandler,
    addHandler,
    deleteHandler,
    hideDelete,
    hideUpdate,
    hideCreate,
  } = props;
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof T>();
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof T
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows?.map((n: any) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (
    event: React.MouseEvent<unknown>,
    name: string,
    id: number,
    checkboxes?: boolean
  ) => {
    if (checkboxes) {
      const selectedIndex = selected?.indexOf?.(name);
      let newSelected: readonly string[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected?.concat?.(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected?.concat?.(selected?.slice?.(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected?.concat?.(selected?.slice?.(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected?.concat?.(
          selected?.slice?.(0, selectedIndex),
          selected?.slice?.(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy))?.slice?.(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [rows, order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          title={title}
          addHandler={addHandler}
          hideCreate={hideCreate}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              headCells={headCells}
              order={order}
              orderBy={String(orderBy) ?? "id"}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              checkboxes={checkboxes}
            />
            <TableBody>
              {visibleRows?.map((row, index) => {
                const isItemSelected = isSelected(String(row?.name));
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) =>
                      handleClick(
                        event,
                        String(row?.name),
                        Number(row?.id),
                        checkboxes
                      )
                    }
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={`${row.name}-${row.id}`}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {checkboxes && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                    )}

                    {headCells.map((cell, index) => {
                      return (
                        <TableCell
                          key={String(cell.id) + row.id}
                          component="th"
                          id={String(row.id)}
                          scope="row"
                          align="center"
                        >
                          {/* {row[String(cell.id)]} */}
                          {getNestedValues(row, cell.id)}
                        </TableCell>
                      );
                    })}

                    <TableCell className="actions">
                      <IconButton
                        onClick={() => {
                          viewHandler?.(row?.id);
                        }}
                      >
                        <VisibilityIcon></VisibilityIcon>
                      </IconButton>
                      {!hideUpdate && (
                        <IconButton onClick={() => editHandler?.(row?.id)}>
                          <EditIcon className="icon-edit"></EditIcon>
                        </IconButton>
                      )}
                      {!hideDelete && (
                        <IconButton
                          onClick={() => {
                            deleteHandler?.(row?.id);
                          }}
                        >
                          <DeleteIcon className="icon-delete"></DeleteIcon>
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
