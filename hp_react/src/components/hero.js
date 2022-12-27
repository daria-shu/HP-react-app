export default function Hero ({image, name, birthday, actor, house}){

    return (
        <div class="card m-4">
            <img  class="card-img-top" src={ image } alt={ name }/>
            <div class="card-body">
                <h5 class="card-title">{ name }</h5>
                <h5 class="card-title">{ birthday }</h5>
                <h5 class="card-title">{ actor }</h5>
                <h5 class="card-title">{ house }</h5>
            </div>
        </div>
    );
}