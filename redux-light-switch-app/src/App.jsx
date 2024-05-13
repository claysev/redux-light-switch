import "./App.css";
import Toggle from './components/Toggle'
import { toggle } from "./state/store";

function App({ state, dispatch }) {
   const handleToggle = () => {
      dispatch(toggle())
   };

   const bgContainer = state === "off" ? "bg-sky-950" : "bg-amber-400";
   const bgLabel = state === "off" ? "bg-sky-800" : "bg-slate-50";
   const lightIs = state === "off" ? "on" : "off" ;

   return (
      <div className={`flex flex-col justify-center items-center gap-4 h-screen transition delay-50 duration-200 ease-in-out ${bgContainer}`}>
         <h1 className={`text-4xl font-bold ${lightIs === "on" ? "text-slate-300" : "text-amber-700"}`}>Turn the light {lightIs}!</h1>
         <Toggle handleToggle={handleToggle} backgroundLabel={bgLabel} />
      </div>
   );
}

export default App;
