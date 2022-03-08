import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";

import { PrismaService } from "src/features/prisma";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);

    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        hash,
        salt,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ data, where: { id } });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
