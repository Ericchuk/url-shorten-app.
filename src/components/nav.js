function Nav(open){
    // first list item before the horizontal line 
    const list = ["Features", "Pricing", "Resources"];
    // loop through items in list to create an ordered list 
    const ListItems = list.map((item) => <li key={item}>{item}</li>);
    // second list items after the horizontal line 
    const list2 = ["Login", "Sign Up"];
    // loop through eash items in list 2 
    const ListItems2 = list2.map((item) => <button key={item}>{item}</button>);

    return (
        <nav className={`${open ? 'show' : ''}`}>
        <ul>
            {ListItems}
            <span></span>
            {ListItems2}
        </ul>
        </nav>
    )
}

export default Nav;