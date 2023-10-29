export interface IPerson{
  id: number | null;
  name: string;
  lastname: string;
  dni: string;
  city: string;
}

export interface IUser{
  id: number | null;
  email: string;
  password: string;
}
