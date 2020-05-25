// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function (CodeMirror) {
  "use strict";

  /*
      '13:52:03 - Trace - [from]: trace message !!\n' +
      '13:52:04 - Info  - [from]: info message !!\n' +
      '13:52:05 - Warn  - [from]: warn message !!\n' +
      '13:52:03 - Error - [from]: error message !!\n' +
      '13:52:03 - Sign  - [from]: sign message !!\n' +
      '\n\n' +
      '13:52:03 - Trace - [from]: trace message !!\n' +
      'output line 2\n' +
      'output line 3\n' +
      'output line 4\n' +

      '13:52:04 - Info  - [from]: info message !!\n' +
      'output line 2\n' +
      'output line 3\n' +
      'output line 4\n' +

      '13:52:05 - Warn  - [from]: warn message !!\n' +
      'output line 2\n' +
      'output line 3\n' +
      'output line 4\n' +

      '13:52:03 - Error - [from]: error message !!\n' +
      'output line 2\n' +
      'output line 3\n' +
      'output line 4\n' +

      '13:52:03 - Sign  - [from]: sign message !!\n' +
      'output line 2\n' +
      'output line 3\n' +
      'output line 4\n' +
      '\n'
   */

  CodeMirror.defineMode("log", function () {
    function body(stream) {
      stream.skipToEnd();
      return null;
    }

    function start(stream, state) {
      state.cur = body;
      return null;
    }

    function resTrace(stream) {
      stream.skipToEnd();
      return "resTrace";
    }

    function resInfo(stream) {
      stream.skipToEnd();
      return "resInfo";
    }

    function resWarn(stream) {
      stream.skipToEnd();
      return "resWarn";
    }

    function resError(stream) {
      stream.skipToEnd();
      return "resError";
    }

    function resSign(stream) {
      stream.skipToEnd();
      return "resSign";
    }

    return {
      token: function (stream, state) {

        if (stream.match(/^\d\d:\d\d:\d\d - Trace -/)) {
          state.cur = resTrace

        } else if (stream.match(/^\d\d:\d\d:\d\d - Info  -/)) {
          state.cur = resInfo

        } else if (stream.match(/^\d\d:\d\d:\d\d - Warn  -/)) {
          state.cur = resWarn

        } else if (stream.match(/^\d\d:\d\d:\d\d - Error -/)) {
          state.cur = resError

        } else if (stream.match(/^\d\d:\d\d:\d\d - Sign  -/)) {
          state.cur = resSign
        }

        var cur = state.cur;
        return cur(stream, state);
      },

      startState: function () {
        return {cur: start};
      }
    };
  });

  CodeMirror.defineMIME("message/log", "log");

});