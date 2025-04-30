# Food Order App

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Modifications

Several modifications were made to this application codebase in order to use Tailwinds CSS and common testing frameworks.

### Tailwinds CSS Modifications

Install the Tailwinds CSS libraries.

```sh
npm install tailwindcss @tailwindcss/vite
```

Modify the `vite.config.ts` file to include the Tailwinds CSS configuration.

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Testing Framework Modifications

Install the testing dependencies.

```sh
npm install -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event @jest/globals
```

#### Support for CSS in Testing

```sh
npm install --save-dev jest-transform-css
```

#### Add Test Script to package.json

Adding the test command to the `scripts` section of the `package.json` configuration will allow you to easily run the tests.

```json
  "scripts": {
    "dev": "vite",
    "...": "....",
    "test": "jest"
  },
```

#### Jest Configuration Files

If they do not already exist, create either a `jest.config.js` or `jest.config.ts` file in the root directory.


#### Handle Image Files


```sh
npm install -D identity-obj-proxy jest-transformer-svg
```

#### Jest Requires Babel in the TypeScript Environment

```sh
npm install --save-dev @babel/core babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime

```

Add and configure the `babel.config.json` configuration file.

```json
{
    "presets": [
      "@babel/preset-env",
      "@babel/preset-typescript",
      ["@babel/preset-react", { "runtime": "automatic" }]
    ],
    "plugins": [
      "@babel/plugin-transform-runtime"
    ]
}
```

#### Running Tests

Run the tests by invoking the following command:  `npm run test`

## References

- [React](https://react.dev/)
- [Tailwinds CSS](https://tailwindcss.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Effortless Testing Setup for React with Vite, TypeScript, Jest, and React Testing Library 2025](https://dev.to/teyim/effortless-testing-setup-for-react-with-vite-typescript-jest-and-react-testing-library-1c48)