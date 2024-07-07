import { useEffect } from "react";
import Loader from "../components/ui/loaders/spinner/spinner";
import { useRouter } from "next/router";
import { useUser } from "../framework/rest/auth";

const PrivateRoute = ({ children }: any) => {
  const router = useRouter();
  const { me, isAuthorized } = useUser();

  useEffect(() => {
    if (!me && !isAuthorized) {
      router.push("/login");
    }
  }, [me, isAuthorized, router]);

  if (me && isAuthorized) {
    return <>{children}</>;
  }

  return <Loader />;
};

export default PrivateRoute;
