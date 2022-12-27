import {Link} from 'react-router-dom'

export default function Main (){
    return <div class="container text-center text-capitalize text-primary">
        <h2>Welcome to the Harry Potter <span class="title">API!</span></h2>
        <p class="fw-bold">
        "Deathly Hallows"
        there once was a boy named Harry
        who constantly conquered death
        but in one final duel between good and bad
        he may take his final breath...
        </p>
        <div>
            <Link to = {'/heroes'}><button type="button" class="btn btn-outline-primary"> HERO </button></Link>
            <Link to={'/spells'}><button type="button" class="btn btn-outline-warning"> SPELLS </button></Link>
        </div>
    </div>
}