import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

type DashboardSidebarProps = {
  className?: string;
};

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ className }) => {
  //   const { mutate: logout } = useLogout();
  //   const { me } = useUser();
  const { pathname } = useRouter();
  const dashboardSidebarMenu = [
    {
      href: "/profile",
      label: "Profile",
    },
    {
      href: "create-quiz",
      label: "Create Quiz",
    },
    {
      href: "/my-quiz",
      label: "My Quiz",
    },
    {
      href: "/logout",
      label: "Logout",
    },
  ];

  return (
    <aside className={className}>
      <div className="overflow-hidden rounded border border-border-200 bg-light">
        <ul className="py-7">
          {dashboardSidebarMenu?.slice(0, -1).map((item: any, idx) => {
            return (
              <li className="py-1" key={idx}>
                <Link
                  href={item.href}
                  className={classNames(
                    "block border-l-4 border-transparent py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent",
                    {
                      "!border-accent text-accent": pathname === item.href,
                    }
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="border-t border-border-200 bg-light py-4">
          <li className="block py-2 px-11 ">
            <button
              //   onClick={() => logout()}
              className={classNames(
                "font-semibold text-heading transition-colors hover:text-accent focus:text-accent"
              )}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
