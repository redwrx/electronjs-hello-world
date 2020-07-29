Electronjs provides a set of ready to use templates which can be used through CLI commands to create Electronjs apps. Here is the template that I used to create an app with Webpack and Typescript  https://www.electronforge.io/templates/typescript-+-webpack-template

# Steps to create project
  1. Installed Node and NPM
  2. In the porject empty directory `npx create-electron-app my-new-app --template=typescript-webpack`
  3. In the project directory `npm install react react-dom @types/react @types/react-dom`  OR  `yarn add react react-dom @types/react @types/react-dom`
  4. added `app.tsx` and changed the `index.html`
  5. In `package.json` changed `"js": "./src/renderer.ts"` to `"js": "./src/app.tsx"` , so the entry points for webpack is configured properly 
  6. In `tsconfig.json` added `"jsx": "react"` in `compilerOptions`
  7. In the project directory `npm install @types/jest @testing-library/react @testing-library/jest-dom jest ts-jest`

# Commands
- **To run the tests:** `npm run test:watch`

- **To run the application:** `npm start`

- **To package the app:** `npm run make`
