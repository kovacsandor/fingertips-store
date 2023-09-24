import { Header } from "../Header"
import { Main } from "../Main";

export const PageLayout = ({ children }) => {
    return (
      <>
        <Header/>
        <Main>
          <h1 className="text-center text-5xl font-bold">Fingertips Store</h1>
          { children }
        </Main>
      </>
    );
  }
  