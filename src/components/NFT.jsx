function NFT({ name }) {
  return (
    <div style={{ border: "1px solid black", width: "max-content" }}>
      {/* 색상을 props로 받아올수있게 변경해주세요 */}
      <div style={{ background: "red", width: 150, height: 200 }}></div>
      <div>
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div>
        <p>Price</p>
        {/* props로 받아올수있게 변경해주세요 */}
        <p>0.423 Either</p>
      </div>
    </div>
  );
}
export default NFT;
