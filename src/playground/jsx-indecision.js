


class Header extends React.component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
          <div>
             <button>What should I do</button>
          </div>
        )
    }
}

const jsx = (
    <div>
      <Head />
      <Action />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))





const app = {
    title: 'Indecision App',
    subtitle: 'Put our life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}




const appRoot = document.getElementById('app')


const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           <p>{app.options.length > 0 ? 'Here re your options' : 'No options'}</p>
           <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should i do?</button>
           <button onClick={onRemoveAll}>Remove All</button>
           <ol>
             {
                 app.options.map((option) => <li key={option}>{option}</li>)
             }
           </ol>
           <form onSubmit={onFormSubmit}>
              <input type="type" name="option" />
              <button>Add Option</button>
           </form> 
        </div> );

        ReactDOM.render(template, appRoot);
}

render();