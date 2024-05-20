import { Quote as TQuote } from "../api/quote/Quote";

export const QUOTE_TITLE_FIELD = "author";

export const QuoteTitle = (record: TQuote): string => {
  return record.author?.toString() || String(record.id);
};
