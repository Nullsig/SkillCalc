//Hard Text Values <id of span>: <translated text>
var HardTextVals = {
					CraftingText: "Handwerksfertigkeiten",
					CombatText: "Kampffertigkeiten",
					MinorText: "Grundfertigkeiten",
					StatCapText: "Attributsgrenze",
					CoPSpentText: "Kampfpunkte verwendet",
					CrPSpentText: "Handwerkspunte verwendet",
					MiPSpentText: "Grundfertigkeitspunkte verwendet",
					AtPSpentText: "Attributspunkte verwendet",
					StrengthText: "Stärke",
					AgilityText: "Beweglichkeit",
					ConstitutionText: "Vitalität",
					IntelligenceText: "Intellekt",
					TwoForOneText: "Attributsgrenze x2",
					WillpowerText: "Willenskraft",
					HitPointsText: "Lebenspunkte",
					StaminaText: "Ausdauer",
					CarryWeightText: "Traggewicht",
					MaxOverText: "base max / überladen",
					SaveText: "Speichern",
					LoadText: "Laden",
					SummaryTableText: "Zusammenfassung",
					SkillHeaderText: "Fertigkeit",
					LvlReqText: "Level<br>Voraussetzung",
					UnlockedText: "Freigeschaltete Fähigkeit",
					AllText: "Alle"
				};


/*
Build out Nodes 
Translations require new values for:
displayName
allText
zeroText
thirtyText
sixtyText
ninetyText
hundredText

All other values should not change
*/
var artisan = {
				idName: "artisan", 
				displayName: "Handwerk", 
				allText:"Die Punktzahl bestimmt die Landschaftsbaugeschwindigkeit und Baumfällgeschwindigkeit.", 
				zeroText:"Du kannst das Gelände anheben oder absenken.<br><br>Du kannst Rinde sammeln und Bäume fällen.<br><br>Du kannst ein Lager aufschlagen und einfache Werkzeuge herstellen.<br><br>Du kannst Steine behauen für Konstruktionen.", 
				thirtyText:"Du kannst das Gelände planieren und Baumstümpfe ausgraben.", 
				sixtyText:"Du kannst Hartholzbäume doppelt so schnell fällen.", 
				ninetyText:"Du kannst seltene Zutaten in Bäumen finden (1%).", 
				hundredText:"Geringfügig höhere Wahrscheinlichkeit seltene Zutaten in Bäumen zu finden (1,5%).",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Artisan.png",
				disabledImageSrc:"images/Artisan_u.png",
				value:0
			};
var carpentry = {
				idName: "carpentry", 
				displayName: "Schreinern", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der hergestellten Gegenstände aus Holz ",
				zeroText:"Du kannst Baumstämme behauen, Holzteile und kleine Möbel herstellen.",
				thirtyText:"Du kannst eine Werkbank benutzen",
				sixtyText:"Du kannst Holzteile für Waffen herstellen",
				ninetyText:"Du kannst größere Möbel herstellen",
				hundredText:"Du kannst verzierte Gegenstände herstellen",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Carpentry.png",
				disabledImageSrc:"images/Carpentry_u.png",
				value:0
			};
var construction = {
				idName: "construction", 
				displayName: "Zimmern", 
				allText:"Die Punktzahl bestimmt die Qualität und Haltbarkeit von hergestellten Objekten",
				zeroText:"Du kannst Straßen pflastern",
				thirtyText:"Du kannst einfache Holzgegenstände herstellen",
				sixtyText:"Du kannst einfache Steinobjekte und anspruchsvollere Holzkonstruktionen herstellen", 
				ninetyText:"Du kannst eine Vielzahl von komplexen Objekten herstellen",
				hundredText:"Du kannst Grenzpfähle aufstellen",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Construction.png",
				disabledImageSrc:"images/Construction_u.png",
				value:0
			};
var digging = {
				idName: "digging", 
				displayName: "Graben", 
				allText:"Die Punktzahl bestimmt die Geschwindigkeit des Stollengrabens ",
				zeroText:"Du kannst Stollen vorwärts und abwärts graben",
				thirtyText:"Etwas verbesserte Geschwindigkeit mit der Stollen gegraben werden können.<br><br>Du kannst Stollen aufwärts graben.",
				sixtyText:"Du kannst Stollenwände mit Brettern verstärken",
				ninetyText:"Du kannst Stollenwände (durch das Errichten von Stützbalken) verstärken",
				hundredText:"Hergestellte Stützbalken sind langlebiger",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Digging.png",
				disabledImageSrc:"images/Digging_u.png",
				value:0
			};
var materialsPrep = {
				idName: "materialsPrep", 
				displayName: "Baustoffvorbereitung", 
				allText:"Die Punktzahl bestimmt die Geschwindigkeit mit der Baumaterial hergestellt wird ",
				zeroText:"Du kannst einfache Lehmgegenstände herstellen",
				thirtyText:"Du kannst Holzkohle aus Hartholtscheiten machen",
				sixtyText:"Du kannst Glasgegenstände herstellen und die Töpferscheibe benutzen",
				ninetyText:"Du kannst anspruchsvollere Lehmgegenstände herstellen",
				hundredText:"Du kannst Stadtschilder herstellen",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Construction_Materials_Preparation.png",
				disabledImageSrc:"images/Construction_Materials_Preparation_u.png",
				value:0
			};
var bowcraft = {
				idName: "bowcraft", 
				displayName: "Bogenbau", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der hergestellten Bögen und Armbrüste ",
				zeroText:"Du kannst normale Pfeile und Bolzen herstellen",
				thirtyText:"Du kannst normale Bögen und Armbrüste herstellen",
				sixtyText:"Du kannst verbesserte Bögen, Armbrüste und die jeweilige Munition herstellen",
				ninetyText:"Du kannst qualitativ außergewöhnliche Waffen herstellen (+20% Qualität) (0,01% Erfolgsaussicht) und ihnen einen Namen geben",
				hundredText:"Du kannst qualitativ außergewöhnliche Waffen herstellen (+20% Qualität) (0,011% Erfolgsaussicht) und ihnen einen Namen geben",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Bowcraft.png",
				disabledImageSrc:"images/Bowcraft_u.png",
				value:0
			};
var masonry = {
				idName: "masonry", 
				displayName: "Maurerhandwerk", 
				allText:"Die Punktzahl bestimmt die Qualität und Haltbarkeit von errichteten Gebäuden",
				zeroText:"Du kannst steinerne Umzäunungen und einfaches Mauerwerk errichten",
				thirtyText:"Du kannst steinerne Befestigungsanlagen errichten",
				sixtyText:"Du kannst einige Holz- und Steingebäude errichten",
				ninetyText:"Du kannst anspruchsvollere Gebäude als Maurer bauen",
				hundredText:"Du kannst Flaggen und Banner hissen",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Masonry.png",
				disabledImageSrc:"images/Masonry_u.png",
				value:0
			};
