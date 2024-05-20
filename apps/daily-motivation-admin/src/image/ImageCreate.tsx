import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
