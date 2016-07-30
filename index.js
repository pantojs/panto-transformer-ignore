/**
 * Copyright (C) 2016 panto.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[12:36:05]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.2.3
 * @since 0.1.0
 */
'use strict';

const FilterTransformer = require('panto-transformer-filter');

class IgnoreTransformer extends FilterTransformer {
    _transform(file) {
        return super._transform(file).then(files => {
            if (!files || Array.isArray(files)) {
                return file;
            }
            return null;
        });
    }
}

module.exports = IgnoreTransformer;