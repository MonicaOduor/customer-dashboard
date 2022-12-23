import Footer from "../../components/footer/Footer";
import ClientsTable from "../../components/ClientsTable/ClientsTable";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Clients() {
  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main">
        <div className="main_cards">
          <div className="card">
            <ClientsTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
