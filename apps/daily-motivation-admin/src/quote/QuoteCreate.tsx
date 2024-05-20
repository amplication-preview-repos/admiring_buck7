import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const QuoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
