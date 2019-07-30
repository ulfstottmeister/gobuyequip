![App Screenshot](https://github.com/ulfstottmeister/gobuyequip/blob/master/design%20screenshots/2019-07-30%2011_59_13-Window.png)

CSGOBuyequipment Overview
------------------------

CSGOBuyequipment is a locally executing JavaScript App without further dependencies.
All it requires is a modern Web Browser.

CSGOBuyequipment is an Economy Planner and a buy script maker for the game Counter-Strike: Global Offensive (CS:GO).

The App resembles the buy menu from CS:GO.
It shows a list of all items which are available for buying within the game.
The user can buy items by clicking on them in the result list.
A buycommand string is generated, which the user can copy to clipboard.
Pasting the string into the game console from within the game will attempt to
buy the selected items in such an order that items will be dropped if necessary.
It is possible to save the buycommand string to a config file (e.g. buyset.cfg)
and execute it with the exec command (e.g. "exec buyset.cfg") in the ingame console.

Search
-------
The result list can be modified by using the filter section,
which contains the search bar, the team selector buttons and
the price slider.

The search bar can be used in different ways.
An item from the database will show up in the result, when the search string is contained in...
-the itemname field
-or the clearname field
-or the buycmd field
-or the buymenu field
.. of a DB entry
or when the search string matches the price field of a DB entry.
Database fields will be discussed in detail in the Database section.

The team select buttons allow to narrow down the search further.
When a team is selected only items of that team will be shown in the result list.

The price slider allows to only show items below a certain price point.
It can be adjusted in steps of $50 between $50 and $5200.



Database
--------
Examples of database entries look like this:
{"itemname":"usp_silencer","clearname":"USP-S","buycmd":"usp_silencer", "price":200, "buymenu":"b11", "onlyteam":"ct", "slot":"2", "candrop":true, "buydisabled":false},
...
{"itemname":"deagle","clearname":"Desert Eagle","buycmd":"deagle", "price":700, "buymenu":"b15", "onlyteam":"", "slot":"2", "candrop":true, "buydisabled":false}

-itemname: The itemname field is a unique field for each item. No item has the same itemname in common with any other item.

-clearname: The clearname is used to display the item to the user. This field is more cosmetic than the itemname.

-buycmd: The buycmd (buy command) is the value which is used to buy a certain item when using the "buy" command in the console
from within the game. For example using "buy deagle" in the game console will (attempt to) buy a Desert Eagle when the player
stands in the buy zone. It is important to note that the buycmd field does not contain unique values. Some items share the same buycmd.
Which weapon will actually be bought by using a certain buycmd, depends on the loadout setting that the player chooses in the
game main menu and/or  in which team the player is. (See: Glossary, loadout setting)

-price: The price that an items costs to buy with the ingame currency.

-buymenu: When the player stands in the buy zone, they can press "b" to open the buy menu, which then shows six different
categories to choose from. After selecting a category either by clicking or pressing a number key, they menu procedes to
that category and displays up to 6 items that the player can then choose to buy by clicking or pressing another number key.
The USP-S is said to be at the buymenu position "b11" because it can be bought by pressing b, then 1 and then 1 again.
The buymenu field is not unique as it depends on loadout settings and team affiliation. (See: Glossary, loadout setting)

-onlyteam: Field that indicates if a certain item can only be bought be a certrain team. The field is either empty or has the
value "ct" or "t".

-slot: Indicates on which equipment slot the player will equip the item. (See: Glossary, equipment slot)

-candrop: Boolean value. Indicates if it is possible to drop an item (e.g. buy pressing "G" ingame).
Certain items cannot be dropped. That includes the knife, with which the player spawns, but also grenades and Vest/Vest+Helment.
(Note: certain are dropped automatically when the player dies. This behaviour is not referred to by the candrop field.)

-buydisabled: Boolean value. The database contains items, which cannot be bought via the buy menu. Among other items, this concerns
the bomb, which will be automatically assigned to the equipment of a Terrorist player at the beginning of a game round. Also, the knife is automatically equipped by a player when they spawn. For completeness the database contains such items, but they are not
shown by default.

Glossary
--------
-loadout setting: For some weapons the player can select alternatives. When doing so, the weapon will be replaced in the
buymenu buy the player's selection. Loadout settings can be made on a per team basis. For example: a player can choose that
pressing "b15" will buy them a Desert Eagle when they are playin as Counter-Terrorist, but it will buy them an R8 Revolver when
playing as Terrorist. The GSGOBuyequipment App is agnostic of these settings and will show any possible database result when
searching items as buycmd.

-equipment slot: Equipment slots hold items which the player carries. When an equipment slot is activated, an item is put in
the hands of the player. Equipment slots have a capacity which limits the player to hold items of different kinds.
For example: slot1 is reserved for primary weapons. The player can only carry one primary weapon at a time. On the other hand, 
slot4 can hold up to 4 grenades (with competitive game rules). The player can press the "4" key several times ingame to cycle 
through their grenades.
