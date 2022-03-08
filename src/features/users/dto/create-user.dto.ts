import { Prisma, Role } from "@prisma/client";
import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class CreateUserDto
  implements Pick<Prisma.UserCreateInput, "email" | "name" | "role">
{
  @IsEmail()
  readonly email: string;

  readonly name?: string;

  readonly role: Role;

  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/, {
    message: "InvalidPasswordFormat",
  })
  readonly password: string;
}
