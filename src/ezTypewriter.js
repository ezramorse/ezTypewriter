/**
 * Text animation effect for typing text
 *
 * Types out the text, character to character within paragraphs
 *
 * @date        2014-12-05
 * @version     0.0.1
 * @copyright   Copyright (c) 2014 Ezra Morse <me@ezramorse.com>
 * @license     Released under the MIT and GPL licenses
 * @author      Ezra Morse <me@ezramorse.com>
 */
(function( $ ) {
    $.fn.ezTypewriter = function (options) {

        var t = this;
        t.settings = $.extend({
            autoType: true,
            time:.1,
            variation:.075,
            delay: 0
        }, options);
        t.info = [];
        t.timeouts = [];

        t._init = function () {

            t.info = [];

            this.each(function (h, w) {

                t.info[h] = {p: [], pp: [], pt: [], ptl: [], container: false};

                $(w).children('p').each(function (i, x) {

                    t.info[h].p[i] = x;

                    $(x).hide();

                    var pp = $('<p/>');
                    pp[0].className = x.className;
                    $(w).append(pp);
                    t.info[h].pp[i] = pp;

                    var c = x.textContent || x.innerText;

                    t.info[h].pt[i] = c.replace(/\s+/g, ' ').replace(/\s{2,}/g, ' ');
                    t.info[h].ptl[i] = t.info[h].pt[i].length;

                });

            });

            return t;
        };

        t.type = function (x) {

            for (var j = 0; j < t.info.length; j++) {
                if (!isNaN(x) && j != x)
                    continue;


                var delay = t.settings.delay;
                for (var k = 0; k < t.info[j].pt.length; k++) {
                    t.info[j].pp[k].show();
                    for (var l = 0; l < t.info[j].ptl[k]; l++) {
                        if (l == t.info[j].ptl - 1) {
                            (function (j,k) {
                                t.timeouts.push(setTimeout(function () {
                                    t.info[j].pp[k].html(t.info[j].pt[k].substring(0, l + 1).replace('<','&lt;').replace('<','&gt;'));
                                    t.info[j].pp[k].hide();
                                    $(t.info[j].p[k]).show();
                                }, delay * 1000));
                            })(j,k);
                        } else {
                            (function (j,k,l) {
                                t.timeouts.push(setTimeout(function () {
                                    t.info[j].pp[k].html(t.info[j].pt[k].substring(0, l + 1).replace('<','&lt;').replace('<','&gt;'));
                                }, delay * 1000));
                            })(j,k,l);
                        }
                        delay += t.settings.time+(Math.random()* t.settings.variation);
                    }

                }
            }

        };

        t.stop = function() {
            for (var j = 0; j < t.timeouts.length; j++)
                clearTimeout(t.timeouts[j]);
            return t;
        };

        t.getScratch = function() {
            scratch=[];
            for (var j = 0; j < t.info.length; j++)
                for (var k = 0; k < t.info[j].pt.length; k++)
                    scratch.push(t.info[j].pp[k]);

            return scratch;
        };

        t.getOriginal = function() {
            original=[];
            for (var j = 0; j < t.info.length; j++)
                for (var k = 0; k < t.info[j].pt.length; k++)
                    original.push($(t.info[j].p[k]));

            return original;
        };

        t.kill = function() {
            t.stop();
            for (var j = 0; j < t.info.length; j++)
                for (var k = 0; k < t.info[j].pt.length; k++) {
                    t.info[j].pp[k].remove();
                    $(t.info[j].p[k]).show();
                }
            delete t;
        };

        t._init();
        if (t.settings.autoType == true)
            t.type();

        return t;

    }
}( jQuery ));
