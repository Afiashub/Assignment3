import Button from './button'
import Navbar from './navbar'
import Checkbox from './checkbox'
import Inputfield from './inputfield'
import Radiobutton from './radiobutton'
import Selectoption from './selectOption'
import Textarea from './textArea'
import Typography from './typography'
import './style.css';



function Home() {


    return(
        <div className="main1" > 

            <Navbar text="Whizzy Academy" Home="Home" about="About Us" mission="Mission" 
            history="History" color="mediumslateblue" />


            <div className= "main2">
        
                <h3>Create an account by entering Username and Password:</h3>
                Username:
                <Inputfield type="Username" text="Username"/>
                Password:
                <Inputfield type="Password" text="Password"/>
                <p></p>
                <h3>Gender:</h3>
                <Radiobutton name="gender" text="Male"/>
                <Radiobutton name="gender" text="Female"/>
                <p></p>

                <h3>Choose your favourite fields:</h3>
                Select all that apply
                <Checkbox text="HTML"/>
                <Checkbox text="CSS"/>
                <Checkbox text="Javascript"/>
                <Checkbox text="React"/>
                <p></p>
                
                <h3>Why do you want to join us?</h3>
                <Textarea name="Type Here"/>
                <Button text="Join Whizzy Now" color="green"/>
                <p></p>
            </div>

        
            <Typography mycolor="royalblue" text="Simply the best!" weight="bolder" color="yellow" mysize={30} 
            fontstyle="italic"/>
        </div>
    )
}

export default Home;