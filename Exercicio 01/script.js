text = `<produtos>
          <produto>
            <titulo>Camiseta Esportiva</titulo>
            <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>
            <preco>35,50</preco>
          </produto>
          <produto>
            <titulo>Bermuda Jeans</titulo>
            <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
            <preco>54,62</preco>
          </produto>
          <produto>
            <titulo>Calça Moletom</titulo>
            <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>
            <preco>79,90</preco>
          </produto>
        </produtos>`

parser = new DOMParser();
const docXML = parser.parseFromString(text,"text/xml");

const div = document.createElement('div')
const title = document.createElement('h1')
const description = document.createElement('p')
const price = document.createElement('span')  

for (let i = 0; i < docXML.getElementsByTagName('produto').length; i++) {   

  title.innerText = docXML.getElementsByTagName('titulo')[i].textContent;
  description.innerText = docXML.getElementsByTagName('descricao')[i].textContent;
  price.innerText = docXML.getElementsByTagName('preco')[i].textContent;

  div.appendChild(title)
  div.appendChild(description)
  div.appendChild(price)

  document.body.getElementsByTagName('div')[i].innerHTML = div.innerHTML;
}