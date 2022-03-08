import axios from "axios";
import { mapArrToStrings } from "../mapArrToString/mapArrToString";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = response.data.map((user: IUser) => user.id);
    return mapArrToStrings(userIds);
  } catch (e) {
    console.log(e);
  }
};
