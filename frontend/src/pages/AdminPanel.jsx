import { Admin, Resource } from "react-admin";
import dataProvider from "../services/dataProvider";
import ShopsList from "../components/ShopsList";
import ShopsEdit from "../components/ShopsEdit";
import ShopsCreate from "../components/ShopsCreate";

export default function AdminPanel() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="shops"
        list={ShopsList}
        edit={ShopsEdit}
        create={ShopsCreate}
      />
    </Admin>
  );
}
