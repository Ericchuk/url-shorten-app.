import {CopyToClipboard} from 'react-copy-to-clipboard'
import {useState, useEffect} from 'react';

function SectionNew({ list }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied]);


  return (
    <main>
      {list.length > 0
        ? list.map((link, index) => {
            return( 
                <section className="links" key={index}>
                    <p className="text">{link.original_link}</p>
                    <aside className="link">
                        <p>{link.full_short_link}</p>
                        <CopyToClipboard text={link.full_short_link}>
                        <button className={copied ? "copied" : ""} onClick={(e) => {
                            e.preventDefault();
                            setCopied(true);
                            console.log(e)
                        }}>{copied ? "Copied" : "Copy"}</button>
                        </CopyToClipboard>
                    </aside>
                </section>
        )})
        : null}
    </main>
  );
}

export default SectionNew;
