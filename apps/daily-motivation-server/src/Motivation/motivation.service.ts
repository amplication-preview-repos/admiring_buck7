import { Injectable } from "@nestjs/common";
import { ImageDataInput } from "../motivation/ImageDataInput";
import { ImageData } from "../motivation/ImageData";
import { QuoteDataInput } from "../motivation/QuoteDataInput";
import { QuoteData } from "../motivation/QuoteData";

@Injectable()
export class MotivationService {
  constructor() {}
  async CreateImage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewImage(args: ImageDataInput): Promise<ImageData> {
    throw new Error("Not implemented");
  }
  async CreateQuote(args: QuoteDataInput): Promise<QuoteData> {
    throw new Error("Not implemented");
  }
  async FetchRandomImage(args: string): Promise<ImageData> {
    throw new Error("Not implemented");
  }
  async GetRandomImage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetRandomQuote(args: string): Promise<QuoteData> {
    throw new Error("Not implemented");
  }
}
