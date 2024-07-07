import classNames from "classnames";
import DashboardSidebar from "../components/dashboard/sidebar";

type Props = {
  layout?: string;
  className?: string;
};

export default function DashboardLayout({
  children,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      {/* <Header /> */}
      <div
        className={classNames(
          "_dashboard mx-auto flex w-full max-w-1920 flex-col items-start bg-gray-100 px-5 py-10 lg:flex-row xl:py-14 xl:px-8 2xl:px-14",
          className
        )}
      >
        <DashboardSidebar className="hidden shrink-0 ltr:mr-8 rtl:ml-8 lg:block lg:w-80" />
        {children}
      </div>
    </div>
  );
}
