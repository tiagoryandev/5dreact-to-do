import { useState } from "react";

import GlobalStyles from "./styles/globalStyles";
import { Container, Area, Header } from "./styles";
import { Item } from "./types/Item";

import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";

const App = () => {
    const [list, setList] = useState<Item[]>([]);

    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        });

        setList(newList);
    };

    const changeCheckItem = (id: number) => {
        let newList = [...list];
        let item = newList.findIndex(i => i.id === id);
        
        newList[item].done = !newList[item].done;

        setList(newList);
    };

    return (
        <>
            <Container>
                <Area>
                    <Header>Lista de Tarefas</Header>

                    <AddArea onEnter={handleAddTask} />

                    {list.map((item, index) => (
                        <ListItem key={index} changeItem={changeCheckItem} item={item} />
                    ))}
                </Area>
            </Container>
            <GlobalStyles/>
        </>
    );
};

export default App;