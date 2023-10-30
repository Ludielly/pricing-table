import Card from "./components/Card";
import "./styles/app.css";

function App() {
  const infosEssentials = ["Até 3 usuários", "Autoatendimento"];
  const infosUltimate = [
    "Usuários ilimitados",
    "Suporte 24/7",
    "CSM Dedicado",
    "Treinamentos",
  ];
  const infosEnterprise = ["Plano customizado especialmente para a necessidade de seu negócio"];
  return (
    <div className="app">
      <Card
        subtitle="Para você começar"
        title="Essentials"
        button="Assinar agora"
        buttonType="secondary"
        infos={infosEssentials}
        price="19,97"
      />
      <Card
        subtitle="Para você decolar"
        title="Ultimate"
        button="Assinar agora"
        infos={infosUltimate}
        tagContent="mais vantajoso"
        price="29,97"
        onDarkMode="dark-mode"
      />
      <Card
        subtitle="Para sua empresa"
        title="Enterprise"
        button="Fale com a gente"
        buttonType="secondary"
        infos={infosEnterprise}
        noInfoIcon
      />
    </div>
  );
}

export default App;
