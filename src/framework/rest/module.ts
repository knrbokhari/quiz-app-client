import { useQuery } from "react-query";
import client from "./client";

export function useModuleList() {
  const { data, isLoading, error } = useQuery(
    ["/module/me"],
    client.module.all,
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return { data: data?.details, isLoading, error };
}

export function useModule(id: string) {
  const { data, isLoading, error } = useQuery(["/module", { id }], () =>
    client.module.module(id)
  );
  return {
    product: data,
    isLoading,
    error,
  };
}
