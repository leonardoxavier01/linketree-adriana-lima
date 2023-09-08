import { MapPin } from "phosphor-react";
import { Container } from "./style";

export const Description = () => {
  return (
    <Container>
      <section>
        <span>
          <MapPin size={14} /> Boa Vista &#183; RR &#183; Brasil
        </span>
        <span>Trainee Imobiliária</span>
      </section>

      <p>Soluções sob medida para cada cliente</p>
    </Container>
  );
};
