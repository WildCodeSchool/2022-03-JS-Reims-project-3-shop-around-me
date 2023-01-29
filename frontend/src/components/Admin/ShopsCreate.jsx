import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
} from "react-admin";

export default function ShopsCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="brand" initialValue="" />
        <TextInput source="type" initialValue="" />
        <TextInput source="address" initialValue="" />
        <TextInput source="website" initialValue="" />
        <TextInput source="email" initialValue="" />
        <TextInput source="phone" initialValue="" />
        <TextInput source="fb_page" initialValue="" />
        <TextInput source="insta_page" initialValue="" />
        <NumberInput source="x" initialValue="" validate={[required()]} />
        <NumberInput source="y" initialValue="" validate={[required()]} />
        <TextInput source="img_url" initialValue="" />
      </SimpleForm>
    </Create>
  );
}
