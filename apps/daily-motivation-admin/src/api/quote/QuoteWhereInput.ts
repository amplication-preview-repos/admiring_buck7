import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuoteWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