var mining = {
				idName: "mining", 
				displayName: "Bergbau", 
				allText:"Die Punktzahl bestimmt die Geschwindigkeit des Erzabbaus, Erzsuchgeschwindigkeit und Suchreichweite ",
				zeroText:"Du kannst Eisen- und Kupfererz schürfen.<br><br>Du kannst nach Kupfererz suchen.",
				thirtyText:"Du kannst Edelmetalle (Gold und Silber) schürfen.<br><br>Du kannst nach Eisenerz suchen.",
				sixtyText:"Du hast die Chance Edelsteine zu finden (0, 5% Erfolgsaussicht je Grabungsaktion).",
				ninetyText:"Du kannst nun seltene Minerale in Erzen finden (1% Erfolgsaussicht je Grabungsaktion).",
				hundredText:"Du hast eine leicht erhöhte Chance, seltene Minerale in Erzen zu finden (1,1% Erfolgsaussicht je Grabungsaktion).",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Mining.png",
				disabledImageSrc:"images/Mining_u.png",
				value:0
			};
var smelting = {
				idName: "smelting", 
				displayName: "Schmelzen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität des hergestellten Metalls:",
				zeroText:"Du kannst Eisen und Kupfer aus Erzen schmelzen",
				thirtyText:"Du kannst wertvolle Erze zu Klumpen schmelzen",
				sixtyText:"Du kannst Stahl schmelzen",
				ninetyText:"Du kannst Werkzeuge, Waffen und Rüstungen aus Metall einschmelzen (wiederaufbereiten). Aus kostbaren Erzen kannst du Barren und Platten herstellen. Außerdem kannst du Vostaskusstahl schmelzen.",
				hundredText:"Verschwende weniger Material während der Wiederaufbereitung von Metallwaffen.",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Smelting.png",
				disabledImageSrc:"images/Smelting_u.png",
				value:0
			};
var warfareEng = {
				idName: "warfareEng", 
				displayName: "Belagerungsgerätebau", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der hergestellten Kriegsgeräte ",
				zeroText:"Du kannst kleine Kriegsgerätesätze herstellen.<br><br>Du kannst Munition aus Naphtha herstellen",
				thirtyText:"Du kannst mittelgroße Kriegsgerätesätze herstellen",
				sixtyText:"Du kannst große Kriegsgerätesätze herstellen.<br><br>Du kannst ein Sprengfass herstellen",
				ninetyText:"Du kannst Brandladungen herstellen",
				hundredText:"Dauerhafter Bonus von 5 % auf Glück während des Umgangs mit Kriegsgeräten",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Warfare_Engineering.png",
				disabledImageSrc:"images/Warfare_Engineering_u.png",
				value:0
			};
var architecture = {
				idName: "architecture", 
				displayName: "Architektur", 
				allText:"Die Punktzahl bestimmt die Qualität und Haltbarkeit der errichteten Gebäude",
				zeroText:"Du kannst Burgmauern (10 m) errichten",
				thirtyText:"Du kannst Türme und Burgmauern mit Mordgang errichten",
				sixtyText:"Du kannst weitere Burgbefestigungen und mehrere verbesserte Gebäude errichten",
				ninetyText:"Du kannst einen großen Bergfried errichten",
				hundredText:"Du kannst Springbrunnen errichten",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Architecture.png",
				disabledImageSrc:"images/Architecture_u.png",
				value:0
			};	
var buildingMaintain = {
				idName: "buildingMaintain", 
				displayName: "Gebäudewartung", 
				allText:"Die Punktzahl bestimmt die Qualität der hergestellten Reparatursätze und Gebäudeinstandhaltungsarbeiten ",
				zeroText:"Du kannst kleine Reparatursätze herstellen und damit Gebäude reparieren",
				thirtyText:"Du kannst mittlere Reparatursätze herstellen",
				sixtyText:"Du kannst große Reparatursätze herstellen",
				ninetyText:"Die Geschwindigkeit mit der man Objekte repariert ist etwas verbessert",
				hundredText:"Hergestellte Reparatursätze und Gebäudeinstandhaltungsarbeiten haben maximale Qualität",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Building_Maintain.png",
				disabledImageSrc:"images/Building_Maintain_u.png",
				value:0
			};
var preciousProsp = {
				idName: "preciousProsp", 
				displayName: "Edelmetalle schürfen", 
				allText:"Die Punktzahl bestimmt die Erzsuchgeschwindigkeit und Suchreichweite ",
				zeroText:"Du kannst Stollenwände prüfen",
				thirtyText:"Etwas verbesserte Suchreichweite",
				sixtyText:"Du kannst nach Silbererz suchen. Deine Suchreichweite wurde vergrößert.",
				ninetyText:"Du kannst nach Golderz suchen. Deine Suchreichweite wurde vergrößert.",
				hundredText:"Die Punktzahl bestimmt die maximale Suchreichweite",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Prospecting.png",
				disabledImageSrc:"images/Prospecting_u.png",
				value:0
			};
var jewelry = {
				idName: "jewelry", 
				displayName: "Goldschmied", 
				allText:"Die Punktzahl bestimmt die maximale Qualität des hergestellten Schmucks. Die Qualität des Schmucks beeinflusst den Glücksbonus, den der Träger beim Tragen erhält. ",
				zeroText:"Du kannst einfache Ringe herstellen",
				thirtyText:"Du kannst Ringe und Amulette herstellen",
				sixtyText:"Du kannst einfachen Schmuck mit Edelsteinen herstellen",
				ninetyText:"Du kannst unter Verwendung von mehreren Metallen und Edelsteinen aufwändigen Schmuck herstellen.<br><br>Du kannst qualitativ außergewöhnlichen Schmuck aus mehreren Metallen und Edelsteinen herstellen (+20% Qualität) (0,01% Chance) und ihn benennen.",
				hundredText:"Du kannst qualitativ außergewöhnlichen Schmuck herstellen (+20% Qualität) (0,011% Chance) und ihm einen Namen geben",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Jewelry.png",
				disabledImageSrc:"images/Jewelry_u.png",
				value:0
			};
var forging = {
				idName: "forging", 
				displayName: "Schmieden", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der hergestellten Waffen: ",
				zeroText:"Du kannst Haushaltsgegenstände herstellen",
				thirtyText:"Du kannst Waffen aus Eisen herstellen",
				sixtyText:"Du kannst Waffen aus Stahl herstellen",
				ninetyText:"Du kannst außergewöhnliche Waffen (+20% Qualität) und Waffen aus Vostaskusstahl (0,01% Erfolgsaussicht) herstellen, diesen kannst du einen Namen geben.",
				hundredText:"Du kannst qualitativ außergewöhnliche Waffen herstellen (+20% Qualität) (0,011% Erfolgsaussicht) und ihnen einen Namen geben.",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Forging.png",
				disabledImageSrc:"images/Forging_u.png",
				value:0
			};
var armorsmithing = {
				idName: "armorsmithing", 
				displayName: "Rüstungsschmieden", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der produzierten Rüstung. ",
				zeroText:"Du kannst leichte Rüstungen herstellen",
				thirtyText:"Du kannst Pferderüstungen herstellen",
				sixtyText:"Du kannst normale Rüstungen herstellen. Du hast die Chance einen Bauplan für schwere Rüstungen zu entwickeln.",
				ninetyText:"Du kannst schwere Rüstungen herstellen. Du hast die Chance einen Bauplan für edle Rüstungen zu entwickeln. Du hast eine geringe Erfolgsaussicht eine außergewöhnliche Rüstung herzustellen (+20% Qualität und eigener Namen).",
				hundredText:"Du kannst edle Rüstungen herstellen",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Armorsmithing.png",
				disabledImageSrc:"images/Armorsmithing_u.png",
				value:0
			};

