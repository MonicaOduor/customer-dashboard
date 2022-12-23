import "./main.css";

import AccountsTable from "../../../components/AccountsTable/AccountsTable";
import QueriesTable from "../../../components/QueriesTable/QueriesTable";
import AddNew from "../../../components/addnewbtn/AddNew";
import Widgets from "./Widgets/Widgets";

export default function Main() {
  return (
    <main className="main">
      <AddNew />
      <div className="main_widgets">
        <Widgets />
      </div>

      <div className="main_cards">
        <div className="card">
          <strong>Recent Queries</strong>
          <QueriesTable />
        </div>
        <div className="card">
          <strong>Recent Accounts Created</strong>
          <AccountsTable />
        </div>
      </div>
    </main>
  );
}
