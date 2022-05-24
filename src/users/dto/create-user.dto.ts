import { IsEmail, IsEnum, IsIn, IsInstance, IsNotEmpty, IsNumber, IsObject, IsString, IS_INSTANCE, ValidateNested } from "class-validator";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export class Address {
  @IsNotEmpty()
  @IsString()
  address1: string;

  @IsNotEmpty()
  @IsString()
  address2: string;

  @IsNotEmpty()
  @IsNumber()
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

  @ValidateNested()
  @IsNotEmpty()
  address: Address;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;
}

