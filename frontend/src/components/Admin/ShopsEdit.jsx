import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export default function ShopsEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="brand" />
        <TextInput source="type" />
        <TextInput source="address" />
        <TextInput source="website" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="fb_page" />
        <TextInput source="insta_page" />
        <NumberInput source="x" />
        <NumberInput source="y" />
        <TextInput source="img_url" />
      </SimpleForm>
    </Edit>
  );
}
