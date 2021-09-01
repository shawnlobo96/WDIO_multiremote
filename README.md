# webdriverio-browserstack

# Upload the sample app:

[Android Sample App upload steps](https://www.browserstack.com/docs/app-automate/appium/upload-app-using-public-url)

## Setup

- Clone the repo
- Install dependencies `npm install`
- You can setup environment variables for all sample repos (see Notes) or update `*.conf.js` files inside the `conf/` directory with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)
- specify the app hash ID from the app upload step in the `single.conf.js`.

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

## Running your tests

- To run a single test, run `npm run single`
