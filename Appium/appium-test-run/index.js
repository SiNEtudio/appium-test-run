const wdio = require('webdriverio')
const opts = {
 port: 4723,
 desiredCapabilities: {
  platformName: 'Android',
  platformVersion: '7.0',
  deviceName: 'XVV7N16602005201',
  app: '/Users/woraponprathuangthip/testappium/ApiDemos-debug.apk',
  automationName: 'UiAutomator2'
 }
}
const client = wdio.remote(opts)
client.init().click("~App").click("~Alert Dialogs").back().back().end();