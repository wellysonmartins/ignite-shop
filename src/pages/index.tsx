import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 8,
});

export default function Home() {
  return <Button>Enviar</Button>;
}
