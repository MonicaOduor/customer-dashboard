import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import "./new.css";

export default function New() {
  return (
    <div className="grid-container">
      <Sidebar />

      <main className="main">
        <div className="main_cards">
          <div className="card">
            <div className="top rounded">
              <h5 className="new-header">Add New Startup/Clients</h5>
            </div>
            <div className="bottom rounded">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <img
                      src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      alt="profile-img"
                      className="img-fluid profile-img"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputText">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mayeku Ltd"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputText">Description</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputNumber">Phone number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+234 803 000 0000"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" placeholder="mayeku@gmail.com"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputText">Features</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputText">Media</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputText">Industry</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputText"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlFile1">
                    <DriveFolderUploadOutlined />
                    Choose logo for your startup
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      I agree to the <span className="text-primary">Terms and Conditions</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
