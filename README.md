# not-uptime-api


## Usage (Submit Url)

```javascript
const { uptimeClient } = require("noupi");
const apiClient = new uptimeClient("yOurNicE Uptime Token")

//using await
async function submitLink() {
 await apiClient.submit("testApp","yourlink.glitch.me")
  }
submitLink()

//using then

apiClient.submit("testApp", "yourlink.glitch.me").then(x => console.log(x))
/*NOTE:
Valid Url Ended with *.glitch.me*, *.repl.co*, *.repl.run*
*/
```

