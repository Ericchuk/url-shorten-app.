function SectionNew({ list, setList }) {
  return (
    <main>
      {list.length > 0
        ? list.map((link, index) => {
            return( 
                <section className="links" key={index}>
                    <p className="text">{link.original_link}</p>
                    <aside className="link">
                        <p>{link.full_short_link}</p>
                        <button>Copy</button>
                    </aside>
                </section>
        )})
        : null}
    </main>
  );
}

export default SectionNew;
