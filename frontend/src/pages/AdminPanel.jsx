import { Admin, Resource } from "react-admin";
import dataProvider from "../services/dataProvider";
import ShopsList from "../components/Admin/ShopsList";
import ShopsEdit from "../components/Admin/ShopsEdit";
import ShopsCreate from "../components/Admin/ShopsCreate";

export default function AdminPanel() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource
        name="shops"
        list={ShopsList}
        edit={ShopsEdit}
        create={ShopsCreate}
      />
    </Admin>
  );
}
