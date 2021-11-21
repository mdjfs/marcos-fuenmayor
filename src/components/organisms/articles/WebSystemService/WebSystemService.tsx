import Header from "../../../atoms/header/header";
import Text from "../../../atoms/text/text";

export const WebSystemService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Sistema Web</Header>
      <img
        src="/static/png/web_presentation.png"
        alt="Sistema Web"
        style={{ width: "80%", left: "10%" }}
      />
      <Text>
        Automatiza todos los procesos de tu empresa en la web, accede desde
        cualquier dispositivo, controla todas las interacciones con tu empresa
        desde un solo servidor y visualiza cualquier tipo de información en
        segundos
      </Text>
    </div>
  );
};

export default WebSystemService;
