# factory-sandbox

A small project for testing automated changes. `npm test` runs the tests.

## Helpers

- `src/camel.js`: camelCase – joins words (split on whitespace, `-`, `_`) into camelCase.
- `src/capitalize.js`: capitalize – upper-cases the first character, leaves the rest.
- `src/count.js`: wordCount and charCount – number of words / non-whitespace characters.
- `src/excerpt.js`: excerpt – shortens text to at most max characters, ending in an ellipsis when cut.
- `src/firstword.js`: firstWord – the first whitespace-separated word of text, or an empty string when there is none.
- `src/initials.js`: initials – upper-case first letter of each word of a name (split on spaces/hyphens).
- `src/kebab.js`: kebabCase – lower-cases text and joins words with `-`.
- `src/pad.js`: padLeft – pads text on the left with a fill string up to a width.
- `src/product.js`: product – the product of an array of numbers, or 1 for an empty array.
- `src/repeat.js`: repeatText – repeats text N times with an optional separator.
- `src/reverse.js`: reverse – reverses characters (by code point).
- `src/shorten.js`: shortenWords – leading whole words that fit in max characters, plus an ellipsis when words were dropped.
- `src/slug.js`: slug – turns a title into a URL slug (max 50 chars, configurable separator, accents folded).
- `src/snake.js`: to_snake_case – lower-cases text and joins words with `_`.
- `src/sum.js`: sum – the total of an array of numbers, or 0 for an empty array.
- `src/swapcase.js`: swapCase – swaps the case of each letter.
- `src/text.js`: truncateWords – shared helper returning leading whole words that fit in max characters.
- `src/title.js`: titleCase – capitalises each space-separated word, lower-cases the rest.
- `src/vowels.js`: countVowels – counts a, e, i, o, u (either case).
- `src/words.js`: countWords – number of whitespace-separated words.
- `src/wrap.js`: wordWrap – splits text into lines of at most width characters, breaking between words.
