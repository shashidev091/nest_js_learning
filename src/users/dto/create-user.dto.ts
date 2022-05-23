import { IsEmail, IsEnum, IsIn, IsInstance, IsNotEmpty, IsNumber, IsObject, IsString, IS_INSTANCE } from "class-validator";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export class Address {
  address1: string;
  address2: string;
  pincode: number;
}
export class CreateUser {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  mobile: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInstance(Address)
  @IsNotEmpty()
  address: Address;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;
}