//Nature's Lore Tree
var naturesLore = {
				idName: "naturesLore", 
				displayName: "Naturkunde", 
				allText:"Die Punktzahl bestimmt die Geschwindigkeit beim Sammeln und die maximale Qualität der essbaren Wurzeln und brauchbaren Fasern. Außerdem bestimmt sie die maximale Qualität der gesammelten Kräuter. ",
				zeroText:"Du kannst essbare Kräuter und brauchbare Fasern auf einer belegten Kachel finden und sammeln.<br><br>Du kannst Beeren und Pilze (nützlich als Nahrungsmittel und Kochzutat) aufspüren und sammeln. Auch kannst du herkömmliche Kräuter sammeln, jedoch mit einem Qualitätsverlust.<br><br>Du kannst Bäume untersuchen und Äste von ihnen sammeln.",
				thirtyText:"Du kannst gewöhnliche Kräuter auf der aktuellen Kachel und Zutaten in Kadavern finden.<br><br>Du kannst gewöhnliche Kräuter (mit einer Qualität bis 30) sammeln.",
				sixtyText:"Du kannst frische Kräuter auf der aktuellen Kachel und herkömmliche Kräuter in einem Radius von zwei Kacheln finden.<br><br>Du kannst frische Kräuter (mit einer Qualität bis zu 60) sammeln.",
				ninetyText:"Du kannst unberührte Kräuter auf der aktuellen Kachel, frische Kräuter in einem Radius von zwei und gewöhnliche Kräuter in einem Radius von vier Kacheln finden.<br><br>Du kannst unberührte Kräuter (mit einer Qualität bis 100) sammeln.",
				hundredText:"Du kannst unberührte und frische Kräuter in einem Radius von zwei und gewöhnliche Kräuter in einem Radius von fünf Kacheln finden. Dauerhafter Bonus von +5 Glück während des Sammelns.",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Nature's_Lore.png",
				disabledImageSrc:"images/Nature's_Lore_u.png",
				value:0
			};
var herbalism = {
				idName: "herbalism", 
				displayName: "Kräuterkunde", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der produzierten Zubereitungen. ",
				zeroText:"Du kannst Zubereitungen mit Einzeleffekt herstellen (maximal 2 Zutaten)",
				thirtyText:"Du kannst Zubereitungen mit Einzeleffekt herstellen (maximal 3 Zutaten)",
				sixtyText:"Du kannst Naphta, Aroma und Flussmittel herstellen.<br><br>Du kannst einen Kräutergarten mit Kräutern bepflanzen und abernten.",
				ninetyText:"Du kannst Zubereitungen mit Doppeleffekt herstellen (maximal 3 Zutaten)",
				hundredText:"Dauerhafter Bonus von +5 Glück während der Herstellung von Zubereitugen",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Herbalism.png",
				disabledImageSrc:"images/Herbalism_u.png",
				value:0
			};
var farming = {
				idName: "farming", 
				displayName: "Ackerbau", 
				allText:"Die Punktzahl bestimmt die Geschwindigkeit von Arbeiten auf dem Acker",
				zeroText:"Erlaubt es dir Land zu bestellen und einfaches Saatgut zu sammeln",
				thirtyText:"Du kannst Weizen, Erbsen, Zwiebeln, Karotten und Flachs säen.<br><br>Du kannst alle möglichen Sorten von Feldfrüchten ernten",
				sixtyText:"Du kannst Kohl, Wein und Kartoffeln säen.<br><br>Du kannst Apfel- und Maulbeerbäume anpflanzen",
				ninetyText:"Du kannst Ackerboden düngen",
				hundredText:"Dauerhafter Bonus von +5 Glück während der Arbeit auf dem Acker",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Farming.png",
				disabledImageSrc:"images/Farming_u.png",
				value:0
			};
var healing = {
				idName: "healing", 
				displayName: "Heilen", 
				allText:"Die Punktzahl bestimmt den maximalen Anteil in % von Lebenspunkten, der geheilt werden kann",
				zeroText:"Du kannst anderen Spielern helfen, schneller wieder zu Bewusstsein zu kommen.<br><br>Du kannst heilen.",
				thirtyText:"Du kannst Wunden an Armen und Beinen heilen",
				sixtyText:"Du kannst gebrochene Arme und Beine heilen",
				ninetyText:"Du kannst an allen Körperregionen operieren, Wunden verarzten und Brüche richten",
				hundredText:"Dauerhafter Bonus von +5 Glück während des Heilens",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Healing.png",
				disabledImageSrc:"images/Healing_u.png",
				value:0
			};
var forestry = {
				idName: "forestry", 
				displayName: "Forstwesen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der gesammelten Stecklinge und gepflanzten Bäume",
				zeroText:"Du kannst Stecklinge von Bäumen sammeln.",
				thirtyText:"Du kannst Weichholzbäume pflanzen (Tannen und Kiefern und Haselnuss)",
				sixtyText:"Du kannst kleine Hartholzbäume pflanzen (Birken und Espen)",
				ninetyText:"Du kannst Hartholzbäume pflanzen (Wacholder, Ulmen, Eichen und Ahornbäume)",
				hundredText:"Dauerhafter Bonus von +5 Glück während der Ausübung von Forstwirtschaftsfertigkeiten",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Forestry.png",
				disabledImageSrc:"images/Forestry_u.png",
				value:0
			};
var advancedFarming = {
				idName: "advancedFarming", 
				displayName: "Landwirtschaft", 
				allText:"Qualität der hergestellten Gegenstände",
				zeroText:"Du kannst Mehl herstellen",
				thirtyText:"Du kannst Honig gewinnen",
				sixtyText:"Du kannst einen Pflug benutzen",
				ninetyText:"Du kannst Seidefilamente extrahieren.<br><br>Du kannst den Mühlstein in Bewegung setzen.",
				hundredText:"Die hergestellten Gegenstände haben die maximale Qualität",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Advanced_Farming.png",
				disabledImageSrc:"images/Advanced_Farming_u.png",
				value:0
			};
var alchemy = {
				idName: "alchemy", 
				displayName: "Alchemie", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der hergestellten Cocktails",
				zeroText:"Du kannst Cocktails mit Doppeleffekt aus drei Zutaten brauen",
				thirtyText:"Du kannst Cocktails mit Doppeleffekt brauen (1 Katalysator)",
				sixtyText:"Du kannst Cocktails mit Doppeleffekt brauen (1 Katalysator) und explosives Naphtha (mit einer Qualität von > 60), Flussmittel und Aroma herstellen",
				ninetyText:"Du kannst jegliche Art von Cocktails mit jeglicher Art von Zutaten und Katalysatoren brauen",
				hundredText:"Du kannst versuchen, Eisen in Gold umzuwandeln (1 Klumpen pro Tag; Erfolgschance:1%)",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Alchemy.png",
				disabledImageSrc:"images/Alchemy_u.png",
				value:0
			};
var brewing = {
				idName: "brewing", 
				displayName: "Brauen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität des produzierten Alkohols. ",
				zeroText:"Du kannst Cider brauen",
				thirtyText:"Du kannst Wein herstellen",
				sixtyText:"Du kannst Met brauen",
				ninetyText:"Du kannst Bier brauen",
				hundredText:"Du kannst außergewöhnlichen Alkohol (+20% Qualität), (0,01% Erfolgsaussicht) herstellen, diesem kannst du einen Namen geben.",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Brewing.png",
				disabledImageSrc:"images/Brewing_u.png",
				value:0
			};
