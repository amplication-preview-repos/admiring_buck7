/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Quote } from "./Quote";
import { QuoteCountArgs } from "./QuoteCountArgs";
import { QuoteFindManyArgs } from "./QuoteFindManyArgs";
import { QuoteFindUniqueArgs } from "./QuoteFindUniqueArgs";
import { CreateQuoteArgs } from "./CreateQuoteArgs";
import { UpdateQuoteArgs } from "./UpdateQuoteArgs";
import { DeleteQuoteArgs } from "./DeleteQuoteArgs";
import { QuoteService } from "../quote.service";
@graphql.Resolver(() => Quote)
export class QuoteResolverBase {
  constructor(protected readonly service: QuoteService) {}

  async _quotesMeta(
    @graphql.Args() args: QuoteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Quote])
  async quotes(@graphql.Args() args: QuoteFindManyArgs): Promise<Quote[]> {
    return this.service.quotes(args);
  }

  @graphql.Query(() => Quote, { nullable: true })
  async quote(
    @graphql.Args() args: QuoteFindUniqueArgs
  ): Promise<Quote | null> {
    const result = await this.service.quote(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Quote)
  async createQuote(@graphql.Args() args: CreateQuoteArgs): Promise<Quote> {
    return await this.service.createQuote({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Quote)
  async updateQuote(
    @graphql.Args() args: UpdateQuoteArgs
  ): Promise<Quote | null> {
    try {
      return await this.service.updateQuote({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Quote)
  async deleteQuote(
    @graphql.Args() args: DeleteQuoteArgs
  ): Promise<Quote | null> {
    try {
      return await this.service.deleteQuote(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
