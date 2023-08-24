import balooThambi2 from "@/font";
import "./globals.css";
import WelcomeScreen from "@/components/WelcomeScreen";
import Header from "@/components/Header";

export const metadata = {
  title: "Rick and Morty - API",
  description:
    "Explore an exciting project inspired by the Rick and Morty universe. Join us on this adventure as we classify and introduce the human characters from the series, with extra details and creativity added for an extra touch!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${balooThambi2.variable} no-scroll`}>
        <WelcomeScreen />
        <Header />
        {children}
      </body>
    </html>
  );
}
