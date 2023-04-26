type propsField = {
    description: string,
    type: string,
    placeholder: string
}

type propsHeader = {
    title: string
}

const LoginForm = () => {
    return(
        <div id="loginform">
            <div className="loginImage">
                <img src="/GeekGuy.png" width="300" style={{position: 'relative'}} alt="login"/>
            </div>
            <FormHeader title="Login" />
            <Form />
        </div>
    )
}

const FormHeader = (props: propsHeader)  => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = () => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password"/>
        <FormButton title="Log in"/>
    </div>
 );
 
const FormButton = (props: propsHeader) => (
    <div id="button" className="row">
        <button>{props.title}</button>
    </div>
);
 
const FormInput = (props: propsField) => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>  
);

export default LoginForm;