var cooking = {
				idName: "cooking", 
				displayName: "Kochen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der produzierten Lebensmittel und Getränke",
				zeroText:"Du kannst nach einfachen Rezepten kochen (1-2 Zutaten)",
				thirtyText:"Du kannst nach komplizierten Rezepten kochen (3 Zutaten)",
				sixtyText:"Du kannst brauen und Wein herstellen.<br><br>Du kannst nach Expertenrezepten kochen (4 Zutaten).<br><br>Du kannst die Gerichte würzen.",
				ninetyText:"Du kannst nach Rezepten für Delikatessen kochen (5 Zutaten)",
				hundredText:"Dauerhafter Bonus von +5 Glück während des Würzens von Lebensmitteln",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Cooking.png",
				disabledImageSrc:"images/Cooking_u.png",
				value:0
			};

//Hunting Tree
var hunting = {
				idName: "hunting", 
				displayName: "Jagen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der erhaltenen Tiermaterialien ",
				zeroText:"Du kannst fischen, Tierkadaver häuten, Schlingenfallen aufstellen sowie kleine Tiere aufspüren.",
				thirtyText:"Du kannst Tierfallen benutzen",
				sixtyText:"Du kannst große Tiere aufspüren",
				ninetyText:"Du kannst den Tierkadavern alchemistische Zutaten abgewinnen",
				hundredText:"Dauerhafter Bonus von +5 Glück während des Angelns",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/Fishing_Hunting.png",
				disabledImageSrc:"images/Fishing_Hunting_u.png",
				value:0
			};
var animalLore = {
				idName: "animalLore", 
				displayName: "Viehzucht", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Tiere nach erfolgreichem Zähmen oder erfolgreicher Zucht",
				zeroText:"Du kannst kleine Tiere in Hühnerställen züchten.<br><br>Du kannst Hühnerställe, Scheunen und Ställe säubern",
				thirtyText:"Du kannst Tiere in Scheunen züchten",
				sixtyText:"Du kannst größere, zähmbare Tiere zähmen und sie in kleinen Ställen züchten",
				ninetyText:"Du kannst Tiere in großen Ställen züchten",
				hundredText:"Dauerhafter Bonus von +5 Glück während des Zähmens",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/Animal_Lore.png",
				disabledImageSrc:"images/Animal_Lore_u.png",
				value:0
			};
var procuration = {
				idName: "procuration", 
				displayName: "Tierverarbeitung", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der hergestellten Gegenstände",
				zeroText:"Du kannst die Tiere in Hühnerställen, Scheunen und Ställen schlachten.<br><br>Du kannst Knochenkleber herstellen.",
				thirtyText:"Du kannst Seile drehen und Leinen- und Wollstoff weben",
				sixtyText:"Du kannst Häute trocknen und Leder gerben",
				ninetyText:"Du kannst Seide von Seidefilamenten herstellen",
				hundredText:"Dauerhafter Bonus von +5 Glück während der Tierverarbeitung",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/Procuration.png",
				disabledImageSrc:"images/Procuration_u.png",
				value:0
			};
var warHorseHandling = {
				idName: "warHorseHandling", 
				displayName: "Schlachtrosstraining", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der trainierten Schlachtrösser (Qualität eines Schlachtrosses beeinflusst seine Trefferpunkte, Galopp- und Wendegeschwindigkeit). ",
				zeroText:"Du kannst ein Schlachtross trainieren (mit Ausnahme der schweren und robusten Arten)",
				thirtyText:"Du hast die Möglichkeit ein abgehärtetes Schlachtross zu trainieren.",
				sixtyText:"Du hast die Möglichkeit, ein schweres Schlachtross zu trainieren",
				ninetyText:"Du hast die Möglichkeit, ein energisches Schlachtross zu trainieren",
				hundredText:"Du hast die Möglichkeit, ein edles Schlachtross zu trainieren",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/War_Horse_Training.png",
				disabledImageSrc:"images/War_Horse_Training_u.png",
				value:0
			};
var tailoring = {
				idName: "tailoring", 
				displayName: "Schneidern", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der hergestellten Kleidung",
				zeroText:"Du kannst leichte gepolsterte Rüstungen und Lederrüstungen herstellen.",
				thirtyText:"Du kannst normale gepolsterte Rüstungen herstellen.",
				sixtyText:"Du kannst normale Lederrüstungen herstellen. Du hast die Chance einen Bauplan für schwere Lederrüstungen zu entwickeln.",
				ninetyText:"Du kannst schwere gepolsterte Rüstungen und schwere Lederrüstungen herstellen. Du hast die Chance einen Bauplan für edle Rüstungen zu entwickeln. Du hast eine geringe Erfolgsaussicht eine außergewöhnliche Rüstung herzustellen (+20% Qualität und eigener Namen).",
				hundredText:"Du kannst edle Rüstungen und verzierte Kleider herstellen",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/Tailoring.png",
				disabledImageSrc:"images/Tailoring_u.png",
				value:0
			};


//Combat//
//Chivalry Tree
var chivalry = {
				idName: "chivalry", 
				displayName: "Rittertum", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Milizwaffen, die effektiv genutzt werden können.<br><br>Maximale Qualität der einhändigen Äxte und Streitkolben, die effektiv genutzt werden können.<br><br>Maximale Qualität der gepolsterten Rüstung, die effektiv genutzt werden kann.",
				zeroText:"Du kannst leichte gepolsterte Rüstungen tragen.<br><br>Du kannst einhändige Äxte und Streitkolben benutzen.<br><br>Du kannst die Milizwaffen (Heugabeln, Stäbe, Spitzhacken, Schaufeln und jedes andere Handwerkzeug) und die Fähigkeit „Flucht!“ benutzen (für kurze Zeit kannst du keine Waffen benutzen, doch deine Geschwindigkeit erhöht sich).<br><br>Von der linken Taille ziehen - Von der rechten Taille ziehen - Vom linken Rücken ziehen - Vom rechten Rücken ziehen - Ergib dich der Gnade deines Feindes - „Flucht!“ - Du kannst Feinden den ehrenvollen Tod bringen",
				thirtyText:"Rüstungen sind dreimal so leicht.<br><br>Angriffe mit Milizwaffen werden schneller ausgeführt.<br><br>Angriffe mit einhändigen Axt- und Streitkolben werden schneller ausgeführt.",
				sixtyText:"Du kannst normale gepolsterte Rüstungen tragen.<br><br>Kombination „Handwerkerangriff“ (Stich – Überkopfschlag – Überkopfschlag – linker Hieb oder Stich – Überkopfschlag – Überkopfschlag – rechter Hieb).<br><br> „Schädelspalter!“ ausführen (rechter Hieb - linker Hieb - rechter Hieb - Überkopfschlag oder linker Hieb - rechter Hieb - linker Hieb - Überkopfschlag).<br><br> Diese Kombination hat keine zusätzlichen Effekte.",
				ninetyText:"Du kannst schwere gepolsterte Rüstungen tragen.<br><br>Stichangriffe mit Milizwaffen können nicht abgewehrt werden.<br><br> Du kannst den Kombinationsangriff „Klopf-Klopf!“ ausführen (Stich – Überkopfschlag – Überkopfschlag - Überkopfschlag).<br><br> Diese Kombination endet mit dem Effekt Kraftschlag.",
				hundredText:"Du kannst edle gepolsterte Rüstungen tragen.<br><br>Prahlerei",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Axe_And_Mace_Mastery.png",
				disabledImageSrc:"images/Axe_And_Mace_Mastery_u.png",
				value:0
			};
