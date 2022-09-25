import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Input() {
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [reload, setReload] = useState(false);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState("");
  const [link, setLink] = useState("")
  const [copied, setCopied] = useState(false);
  let regex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  // function for button call
  function handleSubmit(e) {
    e.preventDefault();
    if (!text && !text.match(regex)) {
      alert("Please enter a valid link");
      return;
    }

    setInputValue(text);
    setText("");
    setReload(true);
    // console.log(submit)
    // add created item to the links className section
  }

  // // make use of useeffect to request from a api
  let url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`;
  useEffect(() => {
    function getData() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setSubmit(data.result.full_short_link);
          setLink(data.result.original_link)
        })
        .catch((err) => setError(err))
        .finally(() => setReload(false));
    }
    getData();
  }, [reload, url]);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <section className="input">
      <div>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Shorten it!</button>
      </div>

      {/* //result section for the shortened link */}

      {submit && (
        <section className="links">
          <p className="text">{link}</p>
          <aside className="link">
            <p>{submit}</p>
            <CopyToClipboard text={submit} onCopy={() => setCopied(true)}>
              <button className={copied ? "copied" : ""}>
                {copied ? "Copied" : "Copy"}
              </button>
            </CopyToClipboard>
          </aside>
        </section>
      )}
    </section>
  );
}

export default Input;
