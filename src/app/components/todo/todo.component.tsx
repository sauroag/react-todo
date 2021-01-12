import * as React from 'react';
import { DIContext } from '@helpers';

const TodoComponent = (props: any): JSX.Element => {
    return (
        <div>
            <h3>
                hello user
            </h3>
            <Form />
        </div>
    );
}

const Form = (props: any): JSX.Element => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmitted(true);

        console.log("submitting ")
        if (title && description) {
            // redirect to users page
            // console.log(title, description);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        switch (e.target.id) {
            case 'title':
                setUsername(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
        }
        console.log(title, description)
    }
    const [title, setUsername] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');
    const [submitted, setSubmitted] = React.useState<boolean>(false);

    const dependencies = React.useContext(DIContext);
    const { userService } = dependencies;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" onChange={handleChange} placeholder="title (any)" id="title" />
                </div>
                <br />
                <div>
                    <label htmlFor="description"></label>
                    <input type="text" onChange={handleChange} placeholder="text (any)" id="description" />
                </div>
                <br />
                <button>Login</button>
            </form>
        </div >
    )
}
export default TodoComponent;
