import NFT from "./components/NFT";

function App() {
  return (
    <>
      {/* header를 분리하세요 */}
      {/* 그리고 header의 h1태그에 들어가는 내용을 props로 전달해주세요 */}
      <header>
        <h1>hello-block-chain-school</h1>
      </header>
      <NFT name="cat" />
    </>
  );
}

export default App;
