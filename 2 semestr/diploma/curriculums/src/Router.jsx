import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CourseMap from "./components/CourseMap";
import SpecialitiesPage from "./components/SpecialitiesPage";

class CirriculaRouter extends React.Component {
    render() {
      return (
        <div>
            <Switch>
                <Route exact path="/" component={SpecialitiesPage} />
                <Route path="/courseMap/:specialityId" component={CourseMap} />
            </Switch>
        </div>
      );
    }
}

export default CirriculaRouter;