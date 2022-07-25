
import React from "react"
import './App.css'
import Form from "./components/form"
import { Route, Routes } from "react-router-dom"
import Paginator from "./components/paginator"
import Todo from "./components/Todo"
import Header from "./Header/Header"
import Stopwatch from "./components/Stopwatch"
import CardMemory from "./components/cardMemory/CardMemory"


const App = () => {
    return (
        <>
            <div  className="app-wrap">

                <div><Header /></div>

                <div className="component">
                    <Routes>
                        <Route path="/form" element={<Form/>} />

                        <Route path="/paginator" element={<Paginator />} />

                        <Route path="/todo" element={<Todo />} />

                        <Route path="/stopwatch" element={<Stopwatch />} />

                        <Route path="/cardMemory" element={<CardMemory />} />

                    </Routes>
                </div>

            </div>
        </>
    )
}

export default App