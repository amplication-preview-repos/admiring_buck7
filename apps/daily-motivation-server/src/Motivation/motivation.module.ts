import { Module } from "@nestjs/common";
import { MotivationService } from "./motivation.service";
import { MotivationController } from "./motivation.controller";
import { MotivationResolver } from "./motivation.resolver";

@Module({
  controllers: [MotivationController],
  providers: [MotivationService, MotivationResolver],
  exports: [MotivationService],
})
export class MotivationModule {}
