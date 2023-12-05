import { ItemCount, ItemListContainer, NavBar, Maps, Count, Cards, Button, } from "./components";


export const App = () => {
  return (
<>

<NavBar/>
<h2>
<ItemListContainer Greetings={"Descubre lo que Mi Tienda Verde tiene para tí"}/>
</h2>
<ItemCount/>
<Maps/>
<Cards/>
<Count/>
<Button/>
</> 
 )
}
