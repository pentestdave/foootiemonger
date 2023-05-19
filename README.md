# Documentation for the FootieMonger Bot

This is the documentation for **FootieMonger**. To get a more comprehensive understanding of what it offers and how to use it, kindly explore the following resources:

## All Available Functions

These are **how-tos** on how you can correctly utilize in-built functions to return required datas:

### getAllCompetition

This function will return all available football leagues & competition, run the bot locally like so: 👇️

```bash
node src/index.js
prompt: Feature:
```

The terminal will prompt you to request for the data, simply enter `all competition` (not case-sensitive) and the requested data will be returned in a table format.

**Example: 👇️**

```bash
node src/index.js
prompt: Feature: all competition
```

### getCompetitionStandings

This function will return a specified football league or competition table standing, run the bot locally like so: 👇️

```bash
node src/index.js
prompt: Feature:
```

The terminal will prompt you to request for the data, simply enter `competition standings` with the league abbreviation afterwards E.G `EPL` (not case-sensitive) and the requested data will be returned in a table format.

**Note:** You can get league abbreviations from the `getAllCompetition` function!

**Example: 👇️**

```bash
node src/index.js
prompt: Feature: competition standings
prompt: Competition: EPL
```

### getStadiumsInfo

This function will return all information about football stadiums all around the world, run the bot locally like so: 👇️

```bash
node src/index.js
prompt: Feature:
```

The terminal will prompt you to request for the data, simply enter `stadiums information` (not case-sensitive) and the requested data will be returned in a table format.

**Example: 👇️**

```bash
node src/index.js
prompt: Feature: stadiums information
```

### getFixtureOdds

This function will return a fixed football match odds and discounted sportsbook wager link, run the bot locally like so: 👇️

```bash
node src/index.js
prompt: Feature:
```

The terminal will prompt you to request for the data, simply enter `fixture odds` (not case-sensitive) and the requested data will be returned in a table format.

**Example: 👇️**

```bash
prompt: Feature:  fixture odds
// Note: You can get league abbreviations from the `getAllCompetition` function!
prompt: Competition:  EPL
// Enter the date in this format: yyyy-MM-dd
prompt: Date:  2023-05-20
```
