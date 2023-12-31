export const metadata = { title: "Mechamongus", description: "PC Ecommerce" };
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Nav</div>\{children}
    </div>
  );
};

export default AdminLayout;
