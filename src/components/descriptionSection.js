import illustration from '../url-shortening-api-master/images/illustration-working.svg'

function DescriptionSection(){
    return (
      <article className="descContainer">
        <section className='wrapper'>
          <section className="description">
            <img src={illustration} alt="illustration" />
          </section>
          <aside>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </aside>
        </section>

      </article>
    );
}
export default DescriptionSection;