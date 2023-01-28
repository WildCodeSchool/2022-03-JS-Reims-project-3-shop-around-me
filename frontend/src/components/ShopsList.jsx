import { useMediaQuery } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EditButton } from "react-admin";

export default function ShopsList() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.id}
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
