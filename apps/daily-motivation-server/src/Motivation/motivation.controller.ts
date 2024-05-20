import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MotivationService } from "./motivation.service";
import { ImageData } from "../motivation/ImageData";
import { QuoteData } from "../motivation/QuoteData";

@swagger.ApiTags("motivations")
@common.Controller("motivations")
export class MotivationController {
  constructor(protected readonly service: MotivationService) {}

  @common.Get("/:id/create-image")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateImage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateImage(body);
      }

  @common.Post("/images")
  @swagger.ApiOkResponse({
    type: ImageData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewImage(
    @common.Body()
    body: string
  ): Promise<ImageData> {
        return this.service.CreateNewImage(body);
      }

  @common.Post("/quotes")
  @swagger.ApiOkResponse({
    type: QuoteData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateQuote(
    @common.Body()
    body: string
  ): Promise<QuoteData> {
        return this.service.CreateQuote(body);
      }

  @common.Get("/images/random")
  @swagger.ApiOkResponse({
    type: ImageData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchRandomImage(
    @common.Body()
    body: string
  ): Promise<ImageData> {
        return this.service.FetchRandomImage(body);
      }

  @common.Get("/:id/get-random-image")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetRandomImage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetRandomImage(body);
      }

  @common.Get("/quotes/random")
  @swagger.ApiOkResponse({
    type: QuoteData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetRandomQuote(
    @common.Body()
    body: string
  ): Promise<QuoteData> {
        return this.service.GetRandomQuote(body);
      }
}
