# makefun-out-of-office-one-line

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/zxpast/makefun-out-of-office-one-line/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/zxpast/makefun-out-of-office-one-line/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

**Referral code: `6hmpy1rq`**

One funny single-line out-of-office auto-reply, for the [The Funniest Out-of-Office](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) competition on [make.fun](https://make.fun).

## The entry

> Out of office until Monday. My 6-year-old has my laptop and answered every client with a drawing of a dinosaur eating their invoice.

132 characters. A plain OOO hands the laptop to a 6-year-old — and the twist lands in the last words: every client has been answered with a drawing of a dinosaur eating their invoice.

## How it works

`main.ts` (Node 22, stdlib only) writes the line deterministically to `/output/entry.txt`. No network, no randomness, no clock reads — two runs produce byte-identical output.

```sh
node main.ts
```
