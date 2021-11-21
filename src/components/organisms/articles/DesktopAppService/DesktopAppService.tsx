import Header from "../../../atoms/header/header";
import Text from "../../../atoms/text/text";

export const DesktopAppService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Aplicaciones de escritorio</Header>
      <img
        src="/static/png/desktop_presentation.png"
        alt="Aplicaciones de Escritorio"
        style={{ width: "80%", left: "10%" }}
      />
      <Text>
        Una aplicación de escritorio usualmente es empleada para propositos mas
        especificos del sistema operativo o dispositivos, procesos en
        especificos que se necesite automatizar. No es necesario todo un sistema
        para solo una aplicacion de escritorio, pueden ser perfectamente
        procesos parciales de un negocio u empresa
      </Text>
    </div>
  );
};

export default DesktopAppService;
