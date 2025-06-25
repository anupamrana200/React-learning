function customRender(reactElement, container){
  /*const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target);
  container.appendChild(domElement); */

  //little better approach 
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    // if(prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root")
const reactElement = {
  type: 'a',
  props: {
    target: '_blank',
    href: 'https://www.google.com'
  },
  children: 'click me to visit google'
}

customRender(reactElement, mainContainer)
