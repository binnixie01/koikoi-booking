export default function RootLayout({
  children,
}) {
  return (
    <div className="flex h-screen flex-col">

      <main>{children}</main>

    </div>
  );
}