import { Main } from './组件通信/Main';
import NumberList from './核心概念/列表&key';
import CtrlComponent from './核心概念/受控组件/CtrlComponent';

function App() {
  return (
    <div className="App">
     <Main/>
     <NumberList/>
     <CtrlComponent/>
    </div>
  );
}

export default App;
