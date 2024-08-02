import React, { useState } from 'react';
import "../App.css"
function BudgetPlanner() {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [items, setItems] = useState([]);
    const [budget, setBudget] = useState(2000);

    const handleAddItem = (e) => {
        e.preventDefault();
        if (itemName && itemPrice) {
            setItems([...items, { name: itemName, price: parseFloat(itemPrice) }]);
            setItemName('');
            setItemPrice('');
        }
    };
    const handleDeleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        console.log("anj")
    };


    const totalSpent = items.reduce((total, item) => total + item.price, 0);
    const remainingBudget = budget - totalSpent;

    return (
        <div>
            <div className="upperPart">
                <h2>Budget: ${budget}</h2>
                <h2>Remain: ${remainingBudget}</h2>
                <h2>Spend: ${totalSpent}</h2>
            </div>
            <div className="expenses">
                <h2>Expenses</h2>
                <div className="list">
                    {items.length === 0 ? (
                        <h2>Add items to show here.......</h2>
                    ) : (
                        items.map((item, index) => (
                            <div key={index}>
                               <h2> {item.name} - ${item.price}  <span onClick={()=>handleDeleteItem(index)}>Delete</span></h2>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="input">
                <form onSubmit={handleAddItem}>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="Item Name"
                    />
                    <input
                        type="number"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                        placeholder="Item Price"
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default BudgetPlanner;
