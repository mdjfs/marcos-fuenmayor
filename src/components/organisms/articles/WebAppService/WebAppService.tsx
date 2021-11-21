import Header from "../../../atoms/header/header";
import Text from "../../../atoms/text/text";

export const WebAppService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Aplicación Web</Header>
      <img
        src="/static/png/web_presentation.png"
        alt="Aplicacion Web"
        style={{ width: "80%", left: "10%" }}
      />
      <Text>
        Una aplicación web es la manera más rapida de automatizar procesos en tu
        negocio. La ventaja de estas es que solo se necesita un primer
        desarrollo porque gracias a la distribución de la web podrá ser visto en
        todos los dispositivos
      </Text>
    </div>
  );
};

export default WebAppService;
