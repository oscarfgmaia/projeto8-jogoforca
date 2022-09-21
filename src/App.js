import alfabeto from "./alfabeto"
import palavras from "./palavras"

import img0 from "./assets/forca0.png"
import img1 from "./assets/forca1.png"
import img2 from "./assets/forca2.png"
import img3 from "./assets/forca3.png"
import img4 from "./assets/forca4.png"
import img5 from "./assets/forca5.png"
import img6 from "./assets/forca6.png"
import { useState } from "react"



export default function App() {
    const arrForca = [img0, img1, img2, img3, img4, img5, img6]
    const [word, setWord] = useState("")

    function Forca(props) {
        return (
            <div className="forca">
                <img src={props.img} alt={props.img}></img>
            </div>
        )
    }

    function chooseWord() {
        let rand = Math.floor(Math.random() * palavras.length)
        setWord(palavras[rand])
    }

    function ChooseButton() {
        return (
            <div className="chooseWord">
                <button className="chooseWord-btn" onClick={chooseWord}>Escolher Palavra</button>
            </div>
        )
    }

    function Word(p) {
        console.log(p)
        let underlined = p.word.split('')
        let a = underlined.map((e) => e = ' _ ')
        return (
            <>
                <span className="teste">{a}</span>
            </>
        )
    }

    function alertar(p) {
        console.log(p)
    }

    function Letter(props) {
        return (
            <>
                <button className="letter" onClick={() => alertar(props.letra)}>{props.letra}</button>
            </>
        )
    }

    function Letters() {
        return alfabeto.map((l) => <Letter letra={l} key={l} />)
    }

    return (
        <>
            <div className="app">
                <div className="topo">
                    <div className="forca-left">
                        <Forca img={arrForca[0]} />
                    </div>
                    <div className="forca-right">
                        <ChooseButton />
                        <Word word={word} />
                    </div>
                </div>

                <div className="botton">
                    <div className="letters">
                        <Letters />
                    </div>
                    <div className="guess">
                        <span>input do chute</span>
                    </div>
                </div>
            </div>
        </>
    )
}

