import { NavBar, Img, Container, Item } from './Nav.elements.js'

function Nav() {
  return (
    <NavBar>
    <Img src="https://static.wixstatic.com/media/a4edd0_8d98c44b8033481b8dc2834bcf0bd034~mv2.png/v1/fill/w_308,h_200,al_c,usm_0.66_1.00_0.01,enc_auto/Aarna%20(png)_edited.png" alt="Aarna (png)_edited.png" />
    <Container>
      <Item href='#home'>Home</Item>
      <Item href='#about'>About Us</Item>
      <Item href='#tech'>Our Technology</Item>
      <Item href='#vision'>Vision</Item>
      <Item href='#careers'>Careers</Item>
      <Item href='#contact'>Contact</Item>
    </Container>
    </NavBar>
  );
}

export default Nav;
