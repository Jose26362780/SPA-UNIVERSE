export class Router {
    routes = {};
  
    add(routeName, page) {
      this.routes[routeName] = page;
    }
  
    route(event) {
      event = event || window.event;
      event.preventDefault();
  
      const parentAnchor = event.target.closest("a");
  
      if (parentAnchor.href) {
        window.history.pushState({}, "", parentAnchor.href);
        this.handle();
        return;
      }
  
      window.history.pushState({}, "", event.target.href);
  
      this.handle();
    }
  
    handle() {
      const { pathname } = window.location;
      const route = this.routes[pathname] || this.routes[404];
  
      fetch(route)
        .then((data) => data.text())
        .then((html) => {
          document.querySelector("#app").innerHTML = html;
        });
    }
  }
  