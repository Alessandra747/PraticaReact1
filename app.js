import React from "react"
import "./App.css"
import img from "./img/morango.jpg"

export default class App extends React.Component{

state = {
nome: "Maria Alessandra",
idade : 25,
comida : "Strognofe",
musicas: ["Stay With Me", "Far Away", "Glad you came"]
}

render(){
return(
<div>
<h1>Sobre mim{this.state.nome}</h1>
<h2>Tenho {this.state.idade} anos.</h2>
<h3>Minha comida favorita é {this.state.comida}</h3>
<ol className="item">
<li>{this.state.musicas[0]}</li>
<li>{this.state.musicas[1]}</li>
<li>{this.state.musicas[2]}</li>
</ol>
<figure>
<a href="https://th.bing.com/th/id/OIP.SyopP3pGfEowEqBC96MJngHaHa?pid=ImgDet&rs=1">
<img src="{foto} alt= 'morango' "/>
</a>
</div>
)
}
}