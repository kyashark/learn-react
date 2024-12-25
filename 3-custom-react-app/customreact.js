function renderElement(reactElement,container){
    /*
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    element.setAttribute('href',reactElement.href);
    element.setAttribute('target',reactElement.target);
    container.appendChild(element);
    */

    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        if (prop === 'children') continue
        element.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(element);
}



const reactElement = {
        type:'a',
        props:{
            href:"https://www.google.com/",
            target:'_blank'
        },
        children:"Go Google"
}

const mainContainer = document.querySelector('#root');

renderElement(reactElement,mainContainer);