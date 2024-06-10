/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello from h1 tag</h1>
 *          <h2>Hello from h2 tag</h2>
 *      </div>
 * </div>
 */

const heading = React.createElement("div",{id:'parent'},
    [React.createElement("div",{id:'child'},
       [React.createElement("h1",{},'Hello from H1 tag'),
       React.createElement("h2",{},'Hello from H2 tag')]
    ),
    React.createElement("div",{id:'child2'},
       [React.createElement("h1",{},'Hello from H1 tag'),
       React.createElement("h2",{},'Hello from H2 tag')]
    )]
)

// const heading = React.createElement("h1",{
//     id:'heading',
//     xyz:'abc'
// },"hello word from React!");



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)