import loading from "./loading.png";

const Flex = () => {
  return (
    <div className="flex-container">
      <div class="card">
        <div class="card-top">
          <h3>Card</h3>
        </div>
        <div class="card-body">
          <img src={loading} ></img>
        </div>
        <div>
          <p>Keterangan <br/> Card Body</p>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  );
};

export default Flex;