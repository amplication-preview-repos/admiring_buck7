import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const QuoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
