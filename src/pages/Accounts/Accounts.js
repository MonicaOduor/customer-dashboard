import AccountsTable from "../../components/AccountsTable/AccountsTable";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";

export default function Accounts() {
  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main">
        <div className="main_widgets">
          <Widgets />
        </div>
        <div className="main_cards">
          <div className="card">
            Recent Accounts Created
            <AccountsTable />
          </div>
          <div className="card p-5">
            <small className="text-center text-secondary">
              <strong>YOU ARE NOT AUTHORIZED TO ACCESS THIS SECTION</strong>
            </small>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
