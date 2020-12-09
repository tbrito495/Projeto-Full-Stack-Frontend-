import react from "react"
import{Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import AllMusicPage from "./AllMusicPage"

import CreateMusicPage from "./CreateMusicPage"
import LoginPage from "./LoginPage"
import MusicPage from "./MusicPage"

import SignupPage from "./SignupPage"


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
                    <Route exact path={"/music/create"}>
                        <CreateMusicPage/>
                    </Route>
                    <Route exact path= {"/music/:id"}>
                        <MusicPage/>
                    </Route>
                    <Route exact path= {"/music/all"}> 
                        <AllMusicPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
}
export default Router;