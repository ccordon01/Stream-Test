const DashValidator = require("dash-validator");

const validator = new DashValidator("https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd");
validator.load().then(() => {
  console.log("Loaded manifest");
  console.log(validator.duration());
  validator.verifyAllSegments(verifyFn).then(result => {
    console.log(result);
  });
}).catch(console.error);

function verifyFn(headers) {
  return (typeof headers["x-my-custom-header"] !== "undefined");
}