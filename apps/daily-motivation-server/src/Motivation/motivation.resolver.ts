import * as graphql from "@nestjs/graphql";
import { ImageDataInput } from "../motivation/ImageDataInput";
import { ImageData } from "../motivation/ImageData";
import { QuoteDataInput } from "../motivation/QuoteDataInput";
import { QuoteData } from "../motivation/QuoteData";
import { MotivationService } from "./motivation.service";

export class MotivationResolver {
  constructor(protected readonly service: MotivationService) {}

  @graphql.Query(() => String)
  async CreateImage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateImage(args);
  }

  @graphql.Mutation(() => ImageData)
  async CreateNewImage(
    @graphql.Args()
    args: ImageDataInput
  ): Promise<ImageData> {
    return this.service.CreateNewImage(args);
  }

  @graphql.Mutation(() => QuoteData)
  async CreateQuote(
    @graphql.Args()
    args: QuoteDataInput
  ): Promise<QuoteData> {
    return this.service.CreateQuote(args);
  }

  @graphql.Query(() => ImageData)
  async FetchRandomImage(
    @graphql.Args()
    args: string
  ): Promise<ImageData> {
    return this.service.FetchRandomImage(args);
  }

  @graphql.Query(() => String)
  async GetRandomImage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetRandomImage(args);
  }

  @graphql.Query(() => QuoteData)
  async GetRandomQuote(
    @graphql.Args()
    args: string
  ): Promise<QuoteData> {
    return this.service.GetRandomQuote(args);
  }
}
