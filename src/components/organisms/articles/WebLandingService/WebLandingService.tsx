import Header from "../../../atoms/header/header";
import Text from "../../../atoms/text/text";

export const WebLandingService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Página de Presentación</Header>
      <img
        src="/static/png/web_presentation.png"
        alt="Pagina de Presentacion"
        style={{ width: "80%", left: "10%" }}
      />
      <Text>
        Suelen implementarse cuando necesitas mas visualizacion y lo que te
        provee una página de presentación es un rápido y eficaz portafolio para
        todos los clientes a los que tu puedas llegar. Solo tienen que saber tu
        dominio y lo demás lo averiguan ellos mismos. No hay intermediarios.
        Eres tú y tu cliente
      </Text>
    </div>
  );
};

export default WebLandingService;
