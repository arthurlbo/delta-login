### Hi there! 👋

> A front end challenge of an interface for authentication, from prototype to code.
> 
> The objective of this challenge was to improve my UX and UI skills, applying design principles to create a login form and also the improvement of tools for frontend development such as next, typescript, tailwind, tests with cypress, react-hook-form, among others .
> 
> Inside the code, I focused on following the good practices of React, breaking down the application into reusable components, leaving the form and inputs ready to be sent to an API and being able to be reused in different ways, validating form information with zod, testing components with cypress, and documenting components with storybook.
> 
> [Prototype in Figma](https://www.figma.com/file/UwLUSZElNwJ5xwxwwql28B/login?type=design&node-id=0%3A1&t=G4BhlcJU8fY4KQ45-1)

## What is inside?

- [NextJS](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com/)
- [Radix-ui](https://www.radix-ui.com/)
- [phospor icons](https://phosphoricons.com/)
- [React-hook-form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Cypress](https://www.cypress.io/)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://commitlint.js.org/#/)

## Getting Started

### Install dependencies:

```bash
pnpm install
```

or

```bash
yarn
```

or

```bash
npm install
```

### Run development server

```bash
pnpm dev
```

or

```bash
yarn dev
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
└── src
    ├── app
    ├── assets
    ├── components
    ├── utils
```

| Folder         | Description                                          |
| ----------     | -------------------------------------------          |
| **app**        | Pages                                                |
| **assets**     | Images and static files for application              |
| **components** | Pages components                                     |
| **utils**      | Auxiliary and reusable functions                     |

## Conventions

### Components

```
└── <MyComponent>
    ├── <MyComponent>.tsx
    ├── <MyComponent>.spec.tsx
    ├── <MyComponent>.stories.tsx
    └── index.ts
```

| Files           | Description                                    |
| --------------- | ---------------------------------------------- |
| **.tsx**        | Component implementation                       |
| **.spec.tsx**   | Component tests                                |
| **.stories.tsx**| Storybook component                            |
| **index.ts**    | File to export the component                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `storybook`: runs docs with storybook
- `cypress`: open cypress
- `test`: run test file
- `commit`: commit staged changes

## Todo

- [ ] **User registration**
- [ ] **Forgot password**
- [ ] **Improve component tests**
- [ ] **Integration with NextAuth**

<p align="center">Made with 🤍 by Arthur</p>
