import ReactDom from 'react-dom';

export const moduleLoader: IModuleLoader = (id, component, selector) => {
  const selectorNode = document.querySelector(selector) as HTMLElement;
  window.MODULES[id] = {
    mount: () => {
      ReactDom.render(
        component,
        selectorNode,
      );
    },
    unmount: () => {
      try {
        ReactDom.unmountComponentAtNode(selectorNode);
      }
      catch (error) {
        console.log('unmount error')
      }
    }
  }
}