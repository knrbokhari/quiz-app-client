import { useEffect } from "react";
import Loader from "../components/ui/loaders/spinner/spinner";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }: any) => {
  const router = useRouter();
  const { me, isAuthorized }: any = {}; // useUser();

  useEffect(() => {
    if (!me && !isAuthorized) {
      router.push("/login");
    }
  }, [me, isAuthorized, router]);

  if (me && isAuthorized) {
    return <>{children}</>;
  }

  // Optional: You can return a loading spinner or a message while redirecting
  return null;
};

export default PrivateRoute;
