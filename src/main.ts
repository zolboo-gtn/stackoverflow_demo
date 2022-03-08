import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { PrismaService } from "src/features/prisma";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["error"],
  });
  app.useGlobalPipes(new ValidationPipe());

  // https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();
