import Button from './button'
import Navbar from './navbar'
import Checkbox from './checkbox'
import Inputfield from './inputfield'
import Radiobutton from './radiobutton'
import Selectoption from './selectOption'
import Textarea from './textArea'
import Typography from './typography'


function Home() {


    return(
        <div>
            <Navbar text="Whizzy Academy" color="rosybrown"/>
            <p></p>
            Button:
            <Button text="Click me" color="green"/>
            <p></p>
            Checkbox:
            <Checkbox text="Apple"/>
            <Checkbox text="Banana"/>
            <Checkbox text="Orange"/>
            <Checkbox text="Peach"/>
            <p></p>
            Inputfield:
            <Inputfield text="Username"/>
            <Inputfield text="Password"/>
            <p></p>
            Radiobutton:
            <Radiobutton name="gender" text="Male"/>
            <Radiobutton name="gender" text="Female"/>
            <p></p>
            Select option:
            <Selectoption name="Menu" one="Jollof" two="Fried Rice" three="Banku"/>
            <p></p>
            Text Area:
            <Textarea name="Type Here"/>
            <p></p>
            Typography:
            <Typography/>

            
            
        
        
        
        
        

        </div>
    )
}

export default Home;