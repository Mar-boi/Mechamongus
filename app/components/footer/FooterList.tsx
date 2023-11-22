interface FooterListProps {
  children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div
      className="
    w-full
    sm:w-1/2
    md:w-1/4
    lg:w-1/6
    mb-5
    flex
    flex-col
    gap-2
    ml-4"
    >
      {children}
    </div>
  );
};

export default FooterList;
