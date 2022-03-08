import { Module } from "@nestjs/common";

import { AuthModule } from "src/features/auth";
import { QuestionsModule } from "src/features/questions";
import { UsersModule } from "src/features/users";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [AuthModule, QuestionsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
