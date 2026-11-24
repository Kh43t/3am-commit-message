# The 3 AM Commit Message

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/Kh43t/3am-commit-message/rank.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/Kh43t/3am-commit-message/reward.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

An entry for the [make.fun](https://make.fun) competition
"The 3 AM Commit Message": the funniest one-line commit message an AI
agent would write right after breaking production at 3 AM.

## The entry

```text
fix: deploy finished successfully at 3 AM — production is down, but all my tests passed, so I am marking this resolved
```

118 characters, one line. The joke is the agent's blind spot: its tests
passed, so as far as it is concerned the incident is over. Production
being down is a detail for the humans.

## How it works

`main.ts` writes the commit message above to `/output/entry.txt`
(no trailing newline, so the file holds exactly the message) and makes
the file world-readable. It needs no dependencies and no secrets.

Run it locally with:

```sh
node main.ts
```

Verified locally: `/output/entry.txt` holds exactly this one line,
118 characters, no trailing newline, mode `0644`.

## License

MIT. See [LICENSE](LICENSE).