var spearMastery = {
				idName: "spearMastery", 
				displayName: "Speerbeherrschung", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Speere, die effektiv benutzt werden können",
				zeroText:"Du kannst Speere benutzen",
				thirtyText:"Piken- und Speerangriffe werden schneller ausgeführt.",
				sixtyText:"Du kannst die Kampfhaltung „Pikenwand“ ausführen.<br><br>„Pikenwand“ ist ein besonderer Pikenstichangriff, bei dem du dich nicht bewegen kannst, der jedoch gegnerische Pferde garantiert stoppt und diesen erheblichen Schaden zufügt",
				ninetyText:"Du hast bei Überkopfschlägen eine erhöhte Erfolgsaussicht, einen Reiter aus dem Sattel zu heben",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Spear_Mastery.png",
				disabledImageSrc:"images/Spear_Mastery_u.png",
				value:0
			};
var poleaxesMastery = {
				idName: "poleaxesMastery", 
				displayName: "Stangenwaffen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Stangenwaffen, die effektiv benutzt werden können",
				zeroText:"Du kannst Stangenwaffen einsetzen",
				thirtyText:"Angriffe mit Stangenwaffen werden schneller ausgeführt.",
				sixtyText:"Du kannst einen Sprungangriff ausführen",
				ninetyText:"Du hast bei Überkopfschlägen eine erhöhte Erfolgsaussicht, einen Reiter aus dem Sattel zu heben",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Poleaxes_Mastery.png",
				disabledImageSrc:"images/Poleaxes_Mastery_u.png",
				value:0
			};
var unitAndFormation = {
				idName: "unitAndFormation", 
				displayName: "Einheit und Formation", 
				allText:"Die Punktzahl bestimmt den maximalen Anteil % der Einheitenboni, die erhalten und zur Verfügung gestellt werden können",
				zeroText:"Du kannst Einheitenboni vom Anführer erhalten, wenn du in einer von ihm aufgestellten Formation bist.<br><br>Du kannst Sprachbefehle geben, um Einheitenformationen zu ändern (Mauer/Keil/Kreis) und Formationsbereiche zu erstellen.",
				thirtyText:"Du kannst den Befehl „Stellung halten!“ geben, der die Verteidigung erhöht, aber die Geschwindigkeit aller Mitglieder der Einheit verringert",
				sixtyText:"Du kannst den Befehl „Angriff!“ geben, der den von den Mitgliedern der Einheit bei Gegnern verursachten Schaden für zwanzig Sekunden erhöht.<br><br>Du kannst den maximalen Bonus von Befehlen und Formationen erhalten.",
				ninetyText:"Du kannst den Befehl „Bewegen!“ geben, um die Bewegungsgeschwindigkeit aller Mitglieder der Einheit in Reichweite zu erhöhen",
				hundredText:"Farbe des Formationsbereichs ist anders",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Unit_Formation.png",
				disabledImageSrc:"images/Unit_Formation_u.png",
				value:0
			};
var mountedFightingMastery = {
				idName: "mountedFightingMastery", 
				displayName: "Berittener Kampf", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Kavalleriewaffen, die effektiv benutzt werden können.<br><br>Bestimmt die Wahrscheinlichkeit mit der man im Sattel bleibt, wenn das Pferd steigt.",
				zeroText:"Du kannst einhändige Waffen zu Pferde einsetzen.<br><br>Du kannst Schlachtrösser reiten, bis auf die schweren und robusten Pferde",
				thirtyText:"Die Kavallerieangriffe werden schneller ausgeführt.<br><br>Du kannst Schlachtrösser reiten, bis auf das schwere Schlachtross.",
				sixtyText:"Geringere Chance während der Schlacht aus dem Sattel zu fallen",
				ninetyText:"Eiserner Griff – für kurze Zeit wird niemand in der Lage sein, dich aus dem Sattel zu werfen",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Mounted_Fighting_Mastery.png",
				disabledImageSrc:"images/Mounted_Fighting_Mastery_u.png",
				value:0
			};
var lancing = {
				idName: "lancing", 
				displayName: "Lanzenreiterei", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Lanzen, die effektiv benutzt werden können",
				zeroText:"Du kannst zu Pferde Lanzen einsetzen",
				thirtyText:"Die Lanzenangriffe werden schneller ausgeführt",
				sixtyText:"Du kannst mit der Lanze besser zielen",
				ninetyText:"Du kannst die Lanze länger anlegen",
				hundredText:"Du kannst verzierte Lanzen benutzen",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Lancing.png",
				disabledImageSrc:"images/Lancing_u.png",
				value:0
			};
var heavyHorseHandling = {
				idName: "heavyHorseHandling", 
				displayName: "Schlachtrossbeherrschung", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der schweren Schlachtrösser, der effektiv benutzt werden können ",
				zeroText:"Du kannst schwere Schlachtrösser reiten",
				thirtyText:"Du kannst mit einem schweren Schlachtross galoppieren",
				sixtyText:"Erhöht die Warscheinlichkeit, dass die gegnerische Pike abrutscht, ohne Pferd oder Reiter zu verletzen",
				ninetyText:"Ein schweres Pferd, das länger als fünf Sekunden galoppiert, wird mit Ausnahme der Pikenwand und Befestigungsanlagen allem gegenüber unempfindlich.<br><br>Es kann einen Spieler nach dem anderen niedertrampeln, ohne dabei an Geschwindigkeit zu verlieren.<br><br>Der Effekt verschwindet, wenn das Pferd aufhört zu galoppieren.",
				hundredText:"Der Boden um ein galoppierendes schweres Schlachtross bebt",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Heavy_Horse_Handling.png",
				disabledImageSrc:"images/Heavy_Horse_Handling_u.png",
				value:0
			};
var bladesMastery = {
				idName: "bladesMastery", 
				displayName: "Schwert", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der einhändigen Schwerter, die effektiv benutzt werden können",
				zeroText:"Du kannst einhändige Klingenwaffen benutzen",
				thirtyText:"Angriffe mit einhändigen Klingenwaffen werden schneller ausgeführt.",
				sixtyText:"Du kannst den Kombinationsangriff „Tausend Schnitte!“ ausführen (rechter Hieb – linker Hieb – rechter Hieb – Stich oder linker Hieb – rechter Hieb – linker Hieb – Stich).<br><br> Bei diesem Kombinationsangriff besteht die Chance, deinem Gegner eine blutende Wunde zuzufügen.",
				ninetyText:"Du kannst den Kombinationsangriff „Hagel von Schlägen!“ ausführen (rechter Hieb – Stich – linker Hieb – Überkopfschlag oder linker Hieb – Stich – rechter Hieb – Überkopfschlag).<br><br> Dieser Kombinationsangriff endet mit dem Effekt:Kraftschlag.",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/1H_Blade_Mastery.png",
				disabledImageSrc:"images/1H_Blade_Mastery_u.png",
				value:0
			};
