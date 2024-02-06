import React from 'react'
import ExpenseTracker from './Components/ExpenseTracker'
import HouseholdBudget from './Components/Household'

function routes() {
  return (
    <div>
        <HouseholdBudget />
      <ExpenseTracker />
    </div>
  )
}

export default routes
