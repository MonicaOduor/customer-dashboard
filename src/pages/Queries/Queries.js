import Footer from "../../components/footer/Footer";
import QueriesTable from "../../components/QueriesTable/QueriesTable";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Queries() {
  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main">
        <div className="main_cards">
          <div className="card">
            Recent Accounts Created
            <QueriesTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
