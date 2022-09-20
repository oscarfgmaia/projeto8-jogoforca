function Forca(props) {
    console.log(props)
    return (
        <div class="forca">
            <img src={`./assets/forca${props.img}.png`}></img>
        </div>
    )
}

function ChooseButton() {
    return (
        <div class="chooseWord">
            <button class="chooseWord-btn">Escolher Palavra</button>
        </div>
    )
}

export default function App() {
    return (
        <div class="topo">
            <Forca img={1}></Forca>
            <ChooseButton></ChooseButton>
        </div>
    )
}

