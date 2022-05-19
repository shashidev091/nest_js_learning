export class CreateUser {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  address: Address;
  gender: Gender;
}

export class Address {
  address1: string;
  address2: string;
  pincode: number;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}
