import {Route} from 'react-router-dom'

const Welcome = ()=>{
    return(
        <section>
             <h2>welcome page</h2>
             <Route path='/Welcome/new-user'>
                <p>welcome new user</p>
             </Route>
        </section>

       
    )
    
     
}

export default Welcome;