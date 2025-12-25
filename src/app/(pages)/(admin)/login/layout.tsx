export const metadata = {
  title: "Login",
  description: "DCS Login",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
