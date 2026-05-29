export const metadata = {
  title: "Full-Stack SaaS Developer",
  description: "Portfolio of AI SaaS Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}