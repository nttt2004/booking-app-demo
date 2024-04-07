import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
  includeHeader?: boolean;
  includeFooter?: boolean;
  includeHero?: boolean;
}

const Layout = ({ children, includeHeader = true, includeHero = true, includeFooter = true  }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* {includeHeader && <Header />}
      {includeHero && <Hero />} */}
      <div className="container mx-auto py-10 flex-1">{children}</div>
      {/* {includeFooter && <Footer />} */}
    </div>
  );
};

export default Layout;
