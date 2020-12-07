import react from "react"
import{Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import LoginPage from "./LoginPage"
import SignupPage from "./signupPage"


  const Router = (props) =>{


        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/signup"}>
                        <SignupPage/>
                    </Route>

                    <Route exact path={"/login"}>
                      <LoginPage/>
                    </Route>
                    <Route exact path={"/music"}>
                        <p>music</p>
                    </Route>
                    <Route exact path= {"/music/:musicId"}>
                        <p> getallmusic</p>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
}
export default Router;