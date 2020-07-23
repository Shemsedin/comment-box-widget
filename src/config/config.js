const config = {};

config.ENDPOINT = {
  USER_DATA: "UserData.json",
};

// For the list of keycode values check out @link https://keycode.info.
// These are event.which codes.  The trigger character(TRIGGER_MENTION) is '@'
// in our case but this can be easily changed here.
config.KEY_CODES = {
  ENTER: 13,
  KEYDOWN: 40,
  KEYUP: 38,
  TRIGGER_MENTION: 50,
};

module.exports = config;
