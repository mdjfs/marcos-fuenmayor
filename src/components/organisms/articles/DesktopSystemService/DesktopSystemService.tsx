import Header from "../../../atoms/header/header";
import Text from "../../../atoms/text/text";

export const DesktopSystemService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Sistema de escritorio</Header>
      <img
        src="/static/png/desktop_presentation.png"
        alt="Sistema de Escritorio"
        style={{ width: "80%", left: "10%" }}
      />
      <Text>
        Un sistema para escritorio se suele implementar cuando un sistema
        necesita funcionalidades del dispositivo nativo para continuar, como
        dispositivos conectados, entre otros. Cuando se necesita implementar ese
        entorno con un sistema de embergadura es donde se necesita un sistema
        para escritorio
      </Text>
    </div>
  );
};

export default DesktopSystemService;
