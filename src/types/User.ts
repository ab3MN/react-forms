export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
  conditions: boolean;
  image: FileList;
  country: string;
}

export interface IUserWithConvertImage {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
  conditions: boolean;
  image: string;
  country: string;
}
