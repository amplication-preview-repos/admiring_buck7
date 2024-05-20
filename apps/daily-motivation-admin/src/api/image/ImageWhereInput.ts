import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};
