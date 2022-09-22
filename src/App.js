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
    const [forcaImg, setForcaImg] = useState(img0)
    const [word, setWord] = useState("")
    const [displayLetra, setDisplayLetra] = useState([])
    const [letrasUtilizadas, setLetrasUtilizadas] = useState([])
    const [letrasAcertadas, setLetrasAcertadas] = useState([])
    const [letrasErradas, setLetrasErradas] = useState([])
    const [gameRunning, setGameRunning] = useState(false);
    console.log("palavra escolhida: " + word)
    console.log('palavra mostrada: ' + displayLetra)
    console.log('letras utilizadas: ' + letrasUtilizadas)
    console.log('letras erradas: ' + letrasErradas)
    console.log('letras acertadas: ' + letrasAcertadas)
    function Forca(props) {
        return (
            <div className="forca">
                <img src={props.img} alt={props.img}></img>
            </div>
        )
    }


    function chooseWord() {
        setGameRunning(true)
        let rand = Math.floor(Math.random() * palavras.length)
        console.log(palavras[rand])
        setWord(palavras[rand])

        const wordArray = palavras[rand].split('')
        console.log(wordArray)
        const palavra = wordArray.map((letra) => {
            for (let i = 0; i < letrasAcertadas.length; i++) {
                if (letrasAcertadas[i] === letra) {
                    return letrasAcertadas[i] + " "
                }
            }
            return "_ "
        })
        setDisplayLetra(palavra)//e#177742
    }

    function ChooseButton() {
        return (
            <div className="chooseWord">
                <button className="chooseWord-btn" onClick={chooseWord}>Escolher Palavra</button>
            </div>
        )
    }



    function updateLetters(p) {
        console.log("update")
        console.log(word)
        console.log(displayLetra)
        console.log(p)
        //["_","_","_","_","_"]
        //["o","s","c","a","r"]

        const wordArray = word.split('')
        const palavra = wordArray.map((letra) => {
            for (let i = 0; i < p.length; i++) {
                if (p[i] === letra) {
                    return p[i] + " "
                }
            }
            return "_ "
        })
        setDisplayLetra(palavra)//e#177742
    }

    function Word() {
        return (
            <>
                <span className="wordToGuess">{displayLetra}</span>
            </>
        )
    }


    function handleClick(letra, index) {
        if (!letrasUtilizadas.includes(index)) {
            const arrLetrasUtilizadas = [...letrasUtilizadas, index]
            const arrLetrasAcertadas = [...letrasAcertadas, letra]
            const arrLetrasErradas = [...letrasErradas, letra]

            setLetrasUtilizadas(arrLetrasUtilizadas)
            if (word.includes(letra)) {
                setLetrasAcertadas(arrLetrasAcertadas)
                updateLetters(arrLetrasAcertadas)
            }
            else {
                setLetrasErradas(arrLetrasErradas)
            }
        }
    };


    function Letter(props) {
        if (gameRunning === false) {
            return (
                <>
                    <button disabled={true} className="letter" onClick={() => handleClick(props.letra, props.index)} >{props.letra.toUpperCase()}</button>
                </>
            )
        } else {
            return (
                <>
                    <button disabled={(!letrasUtilizadas.includes(props.index)) ? false : true} className="letter" onClick={() => handleClick(props.letra, props.index)} >{props.letra.toUpperCase()}</button>
                </>
            )
        }
    }

    function Letters() {
        return alfabeto.map((l, index) => <Letter letra={l} key={index} index={index} />)
    }

    return (
        <>
            <div className="app">
                <div className="topo">
                    <div className="forca-left">
                        <Forca img={forcaImg} />
                    </div>
                    <div className="forca-right">
                        <ChooseButton />
                        <Word />
                    </div>
                </div>

                <div className="botton">
                    <div className="letters">
                        <Letters />
                    </div>
                    <div className="guess">
                        <span onClick={updateLetters}>input do chute</span>
                    </div>
                </div>
            </div>
        </>
    )
}

