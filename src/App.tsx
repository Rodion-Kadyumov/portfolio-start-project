import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contacts/Contact';
import { Main } from './layout/sections/main/Main';
import { SKills } from './layout/sections/skills/Skills';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Works } from './layout/sections/works/Works';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <SKills />
      <Works />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;