var shieldMastery = {
				idName: "shieldMastery", 
				displayName: "Schildbeherrschung", 
				allText:"Die Punktzahl bestimmt die Menge an Haltbarkeit die nach dem Blocken eines Angriffs verloren geht.",
				zeroText:"Du kannst Schilde ausrüsten und damit Angriffe blocken",
				thirtyText:"Der Schaden am Schild bei erfolgreichem Blocken wird reduziert",
				sixtyText:"Du kannst einen Schildschlag ausführen",
				ninetyText:"Du kannst während des Blockens sprinten",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Shield_Mastery.png",
				disabledImageSrc:"images/Shield_Mastery_u.png",
				value:0
			};
var piercingMastery = {
				idName: "piercingMastery", 
				displayName: "Wuchtwaffen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der einhändigen Stichwaffen, die effektiv benutzt werden können",
				zeroText:"Du kannst einhändige Stichwaffen benutzen",
				thirtyText:"Angriffe mit einhändigen Stichwaffen werden schneller ausgeführt.",
				sixtyText:"Du kannst den Kombinationsangriff „Punkt der Verwundbarkeit!“ ausführen (Stich – Überkopfschlag – Überkopfschlag – linker Hieb oder Stich – Überkopfschlag – Überkopfschlag – rechter Hieb).<br><br> Diese Kombination hat keine zusätzlichen Effekte.",
				ninetyText:"Du kannst den Kombinationsangriff „Noch ein Loch!“ ausführen (Überkopfschlag – rechter Hieb – linker Hieb – Überkopfschlag oder Überkopfschlag – linker Hieb – rechter Hieb – Überkopfschlag).<br><br> Diese Kombination endet mit dem Effekt Kraftschlag.",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Piercing_Mastery.png",
				disabledImageSrc:"images/Piercing_Mastery_u.png",
				value:0
			};

//Indepedant Tree
var chainmailArmors = {
				idName: "chainmailArmors", 
				displayName: "Kettenrüstungen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Rüstung, die effektiv benutzt werden kann",
				zeroText:"Du kannst leichte Kettenrüstungen tragen",
				thirtyText:"Dreifach reduzierte Belastung durch Rüstungen",
				sixtyText:"Du kannst normale Kettenrüstungen tragen",
				ninetyText:"Du kannst schwere Kettenrüstungen tragen",
				hundredText:"Du kannst edle Kettenrüstungen tragen",
				skillType:"Combat",
				treeName:"chainmailArmorsTree",
				imageSrc:"images/Chain_Mail_Armor.png",
				disabledImageSrc:"images/Chain_Mail_Armor_u.png",
				value:0
			};
var scaleArmors = {
				idName: "scaleArmors", 
				displayName: "Schuppenrüstungen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Rüstung, die effektiv genutzt werden kann ",
				zeroText:"Du kannst leichte Schuppenrüstungen tragen",
				thirtyText:"Rüstungen sind dreimal so leicht",
				sixtyText:"Du kannst normale Schuppenrüstungen tragen",
				ninetyText:"Du kannst Schwere Schuppenrüstung tragen",
				hundredText:"Du kannst edle Schuppenrüstungen tragen",
				skillType:"Combat",
				treeName:"scaleArmorsTree",
				imageSrc:"images/Scale_Armors.png",
				disabledImageSrc:"images/Scale_Armors_u.png",
				value:0
			};
var plateArmors = {
				idName: "plateArmors", 
				displayName: "Plattenrüstungen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Rüstung, die effektiv benutzt werden kann",
				zeroText:"Du kannst leichte Plattenrüstungen tragen",
				thirtyText:"Rüstungen sind dreimal so leicht",
				sixtyText:"Du kannst normale Plattenrüstungen tragen",
				ninetyText:"Du kannst schwere Plattenrüstungen tragen",
				hundredText:"Du kannst edle Plattenrüstungen tragen",
				skillType:"Combat",
				treeName:"plateArmorsTree",
				imageSrc:"images/Full_Plate_Armors.png",
				disabledImageSrc:"images/Full_Plate_Armors_u.png",
				value:0
			};

//Warrior Tree
var warrior = {
				idName: "warrior", 
				displayName: "Krieger", 
				allText:"Die Punktzahl bestimmt die maximalen Schaden, der mit unbewaffneten Attacken zugefügt werden kann.<br><br>Maximale Qualität von Wurfwaffen, welche effektiv benutzt werden können.<br><br>Maximale Qualität von Lederrüstungen, welche effektiv getragen werden können",
				zeroText:"Ermöglicht unbewaffnet anzugreifen und Stöße von Stangenwaffen zu parieren.<br><br>Du kannst eine Schleuder benutzen.<br><br>Du kannst eine leichte Lederrüstung tragen",
				thirtyText:"Lederrüstungen sind dreimal so leicht.<br><br>Du kannst Wurfmesser benutzen.<br><br>Unbewaffnete Angriffe und das Abwehren von Stangenwaffen wird schneller ausgeführt.",
				sixtyText:"Du kannst normale Lederrüstungen tragen.<br><br>du kannst die Framea und die Franziska benutzen.<br><br>Entwaffnung – nach einer erfolgreichen Abwehr findest du die Waffe deines Gegners vielleicht in deinem Inventar",
				ninetyText:"Du kannst schwere Lederrüstungen tragen.<br><br>Du kannst Naphthagranaten werfen.<br><br>Bewusstlosigkeit! - Chance Jemanden bewusstlos zu schlagen, wenn eine unbewaffnete Attacke den Kopf trifft",
				hundredText:"Du kannst edle Lederrüstungen tragen.<br><br>Du kannst Feuerwerksladungen werfen.<br><br>Prahlerei",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Unarmed_Fight.png",
				disabledImageSrc:"images/Unarmed_Fight_u.png",
				value:0
			};
var demolition = {
				idName: "demolition", 
				displayName: "Belagerung", 
				allText:"Die Punktzahl bestimmt die Effektivität von zerstörungsbezogenen Aktivitäten",
				zeroText:"Du kannst Fackeln als Nahkampfwaffe für Belagerungen verwenden.<br><br>Du kannst einen Tribok bedienen.",
				thirtyText:"Angriffe mit Belagerungswaffen werden schneller ausgeführt.",
				sixtyText:"Wenn du Belagerungswaffen benutzt, sind diese effektiver",
				ninetyText:"Du kannst einen Tribok bedienen",
				hundredText:"Du kannst mit Kühen schießen (nur zum Spaß)",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Demolition.png",
				disabledImageSrc:"images/Demolition_u.png",
				value:0
			};
var twoHandedAxes = {
				idName: "twoHandedAxes", 
				displayName: "Zweihandaxt", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der zweihändigen Äxte, die effektiv benutzt werden können",
				zeroText:"Du kannst zweihändige Äxte benutzen",
				thirtyText:"Angriffe mit zweihändigen Äxten werden schneller ausgeführt.",
				sixtyText:"Du kannst einen Sprungangriff ausführen",
				ninetyText:"Du kannst den Kombinationsangriff „Hinrichtung!“ ausführen (linker Hieb – rechter Hieb – Überkopfschlag – rechter Hieb oder rechter Hieb – linker Hieb – Überkopfschlag – linker Hieb).<br><br> Diese Kombination kann mit etwas Glück eine Wunde verursachen.<br><br>Wird dein Hieb durch einen Schild abgewehrt, wird dieser gravierend beschädigt.",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/2H_Axes_Mastery.png",
				disabledImageSrc:"images/2H_Axes_Mastery_u.png",
				value:0
			};
