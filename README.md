# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Troubleshooting

### ESLint plugin "react" conflict

If you see an error like:

Plugin "react" was conflicted between "package.json » eslint-config-react-app » ..." and "BaseConfig » ..."

Possible permanent fixes:

- Ensure path casing is consistent: Windows is case-insensitive but some tools can still behave inconsistently if you open the project from different paths (e.g. `C:\Users\melody\Desktop\careers-page` vs `c:\Users\melody\desktop\careers-page`). Close editors and re-open the project from a single path.
- Remove duplicate installations of `eslint-plugin-react` or other ESLint plugins. Check `npm ls eslint-plugin-react` and remove duplicates by aligning versions and reinstalling.
- Remove `node_modules` and `package-lock.json`, then reinstall: `npm ci` or `rm -rf node_modules package-lock.json && npm install`.
- As a temporary development workaround, create a `.env` file at the project root with:

```
SKIP_PREFLIGHT_CHECK=true
```

This disables CRA's preflight checks (not recommended for production). See project root `.env` for the temporary setting used here.

### Tailwind CSS notes

This project includes Tailwind setup files (`tailwind.config.cjs` and `postcss.config.cjs`). To use Tailwind classes:

- Ensure `src/index.css` contains the Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
- If the `tailwind` or `tailwindcss` CLI is not found when running `npx tailwindcss`, try reinstalling dependencies: `rm -rf node_modules package-lock.json && npm install`.

