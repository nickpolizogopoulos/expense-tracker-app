import { useState } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import List from "./components/List"
import Heading from "./components/Heading"



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    {id: 1, description: 'Jacket', amount: 50, category: 'Clothing'}
  ]);

const visibleExpenses = selectedCategory
? expenses.filter((e) => e.category === selectedCategory)
: expenses;

  return (
  <>
    <div className='mb-4'>
    <Heading>Expense Tracker</Heading>
    </div>

    <div className="mb-4">
      <Form onSubmit={expense => setExpenses( [...expenses, {...expense, id: expenses.length + 1 }] )}></Form>
    </div>

    <div className="mb-3">
      <Filter onSelectCategory = {category => setSelectedCategory(category)} ></Filter>
    </div>

    <div>
      <List expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id) )} ></List>
   </div>
  </>
  )
}

export default App