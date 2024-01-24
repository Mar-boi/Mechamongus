import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Mechamongus Admin",
  description: "PC Ecommerce",
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
