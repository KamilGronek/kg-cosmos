# Introduction

The purpose of the application was to obtain a similar layout of the application placed on the Figma platform and to code it.
When working with the API, I used the endpoint query. It uses the post method, thanks to which the entire sorting mechanism is performed on the server side, thanks to which I reduce the complexity of the code on the client side, it is more efficient

When I was working in a Chrome browser using Dev Tools, I suggested a size above 1200px in height and 768px in width.

## Live preview

[Link to application]

"https://kamilgronek.github.io/kg-cosmos/"

## Technologies

-React: 17.0.2,
-Node: 12.16.1,
-React-bootstrap: 1.6.0

## Construction:

To make the application desktop more readable, the application files has been divided into folders like components with main logic, Styled Components and folders SVG. I choose React Bootstrap for work with Components.

To avoid props drilling I used hook useContext. Also That's give me oportunity to split the code into several smaller components.

## Run applications by create-react-app:

After downloading file to install node.modules environment, in terminal write the command:

```bash
npm install
```

To run the application, in terminal in the main path of the project write:

```bash
npm start
```

## Reflections:

In the future, if we wanted to work with smarter code, I would suggest using useReducer or Redux.
Thanks to this, the states of our application will be global and the code less distributed and more readable.
