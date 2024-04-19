**Platform**

Pages:

- My Stats
- My Party
- Guild Stats

User data:

- user ID
- account status (active).
  - user gets active on registration
  - user can delete
  - admin can delete
  - deleted accounts are completely removed from the DB
- if we implement login through Discord then EMAIL and PASSWORD are not needed, I guess

**My Stats Page**

data to be displayed:

General Tab:

- World bosses attendance (like 15/60 a month or a week), with like threshold of _30_ to be eligible to get loot (handed over by guild leader in game). (Amount of times boss was attended by a person can be changed by Admin manually)
- Guild Bosses (basically the same description as for World bosses)
  Specific Tab:
- main char name (can be changed by user)
- current level (can be changed by user)
- in-game status (member/officer/leader) (can be changed by Admin)
- rights (default/master/admin) (visible only to you or master/admin) (can be changed by Admin only)
- weekly playtime (can be changed by user) (needed for My Party feature)
- time zone (can be changed by user) (needed for My Party feature)
- available days/when you mostly play (can be changed by user) (needed for My Party feature)
- main weapon (can be changed by user) (needed for My Party feature)
- off hand weapon (can be changed by user) (needed for My Party feature)
- your current constant party or link to My Party Page (just data displayed, no editing here)

**My Party Page**

create party flow:

- create party (just puts you under a party, random party ID given, party leader status given)
- invite to party (by user ID or main character name)
- kick from party (only by party owner)
- displayer party status (member/owner)
  overall:
- list of const parties in a guild (just an array of 7 ppl with displayed main character names with apply button if party isn't full)
- apply to party functionality (just sends a notification to party owner with a request (ok/deny) to join the party)

**Guild Stats Page**

like a huge dump of data in a table

- player name
- player ID
- guild bosses attendance (times) (can be changed only here, only by admin)
- world bosses attendance (times) (can be changed only here, only by admin)
- status (member/officer/leader)
- amount of times loot from bosses received (can be changed only here, only by admin)
- days being in a guild in days (just a timer since the day user joins the platform)
