import { all } from "axios";
import { HttpClient } from "./http-client";

class Client {
  users = {
    me: () => HttpClient.get<any>("/users/me"),
    // update: (user: any) => HttpClient.put<any>(`${"jkj"}/${user.id}`, user),
    login: (input: any) => HttpClient.post<any>("/users/login", input),
    register: (input: any) => HttpClient.post<any>("/users/register", input),
    logout: () => HttpClient.post<boolean>("/users", {}),
  };

  module = {
    all: () => HttpClient.get<any>("/module"),
    module: (input: any) => HttpClient.get<any>(`/module/${input}`),
  };
}

export default new Client();
