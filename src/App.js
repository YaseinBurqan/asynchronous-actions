import "./App.css";

import { connect } from "react-redux";
import { getRemoteData } from "./store/actions.jsx";

const App = (props) => {
  return (
    <>
      <button onClick={() => props.getRemoteData()}>Get List</button>
      <section>
        {props.myList.map((item, idx) => {
          return (
            <div className="list-group">
              <div className="card-header" key={idx}>
                Featured
              </div>
              <div className="card-body">
                <h4 className="card-title">
                  email: <h3>{item.email}</h3>
                </h4>
                <p className="card-text">
                  website: <h3>{item.website}</h3>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  myList: state.data,
});
const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
