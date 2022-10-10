import './App.css'
import Input from './components/Input/Input';
import Options from './components/Options/Options';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return ( 
    <div>
      <div className="container">
        <div className="logo">
          <span>What Todo?</span>
        </div>
        <Input />
        <Options />
        <TodoList />
      </div>
    </div>
   );
}
 
export default App;
