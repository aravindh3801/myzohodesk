# eslint-plugin-no-hardcoding

To prevent hardcoding content 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-hardcoding`:

```
$ npm install eslint-plugin-no-hardcoding --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-zsecurity` globally.

## Usage

Add `no-hardcoding` to the plugins section of your `.eslintrc` configuration file.

```json
{
  "plugins": ["no-hardcoding"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-hardcoding/no-hardcoding": 2
  }
}
```

**Note:** For working of no-hardcoding rule of this plugin a properties file of name excludes should be present in the build/eslint in the root dirctory of the project

## List of supported rules

- no-hardcoding/no-hardcoding,








