import SectionNew from "./newLinks";

function InputSection({ inputValue, setInputValue, onClick, list, setList }) {
  return (
    <section className="input">
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={onClick}>Shorten</button>
      </div>

      <SectionNew list={list} setList={setList}/>
    </section>
  );
}

export default InputSection;
// export default Input;
