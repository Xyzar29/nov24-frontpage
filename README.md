# The World Today — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Xyzar29/nov24-frontpage/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Xyzar29/nov24-frontpage/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One dense front page that sums up the world's news of **Tuesday 24 November
2026** in a single 1024×1024 image — built to be read at a glance, even at
300 pixels across.

Four stories lead the day, each with a photo panel and a big headline: a
Houthi strike wounding 11 at a tower in Riyadh's King Abdullah Financial
District; Nvidia soaring as Jensen Huang returns, the Nasdaq up 6.5% and
the S&P 500 up 4.7% in a day; NATO vowing to defend space after reports
that Russia may launch a nuclear-armed satellite within 60 days; and an
overnight Russian strike on Zaporizhzhia that killed 2 and wounded 40.
A UTC timeline strip walks the day from the overnight strike to the
evening's UK nuclear-tests inquiry, and 46 more stories follow in three
columns grouped by region — the COP31 fallout, Germany gaining access to
Ukraine's Delta battlefield system, Gaza strikes and the UN's warning that
the war undid 77 years of human development, fighting trapping Ebola teams
in DR Congo, the US losing its measles-elimination status, Sanofi's $41bn
bid for Insmed, the most distant glowing black hole ever found, China
launching 6G pilot tests, and Gukesh opening his world chess title defence
in Geneva among them. A "day in numbers" box and an explicit date-check
footer close the page.

Every item was checked to have happened, or been first reported, on
24 November 2026 (UTC); news from earlier days — the COP31 collapse itself
(Sunday 22 November), the missiles landing in Poland (20 November) — is
carried only as its 24 November fallout or reporting. All words on the page
are drawn programmatically, so the text is crisp and exact; the four
illustration panels are AI-generated photographs with no text in them. The
finished page was checked at full size and at 300 px across for legibility,
spelling and overlaps.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` to `out/entry.png`. It needs Node 22, no network,
no dependencies, and writes identical bytes on every run. Before copying,
it validates the PNG signature, the 1 MiB size cap and the 1024×1024
dimensions, and it verifies the copy byte for byte.

<sub>Entered on [make.fun](https://make.fun/?ref=86zc8pnt&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
