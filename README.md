# Interactive Workshop: Prototyping Apps with Ember Octane

The workshop was first presented at the Austin Code Mentorship on 2/1/2020.

![The finished app shows a product listing](screenshot.png)


## Description

When building your resume or competing in a hackathon, you need to be able to write a demo app in a short time. Unfortunately, you (and your team) may end up spending a lot of time on:

- Defining a project structure
- Finding a router and data store
- Connecting the backend project with your frontend
- Populating your app with data
- Stopping components from leaking styles
- Fixing bugs and regressions
- Publishing your app online

[Ember Octane](https://emberjs.com/editions/) helps you quickly solve these problems so that you can focus on what matters: delivering features and finishing your app on time.


## Outcomes

The workshop will take 1 - 1.5 hours. By the end, you will be able to:

- Use `Ember CLI` to create your app
- Commit your code on GitHub
- See what Ember recommends for project structure
- Create routes and components
- Use `Sass + Ember CSS Modules` to localize a component's styles
- Use `Ember Data + Mirage + Faker` to mock API and manage data
- Use `QUnit DOM + Ember Test Selectors + Mirage` to write application tests
- Publish your app on Heroku

If time permits, you will be briefly introduced to:

- `Tailwind` for prototyping styles
- Publishing your app on GitHub Pages or Netlify
- Tracked properties and element modifiers


## Todos before the workshop

If you run into problems with these steps, feel free to [contact Isaac (@ijlee2) on Discord](https://discord.gg/emberjs).

### 1. Install Ember CLI

Please install Node ([10.x or higher recommended](https://github.com/ember-cli/ember-cli/blob/master/docs/node-support.md)) and Ember CLI on your machine.

```
$ npm install -g ember-cli
```

You can run `ember --version` to verify that your installation was successful. You will see an output similar to:

```
$ ember -v
ember-cli: 3.15.2
node: 12.14.1
os: darwin x64
```

### 2. Install Ember Inspector

[Ember Inspector](https://github.com/emberjs/ember-inspector#installation) is a browser extension, a useful tool for debugging. It lets you interact with the Ember Data store, among many other things.

### 3. Create GitHub and Heroku accounts

We will push our code on GitHub and publish our app on Heroku. (Trivia: Heroku Dashboard is an Ember app.)

If time permits, I will point out how you can publish your app on GitHub Pages or Netlify.

### 4. IDE Plugins (optional)

If you use VS Code, there are official and many community-driven plugins for syntax highlight, auto-completion, etc. in Ember.

That said, feel free to [use the editor that you feel most comfortable with](https://cli.emberjs.com/release/appendix/dev-tools/#codeeditorintegrations). I will be using Sublime Text.