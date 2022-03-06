import { NavBar, Img, Container, Item } from './Nav.elements.js'

function Nav() {
  return (
    <NavBar>
    <Img src="https://static.wixstatic.com/media/a4edd0_8d98c44b8033481b8dc2834bcf0bd034~mv2.png/v1/fill/w_308,h_200,al_c,usm_0.66_1.00_0.01,enc_auto/Aarna%20(png)_edited.png" alt="Aarna (png)_edited.png" />
    <Container>
      <Item>Home</Item>
      <Item>About Us</Item>
      <Item>Our Technology</Item>
      <Item>Vision</Item>
      <Item>Careers</Item>
      <Item>Contact</Item>
    </Container>
    </NavBar>
  );
}

export default Nav;
