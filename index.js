/**
 * Copyright (C) 2016 panto.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[12:36:05]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

const FilterTransformer = require('panto-transformer-filter');

class IgnoreTransformer extends FilterTransformer {
    _transform(file) {
        return super._transform(file).then(nfile => {
            return (file === nfile) ? null : file;
        });
    }
}

module.exports = IgnoreTransformer;