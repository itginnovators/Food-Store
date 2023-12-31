import "./globals.css";
import { Figtree, Fredoka } from "next/font/google";
import Providers from "./providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const figtree = Figtree({
	subsets: ["latin"],
	variable: "--font-figtree",
});
const fredoka = Fredoka({
	subsets: ["latin"],
	variable: "--font-fredoka",
});

export const metadata = {
	title: "Fofood",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${figtree.variable} ${fredoka.variable}`}>
				<Navbar />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	);
}
