import Header from './header';
import DescriptionSection from './descriptionSection';
import Input from "./inputSection";
import Static from './statics';
import Boost from './boostSection';
import Footer from './footerSection';
import {useState} from 'react';

function Landing() {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    
    function sent(e){
        e.preventDefault();
        if(inputValue === "" || inputValue === " "){
            alert("Create an item")
            return
        }
        let url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`;
        async function fetchData(){
            let response = await fetch(url)
            let resultGotten = await response.json();
            let result = resultGotten.result;
            setList((prev)=> [...prev, result]);
        }

        fetchData();
        setInputValue("");
        
        // console.log(inputValue);
    }

  return (
    <article>
      <Header />
      <DescriptionSection />
      <Input inputValue={inputValue} setInputValue={setInputValue} onClick={sent} list={list} setList={setList} />
      <Static />
      <Boost />
      <Footer />
    </article>
  );
}

export default Landing;