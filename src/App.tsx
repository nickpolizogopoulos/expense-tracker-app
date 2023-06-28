import { useState } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import List from "./components/List"
import Heading from "./components/Heading"
import uniqueId from "./services/uniqueid"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    {id: uniqueId(5), description: 'Jacket', amount: 150, category: 'Clothing'},
    {id: uniqueId(5), description: 'Computer', amount: 1500, category: 'Entertainment'}
  ]);

const visibleExpenses = selectedCategory
? expenses.filter((e) => e.category === selectedCategory)
: expenses;

  return (
  <>
  <div className="card">
    <div className='mb-4'>
      <Heading>Expense Tracker</Heading>
    </div>

    <div className="mb-4">
      <Form onSubmit={expense => setExpenses( [...expenses, {...expense, id: uniqueId(5) }] )}></Form>
    </div>

    <div className="mb-3">
      <Filter onSelectCategory = {category => setSelectedCategory(category)} ></Filter>
    </div>

    <div>
      <List expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id) )} ></List>
   </div>
  </div>
  </>
  )
}

export default App