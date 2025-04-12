import Logo from "@/components/Logo";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-4">
      <Logo />
      {children}
    </div>
  );
}
export default layout;
