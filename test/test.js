/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[16:26:41]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.2.3
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const IgnoreTransformer = require('../');

describe('panto-transformer-ignore', () => {
    describe('#transform', () => {
        it('should return self if unmatched', done => {
            const file = {
                filename: 'mark.js'
            };

            new IgnoreTransformer({
                pattern: '*.css'
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, file);
            }).then(() => {
                done();
            });
        });
        it('should return null if matched', done => {
            const file = {
                filename: 'mark.js'
            };

            new IgnoreTransformer({
                pattern: '*.js'
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, null);
            }).then(() => {
                done();
            });
        });
        it('should support string pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new IgnoreTransformer({
                pattern: 'm*k.js'
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, null);
            }).then(() => {
                done();
            });
        });
        it('should support regexp pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new IgnoreTransformer({
                pattern: /^m\w+\.js/
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, null);
            }).then(() => {
                done();
            });
        });
        it('should support function pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new IgnoreTransformer({
                pattern: file => {
                    return file.filename === 'mark.js'
                }
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, null);
            }).then(() => {
                done();
            });
        });
        it('should support array pattern', done => {
            const file = {
                filename: 'mark.js'
            };

            new IgnoreTransformer({
                pattern: ['*.css', 'm*k.js']
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile, null);
            }).then(() => {
                done();
            });
        });
    });
});