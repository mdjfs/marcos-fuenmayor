import Header from "../../../atoms/header/header";
import Text from "../../../atoms/text/text";

export const MobileSystemService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Sistemas móviles</Header>

      <img
        src="/static/png/mobile_presentation.png"
        alt="Sistemas Moviles"
        style={{ width: "20%", left: "40%" }}
      />
      <Text>
        Se basa del mismo concepto de una Aplicación Móvil, solo que suele
        escalarse a proyectos de embergadura. <br /> Pone toda una serie de
        procesos a disposicion de la aplicacion movil y servidores que esta
        conlleva
      </Text>
    </div>
  );
};

export default MobileSystemService;
