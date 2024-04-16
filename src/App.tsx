import Layout from './components/Layout';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Layout>
      <Input />
      <Navigation />
      <TodoList />
    </Layout>
  );
};

export default App;
