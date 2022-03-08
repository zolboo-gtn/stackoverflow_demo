import { Controller, Post, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";

import { RequestUser } from "src/features/users";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local_auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@RequestUser() user: User) {
    return this.authService.login(user);
  }
}
