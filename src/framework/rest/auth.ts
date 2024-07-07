import { useToken } from "@/src/lib/hooks/use-token";
import { useAtom } from "jotai";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import client from "./client";
import { authorizationAtom } from "@/src/store/authorization-atom";
import { useRouter } from "next/router";

export function useLogin() {
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { setToken } = useToken();
  const router = useRouter();

  const { mutate, isLoading } = useMutation(client.users.login, {
    onSuccess: (data: any) => {
      setToken(data.token);
      setAuthorized(true);
      router.push("/");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Unknown error");
    },
  });

  return { mutate, isLoading };
}

export function useRegister() {
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const router = useRouter();

  const { mutate, isLoading } = useMutation(client.users.register, {
    onSuccess: (data) => {
      if (data?.success) {
        // setToken(data?.token);
        router.push("/login");
        setAuthorized(true);
        toast.success(data?.message);
        return;
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      toast.error(data.message);
    },
  });

  return { mutate, isLoading };
}

export function useLogout() {
  const queryClient = useQueryClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);

  const { mutate: signOut } = useMutation(client.users.logout, {
    onSuccess: (data) => {
      if (data) {
        setToken("");
        setAuthorized(false);
        queryClient.refetchQueries("me");
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
  function handleLogout() {
    signOut();
  }
  return {
    mutate: handleLogout,
  };
}
