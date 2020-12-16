import react from "react"
import{Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import AllMusicPage from "../pages/AllMusicPage/AllMusicPage"

import CreateMusicPage from "../pages/CreateMusicPage/CreateMusicPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MusicPage from "../pages/MusicPage/MusicPage"

import SignupPage from "../pages/SignupPage/SignupPage"


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
                   
                    <Route exact path= {"/music/all"}> 
                        <AllMusicPage/>
                    </Route>
                    <Route exact path= {"/music/:id"}>
                        <MusicPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
}
export default Router;