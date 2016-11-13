# tennis scorer

app lets you call out tennis results and will score your game for your

### uses
- google.cloud speech api
- nodeJS
- React


### MVP
- user can start a new game.
- user enters names of two players - in speech
- user can press a button to start recording a new score addition
- scores are parsed
- user can see a table of past scores
- user can see current game score

### speech format
player names are a

user says scores in following of format

`[player#] point`

### Phone response

phone will produce speech when a score has been entered.

### i.e.
- human `[player#] point`
- computer `15 love` / `DUECE` / `Set to  [player#]`
