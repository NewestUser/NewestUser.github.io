# [Zlatev Academy Website](https://zlatevacademy.com)


## Preview

[![Zlatev Academy Website Preview](./cover_image.png)](https://zlatevacademy.com)

## Maintance

This project is based on an an open-source boostrap teplate called [Start Bootstrap - Clean Blog](https://startbootstrap.com/theme/clean-blog/).  
The original template repo can be found here: https://github.com/startbootstrap/startbootstrap-clean-blog   

The project maintains two git branches:
- [main](https://github.com/NewestUser/NewestUser.github.io/tree/main) - which is the branch that is used for prod deployments
- [upstream-master](https://github.com/startbootstrap/startbootstrap-clean-blog/tree/master) - which is a branch that is updated acording to the [original master](https://github.com/startbootstrap/startbootstrap-clean-blog/tree/master)

The **upstream-master** branch is used to rebase with the **main** branch and thus it makes use of the updates from the original repo.

### Setup

```shell
git clone git@github.com:NewestUser/NewestUser.github.io.git

git fetch origin upstream-master:upstream-master

git remote add upstream-master git@github.com:StartBootstrap/startbootstrap-clean-blog.git
```

### Usage

Clone the source files of the theme and navigate into the theme's root directory. Run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `package.json` file to see which scripts are included.

#### npm Scripts

* `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
* `npm run build:assets` copies the files in the `src/resources/assets/` directory into `dist`
* `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
* `npm run build:scripts` brings the `src/resources/js/scripts.js` file into `dist`
* `npm run build:scss` compiles the SCSS files located in the `src/resources/scss/` directory into `dist`
* `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
* `npm run start:debug` runs the project in debug mode
* `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.

## Copyright and License

Copyright 2013-2022 Zlatev Academy. Code released under the [MIT](https://github.com/NewestUser/NewestUser.github.io/blob/main/LICENSE) license.
