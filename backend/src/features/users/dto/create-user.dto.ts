import { Prisma } from "@prisma/client";
import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class CreateUserDto
  implements Pick<Prisma.UserCreateInput, "email" | "name">
{
  @IsEmail()
  readonly email: string;

  readonly name?: string;

  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/, {
    message: "InvalidPasswordFormat",
  })
  readonly password: string;
}
