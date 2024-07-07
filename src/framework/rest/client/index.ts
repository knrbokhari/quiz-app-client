import { HttpClient } from "./http-client";

class Client {
  users = {
    me: () => HttpClient.get<any>("/users/me"),
    // update: (user: any) => HttpClient.put<any>(`${"jkj"}/${user.id}`, user),
    login: (input: any) => HttpClient.post<any>("/users/login", input),
    register: (input: any) => HttpClient.post<any>("/users/register", input),
    logout: () => HttpClient.post<boolean>("/users", {}),
  };
}

export default new Client();
