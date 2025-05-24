import "./App.css";
import AboutUs from "./components/aboutus/AboutUs";
import Header from "./components/header/Header";
import MembersList from "./components/memberlist/MembersList";
import Section from "./components/section/Section";
//jsx javascript xml
function App() {
  return (
    <div>
      <Header />
      <div className="center-screen">
        <Section >
          <AboutUs />
        </Section>
        <Section title="Participants">
          <MembersList />
        </Section>
      </div>
    </div>
  );
}

export default App;
