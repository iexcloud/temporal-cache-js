/* ***************************************************************************
 *
 * Copyright (c) 2021, the temporal-cache-js authors.
 *
 * This file is part of the temporal-cache-js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier", "jest"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          useTabs: false,
          trailingComma: "all",
        },
      ],
      camelcase: "off",
      "func-names": "off",
      eqeqeq: "error",
      "no-underscore-dangle": "off",
    },
  };
  