var twoHandedBlades = {
				idName: "twoHandedBlades", 
				displayName: "Zweihandschwert", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der zweihändigen Klingenwaffen, die effektiv benutzt werden können",
				zeroText:"Du kannst zweihändige Klingenwaffen benutzen",
				thirtyText:"Angriffe mit zweihändigen Schwertern werden schneller ausgeführt",
				sixtyText:"Du kannst den Kombinationsangriff „Überwältigende Kraft!“ ausführen (Stich – rechter Hieb – linker Hieb – Überkopfschlag oder Stich – linker Hieb – rechter Hieb – Überkopfschlag).<br><br>Diese Kombination hat keine zusätzlichen Effekte.",
				ninetyText:"Du kannst den Kombinationsangriff „Zerstückeln!“ ausführen (linker Hieb – rechter Hieb – linker Hieb – rechter Hieb oder rechter Hieb – linker Hieb – rechter Hieb – linker Hieb).<br><br>Diese Kombination endet mit dem Effekt Kraftschlag.",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/2H_Blade_Mastery.png",
				disabledImageSrc:"images/2H_Blade_Mastery_u.png",
				value:0
			};
var twoHandedBlunt = {
				idName: "twoHandedBlunt", 
				displayName: "Zweihandhammer", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der zweihändigen stumpfen Waffen, die effektiv benutzt werden können",
				zeroText:"Du kannst zweihändige stumpfe Waffen benutzen",
				thirtyText:"Angriffe mit zweihändigen stumpfen Waffen werden schneller ausgeführt.",
				sixtyText:"Du kannst den Kombinationsangriff „Zersplittern!“ ausführen (Stich – rechter Hieb – linker Hieb – Überkopfschlag oder Stich – linker Hieb – rechter Hieb – Überkopfschlag).<br><br> Diese Kombination kann einen Knochenbruch zufügen.)",
				ninetyText:"Du kannst den Kombinationsangriff „Knie vor mir!“ ausführen (rechter Hieb – linker Hieb – Überkopfschlag – Überkopfschlag oder linker Hieb – rechter Hieb – Überkopfschlag – Überkopfschlag).<br><br> Diese Kombination kann deinen Gegner zu Boden werfen.",
				hundredText:"Prahlerei",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/2H_Blunt_Mastery.png",
				disabledImageSrc:"images/2H_Blunt_Mastery_u.png",
				value:0
			};
var warCries = {
				idName: "warCries", 
				displayName: "Schlachtrufe", 
				allText:"Kraft von Schlachtrufen",
				zeroText:"Spott  (verbal) – ein paar gut gewählte Worte über die Mutter deines Gegners (erhöht Stärke).",
				thirtyText:"„Feigling!“ – der Gegner bekommt einen Geschwindigkeitsbonus, doch es besteht die Chance, dass er stolpert und fällt.<br><br>Zitternde Hände (es ist schwerer mit Distanzwaffen zu treffen)",
				sixtyText:"Arghhhhhh! – ein Versuch, alle Verlangsamungs- und Gifteffekte von dir zu entfernen.",
				ninetyText:"Du bist mein! – der gewählte Gegner wird verwundbarer und deine Geschwindigkeit steigt etwas.",
				hundredText:"Ordentlicher Spott mit Animation",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/War_Cries.png",
				disabledImageSrc:"images/War_Cries_u.png",
				value:0
			};
var crossbows = {
				idName: "crossbows", 
				displayName: "Armbrust", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Armbrüste, die effektiv benutzt werden können",
				zeroText:"Du kannst Armbrüste benutzen",
				thirtyText:"Schnelleres Nachladen, besseres Zielen",
				sixtyText:"Mannstoppwirkung – der nächste Schuss mit der Armbrust wird den Gegner für eine  Sekunde in einen Schockzustand versetzen",
				ninetyText:"Durchbohrender Bolzen – der nächste Schuss mit der Armbrust kann bis zu drei Gegner treffen, falls sie hintereinander stehen",
				hundredText:"Du kannst Feuerwerksbolzen verwenden",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Crossbows_Mastery.png",
				disabledImageSrc:"images/Crossbows_Mastery_u.png",
				value:0
			};
var bows = {
				idName: "bows", 
				displayName: "Bogen", 
				allText:"Die Punktzahl bestimmt die maximale Qualität von Bögen, die effektiv benutzt werden können",
				zeroText:"Du kannst Bögen benutzen",
				thirtyText:"Schnelleres Nachladen, besseres Zielen",
				sixtyText:"Pfeil ins Knie! Der nächste Pfeil verlangsamt den Gegner um 10%.<br><br>Wenn der Pfeil das Bein trifft, wird der Gegner um 50% verlangsamt.",
				ninetyText:"Salve! – Schieß bis zu 10 Pfeile unmittelbar nacheinander auf ein gewähltes Gebiet",
				hundredText:"Du kannst Feuerwerkspfeile verwenden",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Bows_Mastery.png",
				disabledImageSrc:"images/Bows_Mastery_u.png",
				value:0
			};
var combatPrep = {
				idName: "combatPrep", 
				displayName: "Kampfvorbereitung", 
				allText:"Die Punktzahl bestimmt die Geschwindigkeit mit der Kampfvorbereitungen platziert werden",
				zeroText:"Pfeilreserve! – verkürzt die Nachladezeit, wenn der Spieler in der Nähe ist",
				thirtyText:"Du kannst eine Pavese als Deckung verwenden und sie danach wieder im Inventar verstauen",
				sixtyText:"Du kannst einen Spanischen Reiter aufstellen – wenn Pferde hinein galoppieren, erleiden sie Schaden oder sterben",
				ninetyText:"Du kannst ein kleines Belagerungszelt aufstellen (5 Bindungsplätze)",
				hundredText:"Du kannst ein verziertes Belagerungszelt aufstellen (5 Bindungsplätze)",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Combat_Preparation.png",
				disabledImageSrc:"images/Combat_Preparation_u.png",
				value:0
			};

//Independant 2 Tree
var equipmentMaintain = {
				idName: "equipmentMaintain", 
				displayName: "Ausrüstungswartung", 
				allText:"Die Punktzahl bestimmt die Menge an Haltbarkeitspunkten, die durch Ausrüstungswartung wiederhergestellt werden können",
				zeroText:"Du kannst Aktionen zur Ausrüstungswartung von Waffen ausführen, allerdings verlieren diese dann an maximaler Haltbarkeit",
				thirtyText:"Du kannst Aktionen zur Ausrüstungswartung von Rüstungen und Schilden ausführen, allerdings verlieren diese dann an maximaler Haltbarkeit",
				sixtyText:"Du hast die Chance Projektile wiederzufinden, die ihr Ziel verfehlt haben:(20%)",
				ninetyText:"Du kannst die Klingen von ausgerüsteten einhändigen Waffen mit Gift bestreichen",
				hundredText:"Du hast die Chance Projektile wiederzufinden, die ihr Ziel verfehlt haben:(22%)",
				skillType:"Combat",
				treeName:"equipmentMaintainTree",
				imageSrc:"images/Equipment_Maintain.png",
				disabledImageSrc:"images/Equipment_Maintain_u.png",
				value:0
			};
