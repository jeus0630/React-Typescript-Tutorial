import React from 'react';
import './App.css';
import List from "./components/generics/List";
function App() {

    return (
        <div className="App">
            {/*<List items={['Batman','Superman','Wonder woman']} onClick={(item)=>console.log(item)}></List>*/}
            {/*<List items={[1,2,3]} onClick={(item)=>console.log(item)}></List> */}
            <List items={[
                {
                    id: 1,
                    first: 'Bruce',
                    last: 'Wayne'
                },
                {
                    id: 2,
                    first: 'Clark',
                    last: 'Kent'
                },
                {
                    id: 3,
                    first: 'Princess',
                    last: 'Diana'
                }
            ]} onClick={(item)=>console.log(item)}></List>
        </div>
    );
}

export default App;