# inm5151_inf6150_projet_pilote_a23

## Getting Started

### Local Development

1. Clone the repository to your local machine:
2. Install project dependencies:
3. Start the server in development mode:

* The server will run with express locally on `http://localhost:5000`.
```sh
npm run dev
```
* To test it try the `/api` route

* The client will run with react-native using expo-cli.
```sh
npx create-expo-app -e with-router
```

To initialise the sqlite db
```sh
npm run init-db
```

To reset the sqlite db
```sh
npm run init-db -- --reset
```

> if you are on windows and don't have sqlite, download `sqlite-tools-win32-x86-3430200.zip` [here](https://sqlite.org/download.html), extract it under C:\Users\Your-User\, go to Modify Environment Variables, modify the Path variable by adding a path to the extracted folder. You may need to restart your IDE.

## Branch System

### Feature Branches (feat/)

Feature branches are used to develop new features or enhancements. When working on a new feature, create a branch prefixed with `feat/` and provide a descriptive name for the feature.

### Work in Progress Branches (wip/)

Work in Progress (WIP) branches are used for ongoing work that is not ready for merging into the main codebase. Prefix these branches with `wip/`.

### Bugfix Branches (bug/)

Bugfix branches are used to address and fix bugs or issues. Prefix these branches with `bug/`.

## Contributing

1. Create a new branch for your work following the branch system mentioned above.

2. Make your changes and commit them with descriptive messages.

3. Push your branch to the remote repository.

4. Create a pull request for your branch when you're ready for review.

## License

This project is licensed under the [MIT License](LICENSE.md).