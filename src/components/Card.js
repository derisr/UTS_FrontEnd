import '../card.css'
import loading from "./loading.png";

const card = () => {
    return(
        <div class="card">
            <div class="card-top">
                <h3>Card</h3>
            </div>
            <div class="card-body">
                <img src={loading} ></img>
            </div>
            <div>
                <p>Keterangan Card Body</p>
            </div>
        </div>
    );
};

export default card;