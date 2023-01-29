import { useMediaQuery } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EditButton } from "react-admin";
import AdminPagination from "./AdminPagination";
import AdminSearchBar from "./AdminSearchBar";

export default function ShopsList() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List pagination={<AdminPagination />} actions={<AdminSearchBar />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.address}
          tertiaryText={(record) => record.type}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="brand" />
          <TextField source="type" />
          <TextField source="address" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}