var battleSurvival = {
				idName: "battleSurvival", 
				displayName: "Erste Hilfe", 
				allText:"Die Punktzahl bestimmt die Dauer der Wundbehandlung.<br><br>Kritischer Schaden der Lebenspunkte wird zu Schaden des Bewustseins umgewandelt (% der maximalen Linderung) ",
				zeroText:"Du kannst Wunden an Armen und Beinen verbinden",
				thirtyText:"Du kannst blutende Wunden am Oberkörper verbinden",
				sixtyText:"5% Chance, den Anteil an kritischem Schaden der Lebenspunkte, der in Schaden des Bewusstseins umgewandelt wurde, zu verdoppeln (von Glück beeinflusst)",
				ninetyText:"Du kannst Wunden am Kopf verbinden.<br><br>10% Chance, dass der Anteil an kritischem Schaden der Lebenspunkte, in Schaden des Bewusstseins umzuwandeln, verdoppelt wird (von Glück beeinflusst)",
				hundredText:"11% Chance, dass der Anteil an kritischem Schaden der Lebenspunkte, der in Schaden des Bewusstseins umzuwandeln, verdoppelt wird (von Glück beeinflusst)",
				skillType:"Combat",
				treeName:"battleSurvivalTree",
				imageSrc:"images/First_Aid.png",
				disabledImageSrc:"images/First_Aid_u.png",
				value:0
			};
var drill = {
				idName: "drill", 
				displayName: "Exerzieren", 
				allText:"Die Punktzahl bestimmt die maximale Fertigkeitsstufe, die Rekruten gegeben werden kann",
				zeroText:"Du kannst Fertigkeiten Stufe 1 trainieren",
				thirtyText:"Du kannst Fertigkeiten Stufe 2 und Grundfertigkeiten trainieren",
				sixtyText:"Du kannst Fertigkeiten Stufe 3 und 4 trainieren",
				ninetyText:"Du kannst Fertigkeiten Stufe 5 trainieren",
				hundredText:"Dauerhafter Bonus von +5 Glück beim Trainieren",
				skillType:"Combat",
				treeName:"drillTree",
				imageSrc:"images/Drill.png",
				disabledImageSrc:"images/Drill_u.png",
				value:0
			};


//Minor Skills//
var movement = {
				idName: "movement", 
				displayName: "Bewegung", 
				allText:"Die Punktzahl bestimmt die maximale Geschwindigkeit % beim Tragen",
				zeroText:"-",
				thirtyText:"-",
				sixtyText:"-",
				ninetyText:"-",
				hundredText:"-",
				skillType:"Minor",
				treeName:"movementTree",
				imageSrc:"images/Lifting.png",
				disabledImageSrc:"images/Lifting_u.png",
				value:0
			};
var generalActions = {
				idName: "generalActions", 
				displayName: "Allgemeine Tätigkeiten", 
				allText:"Die Punktzahl bestimmt die Effizienz des Ausruhens",
				zeroText:"Du kannst verschiedene allgemeine Aktionen ausführen.<br><br>Du kannst dich ordentlich ausruhen, um deine Kondition und dein Bewusstsein wiederherzustellen – Emotionen: ",
				thirtyText:"-",
				sixtyText:"-",
				ninetyText:"-",
				hundredText:"-",
				skillType:"Minor",
				treeName:"generalActionsTree",
				imageSrc:"images/general_moves.png",
				disabledImageSrc:"images/general_moves_u.png",
				value:0
			};
var horsebackRiding = {
				idName: "horsebackRiding", 
				displayName: "Reiten", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der gewöhnlichen Pferde, die effektiv geritten werden können",
				zeroText:"-",
				thirtyText:"-",
				sixtyText:"-",
				ninetyText:"-",
				hundredText:"-",
				skillType:"Minor",
				treeName:"horsebackRidingTree",
				imageSrc:"images/Horseback_Riding.png",
				disabledImageSrc:"images/Horseback_Riding_u.png",
				value:0
			};
var swimming = {
				idName: "swimming", 
				displayName: "Schwimmen", 
				allText:"Je mehr Punkte du hast, desto geringer ist der Ausdauerverlust beim Schwimmen",
				zeroText:"-",
				thirtyText:"-",
				sixtyText:"-",
				ninetyText:"-",
				hundredText:"-",
				skillType:"Minor",
				treeName:"swimmingTree",
				imageSrc:"images/Artisan.png",
				disabledImageSrc:"images/Artisan_u.png",
				value:0
			};
var authority = {
				idName: "authority", 
				displayName: "Autorität", 
				allText:"Can claim land ",
				zeroText:"Can erect a Guild Monument.<br><br>Can mark trespassers as criminals",
				thirtyText:"-",
				sixtyText:"-",
				ninetyText:"-",
				hundredText:"-",
				skillType:"Minor",
				treeName:"authorityTree",
				imageSrc:"images/Authority.png",
				disabledImageSrc:"images/Authority_u.png",
				value:0
			};
var piety = {
				idName: "piety", 
				displayName: "Frömmigkeit", 
				allText:"Die Punktzahl bestimmt die Wahrscheinlichkeit, dass deine Gebete von Gott erhört werden ",
				zeroText:"Du kannst für eine sichere Heimreise beten",
				thirtyText:"Du kannst Gott lobpreisen (Verbesserung der Gesinnung, kann ein Mal täglich benutzt werden)",
				sixtyText:"Du kannst andere mit „Gottes Gnade“ segnen, um ihre Todesstrafe während Spieler-gegen-Spieler-Ereignissen zu entfernen (Belagerungen/Schlachten/Stunde der Abrechnung) ",
				ninetyText:"Du kannst andere mit „Gottes Liebe“ segnen, die ihr Glück um 3 erhöht",
				hundredText:"Segen durch Gottes Liebe erhöht Glück um 3,5",
				skillType:"Minor",
				treeName:"pietyTree",
				imageSrc:"images/Piety.png",
				disabledImageSrc:"images/Piety_u.png",
				value:0
			};
var mentoring = {
				idName: "mentoring", 
				displayName: "Ausbilden", 
				children: [], 
				parentNode:null, 
				allText:"Die Punktzahl bestimmt die maximale Fertigkeitsstufe, die Lehrlingen gegeben werden kann ",
				zeroText:"Du kannst Fertigkeiten der Stufe 1 lehren",
				thirtyText:"Du kannst Fertigkeiten Stufe 2 und Grundfertigkeiten lehren",
				sixtyText:"Du kannst Fertigkeiten Stufe 3 und 4 lehren",
				ninetyText:"Du kannst Fertigkeiten Stufe 5 lehren",
				hundredText:"Dauerhafter Bonus von +5 Glück während des Lehrens",
				skillType:"Minor",
				treeName:"mentoringTree",
				imageSrc:"images/Mentoring.png",
				disabledImageSrc:"images/Mentoring_u.png",
				value:0
			};
var arts = {
				idName: "arts", 
				displayName: "Kunsthandwerk", 
				allText:"Die Punktzahl bestimmt die maximale Qualität der Kunstwerke ",
				zeroText:"Du kannst kleine Gemälde malen",
				thirtyText:"Du kannst eine Hirschtrophäe herstellen",
				sixtyText:"Du kannst Gemälde malen und eine Elchtrophäe herstellen",
				ninetyText:"Du kannst große Gemälde malen und eine Bärentrophäe herstellen.",
				hundredText:"Dauerhafter Bonus von +5 Glück während der Herstellung von Kunstwerken",
				skillType:"Minor",
				treeName:"artsTree",
				imageSrc:"images/Arts.png",
				disabledImageSrc:"images/Arts_u.png",
				value:0
			};
