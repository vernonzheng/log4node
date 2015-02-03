// Generated by CoffeeScript 1.3.3
(function() {
  var AbstractAppender, LevelUtil, Sentry, SentryAppender, util,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractAppender = require('./abstract_appender').AbstractAppender;

  Sentry = require('../extends/sentry').Sentry;

  LevelUtil = require('../core/level').LevelUtil;

  util = require('util');

  SentryAppender = (function(_super) {

    __extends(SentryAppender, _super);

    function SentryAppender(props) {
      this._disbale = false;
      this._sentry = new Sentry(props.dsn, props.disable);
      return;
    }

    SentryAppender.prototype.append = function(loggerName, level, msgs) {
      if (!LevelUtil.validate(level)) {
        return;
      }
      this._sentry.sendMsg(loggerName, level, msgs);
    };

    return SentryAppender;

  })(AbstractAppender);

  exports.SentryAppender = SentryAppender;

}).call(this);