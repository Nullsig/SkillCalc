//Build out Nodes
var artisan = {
				idName: "artisan", 
				displayName: "Artisan", 
				allText:"Terraforming speed. Tree cutting speed.", 
				zeroText:"Can raise and lower the level of terrain.<br><br>Can strip bark and cut down trees.<br><br>Can create a camp.<br><br>Can create a primitive tools.<br><br>Can hew stones for construction.", 
				thirtyText:"Can flatten the terrain.<br><br>Can uproot stumps.", 
				sixtyText:"Can cut down hardwood trees twice as fast.", 
				ninetyText:"Can find rare ingredients inside trees (1%).", 
				hundredText:"A slightly better chance of finding rare ingredients inside trees (1.5%).",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Artisan.png",
				disabledImageSrc:"images/Artisan_u.png",
				value:0
			};
var carpentry = {
				idName: "carpentry", 
				displayName: "Carpentry", 
				allText:"Maximum quality of crafted wooden items",
				zeroText:"Can hew logs.<br><br>Can craft wooden parts and small furniture.", 
				thirtyText:"Can use a workbench.", 
				sixtyText:"Can craft wooden parts of weapons.", 
				ninetyText:"Can craft large furniture.", 
				hundredText:"Can craft decorated items.",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Carpentry.png",
				disabledImageSrc:"images/Carpentry_u.png",
				value:0
			};
var construction = {
				idName: "construction", 
				displayName: "Construction", 
				allText:"Quality and durability of constructed objects",
				zeroText:"Can pave roads", 
				thirtyText:"Can construct simple wooden objects", 
				sixtyText:"Can construct simple stone objects and advanced wooden constructions", 
				ninetyText:"Can construct a variety of complex objects", 
				hundredText:"Can place boundary monuments",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Construction.png",
				disabledImageSrc:"images/Construction_u.png",
				value:0
			};
var digging = {
				idName: "digging", 
				displayName: "Digging", 
				allText:"Tunnels digging speed",
				zeroText:"Can dig tunnels", 
				thirtyText:"Can dig tunnels in different directions", 
				sixtyText:"Can reinforce mine with boards", 
				ninetyText:"Can harden mine walls (by building support beams)", 
				hundredText:"Produced beams are more durable",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Digging.png",
				disabledImageSrc:"images/Digging_u.png",
				value:0
			};
var materialsPrep = {
				idName: "materialsPrep", 
				displayName: "Materials Preparation", 
				allText:"Construction material production speed",
				zeroText:"Can craft basic clay items", 
				thirtyText:"Can make charcoal from hardwood billets", 
				sixtyText:"Can craft items from glass and use potter wheel", 
				ninetyText:"Can craft advanced clay items", 
				hundredText:"Can create city sign",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Construction_Materials_Preparation.png",
				disabledImageSrc:"images/Construction_Materials_Preparation_u.png",
				value:0
			};
var bowcraft = {
				idName: "bowcraft", 
				displayName: "Bowcraft", 
				allText:"Maximum quality of produced bows and crossbows",
				zeroText:"Can craft regular arrows and bolts", 
				thirtyText:"Can craft regular bows and crossbows", 
				sixtyText:"Can craft advanced bows and crossbows as well as advanced ammunition", 
				ninetyText:"Can craft exceptional (+20% quality and unique name) weapons (0.01% chance)", 
				hundredText:"Can craft exceptional (+20% quality and unique name) weapons (0.011% chance)",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Bowcraft.png",
				disabledImageSrc:"images/Bowcraft_u.png",
				value:0
			};
var masonry = {
				idName: "masonry", 
				displayName: "Masonry", 
				allText:"Quality and durability of erected buildings",
				zeroText:"Can build stone fences and basic masonry objects", 
				thirtyText:"Can build stone fortifications", 
				sixtyText:"Can build a number of wooden or stone buildings", 
				ninetyText:"Can build advanced masonry objects", 
				hundredText:"Can set up flags and banners",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Masonry.png",
				disabledImageSrc:"images/Masonry_u.png",
				value:0
			};
var mining = {
				idName: "mining", 
				displayName: "Mining", 
				allText:"Speed of ore extraction",
				zeroText:"Can mine iron and copper ore.<br><br>Can prospect for copper ore.", 
				thirtyText:"Can mine for precious metals (gold and silver).<br><br>Can prospect for iron ore.", 
				sixtyText:"Chance to find precious gems (0.5% per single digging action)", 
				ninetyText:"Can find rare mineral ingredients in ore (1% chance per single digging action)", 
				hundredText:"A slightly better chance of finding rare mineral ingredients in ore (1.1% chance per single digging action)",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Mining.png",
				disabledImageSrc:"images/Mining_u.png",
				value:0
			};
var smelting = {
				idName: "smelting", 
				displayName: "Smelting", 
				allText:"Maximum quality of produced metal",
				zeroText:"Can smelt iron and copper out of ore", 
				thirtyText:"Can smelt precious ores into lumps", 
				sixtyText:"Can smelt steel", 
				ninetyText:"Can melt down (recycle) metal tools, weapons, and armor.<br><br>Can make bars and ingots out of precious metals.<br><br>Can smelt Vostaskus steel.", 
				hundredText:"Waste less material during the recycling of metal objects.",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Smelting.png",
				disabledImageSrc:"images/Smelting_u.png",
				value:0
			};
var warfareEng = {
				idName: "warfareEng", 
				displayName: "Warfare Engineering", 
				allText:"Maximum quality of resulting warfare items",
				zeroText:"Can craft Small Warfare Kits.<br><br>Can make naphtha ammo", 
				thirtyText:"Can craft Medium Warfare Kits.", 
				sixtyText:"Can craft Large Warfare Kits.", 
				ninetyText:"Can craft Explosives.", 
				hundredText:"Constant 5% luck bonus while performing Warfare engineering.",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Warfare_Engineering.png",
				disabledImageSrc:"images/Warfare_Engineering_u.png",
				value:0
			};
var architecture = {
				idName: "architecture", 
				displayName: "Architecture", 
				allText:"Quality and durability of erected buildings",
				zeroText:"Can build castle walls (10m). Can act as a foreman during constructions works (shout at people)", 
				thirtyText:"Can build towers and castle walls with hoardings", 
				sixtyText:"Can build other castle fortifications and several upgraded buildings", 
				ninetyText:"Can build Castle Keep", 
				hundredText:"Can build fountains",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Architecture.png",
				disabledImageSrc:"images/Architecture_u.png",
				value:0
			};	
var buildingMaintain = {
				idName: "buildingMaintain", 
				displayName: "Building Maintain", 
				allText:"Maximum quality of created repair kits and building maintain actions",
				zeroText:"Can craft small repair kits.<br><br>Can repair buildings.", 
				thirtyText:"Can craft medium repair kits.", 
				sixtyText:"Can craft large repair kits.", 
				ninetyText:"", 
				hundredText:"",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Building_Maintain.png",
				disabledImageSrc:"images/Building_Maintain_u.png",
				value:0
			};
var preciousProsp = {
				idName: "preciousProsp", 
				displayName: "Precious Prospecting", 
				allText:"Speed of ore extraction. Mineral prospecting speed and range",
				zeroText:"Can probe tunnel walls.", 
				thirtyText:"", 
				sixtyText:"Can prospect for silver ore.<br><br>Extended mineral prospecting range.", 
				ninetyText:"Can prospect for gold deposits.<br><br>Extended mineral prospecting range.", 
				hundredText:"Slightly increased prospecting range.",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Prospecting.png",
				disabledImageSrc:"images/Prospecting_u.png",
				value:0
			};
var jewelry = {
				idName: "jewelry", 
				displayName: "Jewelry", 
				allText:"Maximum quality of produced jewelry. The quality of jewelry affects the bonus to luck received by player who wears it.",
				zeroText:"Can craft simple rings", 
				thirtyText:"Can craft rings and amulets", 
				sixtyText:"Can craft simple jewelry with gems", 
				ninetyText:"Can craft complex jewelry with multiple metals and gems. Can craft exceptional jewelry (+20% quality and unique name) (0.01% chance)", 
				hundredText:"Can craft exceptional jewelry (+20% quality and unique name) (0.011% chance)",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Jewelry.png",
				disabledImageSrc:"images/Jewelry_u.png",
				value:0
			};
var forging = {
				idName: "forging", 
				displayName: "Forging", 
				allText:"Maximum quality of produced weapons",
				zeroText:"Can craft household objects", 
				thirtyText:"Can craft weapons from iron", 
				sixtyText:"Can craft weapons from steel", 
				ninetyText:"Can craft exceptional (+20% quality and unique name) weapons (0.01% chance) and forge weapons out of Vostascus steel", 
				hundredText:"Can craft exceptional (+20% quality and unique name) weapons (0.011% chance)",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Forging.png",
				disabledImageSrc:"images/Forging_u.png",
				value:0
			};
var armorsmithing = {
				idName: "armorsmithing", 
				displayName: "Armorsmithing", 
				allText:"Maximum quality of produced armor",
				zeroText:"Can craft regular armor", 
				thirtyText:"Can craft armor for horses", 
				sixtyText:"Can craft advanced armors", 
				ninetyText:"Can craft exceptional (+20% quality and unique name) armors (0.01% chance)", 
				hundredText:"Can craft royal armors",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Armorsmithing.png",
				disabledImageSrc:"images/Armorsmithing_u.png",
				value:0
			};

//Nature's Lore Tree
var naturesLore = {
				idName: "naturesLore", 
				displayName: "Nature's Lore", 
				allText:"Speed of foraging and maximum quality of edible roots and useful fibers.<br><br>Maximum quality of gathered herbs.",
				zeroText:"Can locate and gather edible herbs and useful fibers in an occupied tile.<br><br>Can locate and gather berries and mushrooms (for eating and cooking).<br><br>Can gather regular herbs with a loss of quality.<br><br>Can inspect trees and gather branches from trees.", 
				thirtyText:"Can locate common herbs on a current tile and find ingredients on animal carcasses.<br><br>Can gather common herbs (with quality up to 30).", 
				sixtyText:"	Can locate fresh herbs on current and common herbs in a two tile radius.<br><br>Can gather fresh herbs (with quality up to 60).", 
				ninetyText:"Can locate pristine herbs on a current, fresh herbs in a two and common herbs in a four tile radius.<br><br>Can gather pristine herbs (with quality up to 100).", 
				hundredText:"Can locate pristine herbs and fresh herbs in a two and common herbs in a five tile radius.<br><br>Permanent +5 bonus to luck during gathering.",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Nature's_Lore.png",
				disabledImageSrc:"images/Nature's_Lore_u.png",
				value:0
			};
var herbalism = {
				idName: "herbalism", 
				displayName: "Herbalism", 
				allText:"Maximum quality of produced preparations",
				zeroText:"Can make single-effect preparations (2 ingredients maximum)", 
				thirtyText:"Can make single-effect preparations (3 ingredients maximum)", 
				sixtyText:"Can create naphtha, spices and flux.<br><br>Can plant and harvest herbs from herbal garden.", 
				ninetyText:"Can make double-effect preparations (3 ingredients maximum)", 
				hundredText:"Permanent +5 bonus to luck during preparation-making",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Herbalism.png",
				disabledImageSrc:"images/Herbalism_u.png",
				value:0
			};
var farming = {
				idName: "farming", 
				displayName: "Farming", 
				allText:"Speed of Agricultural works.",
				zeroText:"Allows to till the land and gather simple seeds.", 
				thirtyText:"Can sow wheat, peas, onions, carrots, flax.<br><br>Can harvest all kinds of crops.", 
				sixtyText:"Can sow cabbage, grapes, potatoes.<br><br>Can plant apple and mulberry trees.", 
				ninetyText:"Can fertilize soil", 
				hundredText:"Permanent +5 bonus to luck during work on the farm",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Farming.png",
				disabledImageSrc:"images/Farming_u.png",
				value:0
			};
var healing = {
				idName: "healing", 
				displayName: "Healing", 
				allText:"Maximum % of Hard HP that can be healed",
				zeroText:"Can help to regain consciousness faster. Can heal.", 
				thirtyText:"Can heal wounds on arms and legs", 
				sixtyText:"Can heal fractured arms and legs", 
				ninetyText:"Can perform surgery and heal wounds and fractures anywhere on the body", 
				hundredText:"Permanent +5 bonus to luck during healing",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Healing.png",
				disabledImageSrc:"images/Healing_u.png",
				value:0
			};
var forestry = {
				idName: "forestry", 
				displayName: "Forestry", 
				allText:"Maximum quality of collected sprouts and planted trees.",
				zeroText:"Can gather sprouts from trees.", 
				thirtyText:"Can plant softwood trees (firs and pines)", 
				sixtyText:"Can plant small hardwood trees (birches and aspens)", 
				ninetyText:"Can plant hardwood trees (elms, maples, and oaks)", 
				hundredText:"Permanent +5 bonus to luck during the use of forestry abilities",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Forestry.png",
				disabledImageSrc:"images/Forestry_u.png",
				value:0
			};
var advancedFarming = {
				idName: "advancedFarming", 
				displayName: "Advanced Farming", 
				allText:"Maximum quality of crafted items.",
				zeroText:"Can produce flour.", 
				thirtyText:"Can extract honey.", 
				sixtyText:"Can use a plough.", 
				ninetyText:"Can extract silk.<br><br>Can run millstones.", 
				hundredText:"",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Advanced_Farming.png",
				disabledImageSrc:"images/Advanced_Farming_u.png",
				value:0
			};
var alchemy = {
				idName: "alchemy", 
				displayName: "Alchemy", 
				allText:"Maximum quality of produced cocktails",
				zeroText:"Can brew double-effect cocktails from three ingredients", 
				thirtyText:"Can brew double-effect cocktails (1 catalyst)", 
				sixtyText:"Can brew double-effect cocktails (1 catalyst), as well as craft explosive naphtha (with quality &gt; 60), flux, and spices", 
				ninetyText:"Can brew all kinds of cocktails with all kinds of ingredients and catalysts", 
				hundredText:"Can try to transmute iron into gold (1 lump per day; chance of success: 1%)",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Alchemy.png",
				disabledImageSrc:"images/Alchemy_u.png",
				value:0
			};
var brewing = {
				idName: "brewing", 
				displayName: "Brewing", 
				allText:"Maximum quality of produced alcohol.",
				zeroText:"Can brew cider.", 
				thirtyText:"Can make a wine.", 
				sixtyText:"Can brew mead.", 
				ninetyText:"Can brew beer.", 
				hundredText:"Can craft exceptional (+20% quality and unique name) alcohol (0.01% chance).",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Brewing.png",
				disabledImageSrc:"images/Brewing_u.png",
				value:0
			};
var cooking = {
				idName: "cooking", 
				displayName: "Cooking", 
				allText:"Maximum quality of food and beverages produced.",
				zeroText:"Can cook following simple recipes (1-2 ingredients).", 
				thirtyText:"Can cook following complex recipes (3 ingredients).", 
				sixtyText:"Can brew and create vine.<br><br>Can cook following expert recipes (4 ingredients).<br><br>Can add spices to food.", 
				ninetyText:"Can cook following delicacy recipes (5 ingredients).", 
				hundredText:"Permanent 5 bonus to luck during the seasoning of food.",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Cooking.png",
				disabledImageSrc:"images/Cooking_u.png",
				value:0
			};

//Hunting Tree
var hunting = {
				idName: "hunting", 
				displayName: "Hunting", 
				allText:"Maximum quality of obtained animal ingredients.",
				zeroText:"Can fish.<br><br>Can skin animal carcasses.<br><br>Can set up snare traps.<br><br>Can track small animals.", 
				thirtyText:"Can use animal traps", 
				sixtyText:"Can track large animals", 
				ninetyText:"Can gather alchemical ingredients from animal carcasses", 
				hundredText:"Permanent +5 bonus to luck while fishing",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/Fishing_Hunting.png",
				disabledImageSrc:"images/Fishing_Hunting_u.png",
				value:0
			};
var animalLore = {
				idName: "animalLore", 
				displayName: "Animal Lore", 
				allText:"Maximum quality of animal after successful taming action or breeding.",
				zeroText:"Can breed small animals inside coops, can clean coop/barn/stables.", 
				thirtyText:"Can breed animals inside barns.", 
				sixtyText:"Can tame bigger tameable animals and breed them inside small stables.", 
				ninetyText:"Can breed animals inside large stables.", 
				hundredText:"Permanent +5 bonus to luck while taming.",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/Animal_Lore.png",
				disabledImageSrc:"images/Animal_Lore_u.png",
				value:0
			};
var procuration = {
				idName: "procuration", 
				displayName: "Procuration", 
				allText:"Maximum quality of crafted items.",
				zeroText:"Can slaughter animals in coop, barn and stables.<br><br>Can craft bone glue.", 
				thirtyText:"Can weave ropes, linen and wool cloth.", 
				sixtyText:"Can dry hides and tan leather.", 
				ninetyText:"Can produce Silk.", 
				hundredText:"Permanent +5 bonus to luck during the use of procurement abilities.",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/Procuration.png",
				disabledImageSrc:"images/Procuration_u.png",
				value:0
			};
var warHorseHandling = {
				idName: "warHorseHandling", 
				displayName: "War Horse Handling", 
				allText:"Maximum quality of trained warhorses (quality of a warhorse affects its hitpoints, running and turning speeds).",
				zeroText:"Can train warhorse, can ride warhorse (except heavy and hardy varieties)", 
				thirtyText:"Chance to train a hardy warhorse.", 
				sixtyText:"Chance to train a heavy warhorse.", 
				ninetyText:"Chance to train a spirited warhorse.", 
				hundredText:"Chance to train a royal warhorse.",
				skillType:"Crafting",
				treeName:"huntingTree",
				imageSrc:"images/War_Horse_Training.png",
				disabledImageSrc:"images/War_Horse_Training_u.png",
				value:0
			};
var tailoring = {
				idName: "tailoring", 
				displayName: "Tailoring", 
				allText:"Maximum quality of crafted outfits.",
				zeroText:"Can craft simple cloth and leather objects (boots, helmets, gloves).", 
				thirtyText:"Can craft simple leather armor and padded armor.", 
				sixtyText:"Can craft advanced leather armor.<br><br>Can weave and tailor silk clothes that provides bonus to several skills.", 
				ninetyText:"Can craft exceptional armor and cloth (+20% quality and unique name)(0.01% chance).", 
				hundredText:"Can craft royal armors and decorated dresses.",
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
				displayName: "Chivalry", 
				allText:"Maximum quality of militia weapons that can be effectively used.<br><br>Maximum quality of one-handed axes and maces that can be effectively used.<br><br>Maximum quality of padded armor that can be effectively used.",
				zeroText:"Can equip padded armors.<br><br>Can use one-handed axes and maces.<br><br>Can use militia weapons (pitchforks, staves, pickaxes, shovels and any other handheld tools).<br><br>Can use Flee! ability (speed goes up for a short time, while the ability to use any weapons is lost).", 
				thirtyText:"3x lower armor encumbrance.<br><br>Militia weapons attacks become twice as fast.<br><br>One-handed axe and mace attacks become twice as fast.<br><br>Can perform Special Attack on someone knocked down.", 
				sixtyText:"Can equip regular padded armors.<br><br>Artisan's Strike combo (thrust - overhead - overhead - left slash or thrust - overhead - overhead - right slash)<br><br>Skullsplitter! combo (right slash - left slash - right slash - overhead or left slash - right slash - left slash - overhead)<br><br>This combo has no special effects.<br><br>Can perform Special Attack after stunning your opponent.", 
				ninetyText:"Can equip heavy padded armors.<br><br>Thrusting attacks with militia weapons cannot be parried.<br><br>Knock-Knock! combo (thrust - overhead - overhead - overhead)<br><br>This combo ends with a Power Strike effect.<br><br>Can perform Special Attack while under a Power strike effect.", 
				hundredText:"Can equip royal padded armors.<br>Trickmove.",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Axe_And_Mace_Mastery.png",
				disabledImageSrc:"images/Axe_And_Mace_Mastery_u.png",
				value:0
			};
var spearMastery = {
				idName: "spearMastery", 
				displayName: "Spear Mastery", 
				allText:"Maximum quality of spears that can be effectively used.",
				zeroText:"Can use spears.", 
				thirtyText:"Pike and spear attacks become twice as fast.", 
				sixtyText:"Can perform 'Wall of pikes' attack. It is a special thrusting pike attack that makes you immobile, deals massive damage to horses and always stops them.", 
				ninetyText:"A greater chance of unsaddling a rider using overhead attacks", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Spear_Mastery.png",
				disabledImageSrc:"images/Spear_Mastery_u.png",
				value:0
			};
var poleaxesMastery = {
				idName: "poleaxesMastery", 
				displayName: "Poleaxes Mastery", 
				allText:"Maximum quality of pole weapons that can be effecively used.",
				zeroText:"Can use pole weapons.", 
				thirtyText:"Pole weapon attacks become twice as fast.<br><br>Can perform Special Attack on someone knocked down.", 
				sixtyText:"Can perform a 'Pounce' attack.<br><br>Can perform Special Attack after a successful parry.<br><br>Can perform Special Attack after recovering from a stun.<br><br>Can perform Special Attack after a successfull attack against your opponent.<br><br>Can perform Special Attack after hitting a horse.", 
				ninetyText:"A greater chance of unsaddling a rider using overhead attacks.<br><br><br><br>Can perform Special Attack while under a Power Strike effect.<br><br>Can perform Special Attack after stunning your opponent.", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Poleaxes_Mastery.png",
				disabledImageSrc:"images/Poleaxes_Mastery_u.png",
				value:0
			};
var unitAndFormation = {
				idName: "unitAndFormation", 
				displayName: "Unit And Formation", 
				allText:"Maximum % of unit bonuses that can be received and provided.",
				zeroText:"Can receive unit bonuses from leader if inside a formation formed by that unit leader.<br><br>Can give voice commands to change unit formation (Wall/Wedge/Circle), creation formation areas.", 
				thirtyText:"Can issue 'Hold your ground!' command which increases defence, but decreases the speed of unit members", 
				sixtyText:"Can issue 'Charge!' command which increases damage dealt by unit members to the enemy for 20 seconds.<br><br>Can receive maximum bonus from orders and formations.", 
				ninetyText:"Can issue 'Move!' command which provides movement bonus to all unit members in range", 
				hundredText:"Formation zone color is different",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Unit_Formation.png",
				disabledImageSrc:"images/Unit_Formation_u.png",
				value:0
			};
var mountedFightingMastery = {
				idName: "mountedFightingMastery", 
				displayName: "Mounted Fighting Mastery", 
				allText:"Maximum quality of cavalry weapons that can be effectively used.<br><br>A chance to remain in the saddle when a horse rears up.",
				zeroText:"Can use one-handed weapons while mounted.<br><br>Can ride Warhorses.", 
				thirtyText:"Cavalry attacks become twice as fast.<br><br>Can ride Hardy Warhorses.", 
				sixtyText:"A lower chance of falling out of saddle in battle.<br><br>Can ride Spirited Warhorses.", 
				ninetyText:"'Iron grip' - no one will be able to throw you out of the saddle for a short period of time", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Mounted_Fighting_Mastery.png",
				disabledImageSrc:"images/Mounted_Fighting_Mastery_u.png",
				value:0
			};
var lancing = {
				idName: "lancing", 
				displayName: "Lancing", 
				allText:"Maximum quality of lances that can be effectively used.",
				zeroText:"Can use lances while mounted.", 
				thirtyText:"Lance attacks become twice as fast.", 
				sixtyText:"Lance become easier to aim.", 
				ninetyText:"Can couch lance longer.", 
				hundredText:"an use decorated lances.",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Lancing.png",
				disabledImageSrc:"images/Lancing_u.png",
				value:0
			};
var heavyHorseHandling = {
				idName: "heavyHorseHandling", 
				displayName: "Heavy Horse Handling", 
				allText:"Maximum quality of heavy warhorses that can be effectively used.",
				zeroText:"Can ride heavy warhorses.", 
				thirtyText:"Can gallop on a heavy warhorse.", 
				sixtyText:"Gives a chance that enemy pikes will slide off without harming the horse or the rider.", 
				ninetyText:"A heavy horse that gallops for longer than 5 seconds becomes impervious to everything except Wall of Pikes or Defensive Fence and gains the ability to knock subsequant players down without loosing speed.<br><br>The effect ceases when the horse is no longer galloping", 
				hundredText:"Earth rumbles around a galloping heavy warhorse.<br><br>Can ride royal warhorses.",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Heavy_Horse_Handling.png",
				disabledImageSrc:"images/Heavy_Horse_Handling_u.png",
				value:0
			};
var bladesMastery = {
				idName: "bladesMastery", 
				displayName: "Blades Mastery", 
				allText:"Maximum quality of one-handed blades that can be effecively used.",
				zeroText:"Can use one-handed blade weapons.", 
				thirtyText:"One-handed blade attacks become twice as fast.<br><br>Can perform Special Attack after a successful block.<br><br>Can perform Special Attack on someone knocked down.", 
				sixtyText:"	Thousand Cuts! combo (right slash - left slash - right slash - thrust or left slash - right slash - left slash - thrust)<br><br>This combo has a chance of inducing a bleeding wound.<br><br>Can perform Special Attack after drawing a weapon from your belt.<br><br>Can perform Special Attack immediately after recovering from a stun.<br><br>Can perform Special Attack after a successful block against your opponent.", 
				ninetyText:"Flurry of Blows! combo (right slash - thrust - left slash - overhead or left slash - thrust - right slash - overhead).<br><br>This combo ends with a Power Strike effect.<br><br>Can perform Special Attack while under a Power Strike effect.<br><br>Can perform Special Attack after stunning your opponent.", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/1H_Blade_Mastery.png",
				disabledImageSrc:"images/1H_Blade_Mastery_u.png",
				value:0
			};
var shieldMastery = {
				idName: "shieldMastery", 
				displayName: "Shield Mastery", 
				allText:"Shield durability loss after blocking a blow.",
				zeroText:"Can equip shields and use them to block attacks.", 
				thirtyText:"Shield durability loss caused by a successful block is reduced.", 
				sixtyText:"Can perform a Shield bash", 
				ninetyText:"Can sprint while blocking.", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Shield_Mastery.png",
				disabledImageSrc:"images/Shield_Mastery_u.png",
				value:0
			};
var piercingMastery = {
				idName: "piercingMastery", 
				displayName: "Piercing Mastery", 
				allText:"Maximum quality of one-handed piercing weapons that can be effecively used.",
				zeroText:"Can use one-handed piercing weapons.", 
				thirtyText:"One-handed piercing weapons attacks become twice as fast.<br><br>Can perform Special Attack on someone knocked down.", 
				sixtyText:"Point of Vulnerability! combo (thrust - overhead - overhead - left slash or thrust - overhead - overhead - right slash)<br><br>This combo have no special effects.<br><br>Can perform Special Attack after stunning your opponent.", 
				ninetyText:"Another Hole! combo (overhead - right slash - left slash - overhead or overhead - left slash - right slash - overhead)<br><br>This combo ends with a Power Strike effect.<br><br>Can perform Special Attack while under a Power Strike effect.", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"chivalryTree",
				imageSrc:"images/Piercing_Mastery.png",
				disabledImageSrc:"images/Piercing_Mastery_u.png",
				value:0
			};

//Indepedant Tree
var chainmailArmors = {
				idName: "chainmailArmors", 
				displayName: "Chainmail Armors", 
				allText:"Maximum quality of armor that can be effectively used.",
				zeroText:"Can equip novice chainmail armors.", 
				thirtyText:"3x lower armor encumbrance.", 
				sixtyText:"Can equip regular chainmail armors.", 
				ninetyText:"Can equip veteran chainmail armors.", 
				hundredText:"Can equip royal chainmail armors.",
				skillType:"Combat",
				treeName:"chainmailArmorsTree",
				imageSrc:"images/Chain_Mail_Armor.png",
				disabledImageSrc:"images/Chain_Mail_Armor_u.png",
				value:0
			};
var scaleArmors = {
				idName: "scaleArmors", 
				displayName: "Scale Armors", 
				allText:"Maximum quality of armor that can be effecively used.",
				zeroText:"Can equip novice scale armors.", 
				thirtyText:"3x lower armor encumbrance.", 
				sixtyText:"Can equip regular scale armors.", 
				ninetyText:"Can equip veteran scale armors.", 
				hundredText:"Can equip royal scale armors.",
				skillType:"Combat",
				treeName:"scaleArmorsTree",
				imageSrc:"images/Scale_Armors.png",
				disabledImageSrc:"images/Scale_Armors_u.png",
				value:0
			};
var plateArmors = {
				idName: "plateArmors", 
				displayName: "Plate Armors", 
				allText:"Maximum quality of armor that can be effecively used.",
				zeroText:"Can equip novice plate armors.", 
				thirtyText:"3x lower armor encumbrance.", 
				sixtyText:"Can equip regular plate armors.", 
				ninetyText:"Can equip veteran fullplate armors.", 
				hundredText:"Can equip royal fullplate armors.",
				skillType:"Combat",
				treeName:"plateArmorsTree",
				imageSrc:"images/Full_Plate_Armors.png",
				disabledImageSrc:"images/Full_Plate_Armors_u.png",
				value:0
			};

//Warrior Tree
var warrior = {
				idName: "warrior", 
				displayName: "Warrior", 
				allText:"Maximum damage that can be inflicted with unarmed attacks.<br><br>Maximum quality of throwing weapons that can be effectively used.<br><br>Maximum quality of leather armor that can be effectively used.",
				zeroText:"Allows to attack unarmed and parry strikes from pole weapons.<br><br>Can use a sling.<br><br>Can equip novice leather armors.", 
				thirtyText:"3x lower armor encumbrance.<br><br>Can use throwing knives.<br><br>Unarmed attacks and parrying strikes from pole weapons become twice as fast.<br><br>Can perform Special Attack after a successful parry.", 
				sixtyText:"Can equip regular leather armors.<br><br>Can use throwing axes and javelins.<br><br>Disarm - after a successful parry, your opponent's weapon may end up in your inventory.<br><br>Can perform Special Attack immediately after recovering from a stun.<br><br>Can perform Special Attack while under a Power Strike effect.<br><br>Can perform Special Attack after stunning your opponent.", 
				ninetyText:"Can equip heavy leather armors.<br><br>Can throw naphtha grenades.<br><br>Knockout! - chance to cause knockdown if unarmed attack hits head.", 
				hundredText:"Can equip royal leather armors.<br><br>Can throw firework charges.<br><br>Trickmove",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Unarmed_Fight.png",
				disabledImageSrc:"images/Unarmed_Fight_u.png",
				value:0
			};
var demolition = {
				idName: "demolition", 
				displayName: "Demolition", 
				allText:"Effectiveness of demolition-related actions.",
				zeroText:"Can use torches as a siege melee weapon.", 
				thirtyText:"More effective use of torches.", 
				sixtyText:"", 
				ninetyText:"Can man trebuchet", 
				hundredText:"Can shoot with cows (just for fun)",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Demolition.png",
				disabledImageSrc:"images/Demolition_u.png",
				value:0
			};
var twoHandedAxes = {
				idName: "twoHandedAxes", 
				displayName: "Two-handed Axes Mastery", 
				allText:"Maximum quality of two-handed axes that can be effecively used.",
				zeroText:"Can use two-handed axes.", 
				thirtyText:"Two-handed axe attacks become twice as fast.", 
				sixtyText:"Can execute a Pounce attack.", 
				ninetyText:"Execution! combo (left slash - right slash - overhead - right slash or right slash - left slash - overhead - left slash)<br><br>This combo has a chance of inducting a wound.<br><br>If your strike becomes blocked by a shield, shield will suffer serious damage.", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/2H_Axes_Mastery.png",
				disabledImageSrc:"images/2H_Axes_Mastery_u.png",
				value:0
			};
var twoHandedBlades = {
				idName: "twoHandedBlades", 
				displayName: "Two-handed Blades Mastery", 
				allText:"Maximum quality of two-handed blade weapons that can be effecively used.",
				zeroText:"Can use two-handed blade weapons.", 
				thirtyText:"Two-handed sword attacks become twice as fast.<br><br>Can perform Special Attack immediately after recovering from a stun.<br><br>Can perform Special Attack after a successful parry against your opponent.<br><br>Can perform Special Attack on someone knocked down.", 
				sixtyText:"Power Overwhelming! combo (thrust - right slash - left slash - overhead or thrust - left slash - right slash - overhead)<br><br>This combo have no special effects.<br><br>Can perform Special Attack after a successful parry.", 
				ninetyText:"Dismember! combo (left slash - right slash - left slash - right slash or right slash - left slash - right slash - left slash)<br><br>This combo ends with Power Strike effect.<br><br>Can perform Special Attack while under a Power Strike effect.<br><br>Can perform Special Attack after stunning your opponent.", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/2H_Blade_Mastery.png",
				disabledImageSrc:"images/2H_Blade_Mastery_u.png",
				value:0
			};
var twoHandedBlunt = {
				idName: "twoHandedBlunt", 
				displayName: "Two-handed Blunt Mastery", 
				allText:"Maximum quality of two-handed blunt weapons that can be effecively used.",
				zeroText:"Can use two-handed blunt weapons.", 
				thirtyText:"Two-handed blunt weapons attacks become twice as fast.<br><br>Can perform Special Attack on someone knocked down.", 
				sixtyText:"Crunchy! combo (thrust - right slash - left slash - overhead or thrust - left slash - right slash - overhead)<br><br>This combo has a chance of inflicting a fracture.<br><br>Can perform Special Attack after a successful parry.", 
				ninetyText:"Kneel before me! combo (right slash - left slash - overhead - overhead or left slash - right slash - overhead - ovearhead)<br><br>This combo has a chance of knocking down the opponent.<br><br>Can perform Special Attack while under a Power Strike effect.<br><br>Can perform Special Attack after stunning your opponent.", 
				hundredText:"Trickmove",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/2H_Blunt_Mastery.png",
				disabledImageSrc:"images/2H_Blunt_Mastery_u.png",
				value:0
			};
var warCries = {
				idName: "warCries", 
				displayName: "War Cries", 
				allText:"Power of war cries",
				zeroText:"Taunt (verbal) - A few well-chosen words about your enemy's mother (Strength increased)", 
				thirtyText:"'Coward!' - Targeted enemy gets great speed increase, but also a chance to stumble and falldown.<br><br>Trembling hands (harder to hit with ranged weapons)", 
				sixtyText:"Arghhhhhh! - Attempts to remove all slow and poison effects on self.", 
				ninetyText:"You are mine! - Targeted enemy becomes more vulnerable and your speed slightly increased.", 
				hundredText:"Proper taunt with animation.",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/War_Cries.png",
				disabledImageSrc:"images/War_Cries_u.png",
				value:0
			};
var crossbows = {
				idName: "crossbows", 
				displayName: "Crossbows Mastery", 
				allText:"Maximum quality of crossbows that can be effectively used.",
				zeroText:"Can use crossbows.", 
				thirtyText:"Higher reload speed, better aiming", 
				sixtyText:"Stopping Power - The next crossbow shot will stun the enemy for 1 second", 
				ninetyText:"Piercing Bolt - The next crossbow shot can hit up to three enemies if they stand behind each other", 
				hundredText:"Can use Firework Bolts",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Crossbows_Mastery.png",
				disabledImageSrc:"images/Crossbows_Mastery_u.png",
				value:0
			};
var bows = {
				idName: "bows", 
				displayName: "Bows Mastery", 
				allText:"Maximum quality of bows that can be effectively used.",
				zeroText:"Can use bows.", 
				thirtyText:"Higher reload speed, better aiming.", 
				sixtyText:"Arrow to the knee! - The next arrow will slow the enemy down by 10%.<br><br>If the arrow hits the leg, the enemy will be slowed down by 50%.", 
				ninetyText:"Volley - Fire up to 10 arrows in a rapid succession on a targeted area.", 
				hundredText:"Can use Firework Arrows.",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Bows_Mastery.png",
				disabledImageSrc:"images/Bows_Mastery_u.png",
				value:0
			};
var combatPrep = {
				idName: "combatPrep", 
				displayName: "Combat Preparation", 
				allText:"Speed of combat preparation performing",
				zeroText:"Arrowstand - Shortens the reload time when the player is standing nearby", 
				thirtyText:"Can use a pavise for cover and then to return it to the inventory", 
				sixtyText:"Can deploy a Defensive Fence - If horses gallop into it, they will suffer damage or perish", 
				ninetyText:"Can set up a small field tent (5 binding points)", 
				hundredText:"Can set up a decorated field tent (5 binding points)",
				skillType:"Combat",
				treeName:"warriorTree",
				imageSrc:"images/Combat_Preparation.png",
				disabledImageSrc:"images/Combat_Preparation_u.png",
				value:0
			};

//Independant 2 Tree
var equipmentMaintain = {
				idName: "equipmentMaintain", 
				displayName: "Equipment Maintain", 
				allText:"Amount of durability that can be restored by equipment maintain.",
				zeroText:"Can perform maintenance actions on weapons, but for the price of maximum durability loss.", 
				thirtyText:"Can perform maintenance actions on armor and shields, but for the price of maximum durability loss.", 
				sixtyText:"Chance to recover projectiles that have missed their target (20%).", 
				ninetyText:"Can coat the blades of equipped one-handed weapons with poison.", 
				hundredText:"Chance to recover projectiles that have missed their target (22%).",
				skillType:"Combat",
				treeName:"equipmentMaintainTree",
				imageSrc:"images/Equipment_Maintain.png",
				disabledImageSrc:"images/Equipment_Maintain_u.png",
				value:0
			};
var battleSurvival = {
				idName: "battleSurvival", 
				displayName: "Battle Survival", 
				allText:"Wound treatment duration.<br><br>Fatal Hard HP damage transforms into Soft HP damage (% of max mitigation)",
				zeroText:"Can bandage wounds on arms and legs.", 
				thirtyText:"Can bandage torso bleeding wounds.", 
				sixtyText:"5% chance to double amount of fatal Hard HP damage that transformed into Soft HP (affected by luck)", 
				ninetyText:"Can bandage wounds on the head. 10% chance to double ammount of fatal Hard RP damage that transformed into Soft HP (affected by luck)", 
				hundredText:"11% chance to double ammount of fatal Hard RP damage that transformed into Soft HP (affected by luck)",
				skillType:"Combat",
				treeName:"battleSurvivalTree",
				imageSrc:"images/First_Aid.png",
				disabledImageSrc:"images/First_Aid_u.png",
				value:0
			};
var drill = {
				idName: "drill", 
				displayName: "Drill", 
				allText:"Max skill level that can be given to trainees",
				zeroText:"Can drill tier 1 skills", 
				thirtyText:"Can drill tier 2 and secondary skills", 
				sixtyText:"	Can drill tier 3 and 4 skills", 
				ninetyText:"", 
				hundredText:"Permanent + 5 luck while performing drill abilities",
				skillType:"Combat",
				treeName:"drillTree",
				imageSrc:"images/Drill.png",
				disabledImageSrc:"images/Drill_u.png",
				value:0
			};


//Minor Skills//
var movement = {
				idName: "movement", 
				displayName: "Movement", 
				allText:"Max speed % while carrying.",
				zeroText:"", 
				thirtyText:"", 
				sixtyText:"", 
				ninetyText:"", 
				hundredText:"",
				skillType:"Minor",
				treeName:"movementTree",
				imageSrc:"images/Lifting.png",
				disabledImageSrc:"images/Lifting_u.png",
				value:0
			};
var generalActions = {
				idName: "generalActions", 
				displayName: "General Actions", 
				allText:"Resting efficiency.<br><br>Can perform several general actions.",
				zeroText:"Can properly rest to recuperate Hard Stamina and Soft HP.<br><br>Emotions:<br>- Approve<br>- Courtesy<br>- Dance<br>- Disapproval<br>- Fright<br>- Laughter<br>- Provocation<br>- Honor<br>- Welcome", 
				thirtyText:"", 
				sixtyText:"", 
				ninetyText:"", 
				hundredText:"",
				skillType:"Minor",
				treeName:"generalActionsTree",
				imageSrc:"images/general_moves.png",
				disabledImageSrc:"images/general_moves_u.png",
				value:0
			};
var horsebackRiding = {
				idName: "horsebackRiding", 
				displayName: "Horseback Riding", 
				allText:"Maximum quality of regular horses that can be effectively ridden.",
				zeroText:"", 
				thirtyText:"", 
				sixtyText:"", 
				ninetyText:"", 
				hundredText:"",
				skillType:"Minor",
				treeName:"horsebackRidingTree",
				imageSrc:"images/Horseback_Riding.png",
				disabledImageSrc:"images/Horseback_Riding_u.png",
				value:0
			};
var swimming = {
				idName: "swimming", 
				displayName: "Swimming", 
				allText:"Stamina drain while swimming.",
				zeroText:"", 
				thirtyText:"", 
				sixtyText:"", 
				ninetyText:"", 
				hundredText:"",
				skillType:"Minor",
				treeName:"swimmingTree",
				imageSrc:"images/Artisan.png",
				disabledImageSrc:"images/Artisan_u.png",
				value:0
			};
var authority = {
				idName: "authority", 
				displayName: "Authority", 
				allText:"Can claim land.<br><br>Can erect a Guild Monument.<br><br>Can mark trespassers as criminals.",
				zeroText:"", 
				thirtyText:"", 
				sixtyText:"", 
				ninetyText:"", 
				hundredText:"",
				skillType:"Minor",
				treeName:"authorityTree",
				imageSrc:"images/Authority.png",
				disabledImageSrc:"images/Authority_u.png",
				value:0
			};
var piety = {
				idName: "piety", 
				displayName: "Piety", 
				allText:"A greater chance that your prayers will be heard by God.",
				zeroText:"Can pray for Safe Return Home.", 
				thirtyText:"Can Praise God (alignment increases, can be used once per day).", 
				sixtyText:"Can bless people calling upon \"God's Mercy\" that removes death penalty during PvP events (sieges/battles/Judgement Hour)", 
				ninetyText:"Can bless people calling upon \"God's Love\" that increases luck by 3.", 
				hundredText:"God's Love blessing increases luck by 3.5.",
				skillType:"Minor",
				treeName:"pietyTree",
				imageSrc:"images/Piety.png",
				disabledImageSrc:"images/Piety_u.png",
				value:0
			};
var mentoring = {
				idName: "mentoring", 
				displayName: "Mentoring", 
				children: [], 
				parentNode:null, 
				allText:"Max skill level that can be given to students.",
				zeroText:"Can mentor tier 1 skills.", 
				thirtyText:"Can mentor tier 2 and secondary skills.", 
				sixtyText:"Can mentor tier 3 and 4 skills.", 
				ninetyText:"Can mentor tier 5 skills. (not implemented yet)", 
				hundredText:"Permanent +5 luck bonus during mentoring.",
				skillType:"Minor",
				treeName:"mentoringTree",
				imageSrc:"images/Mentoring.png",
				disabledImageSrc:"images/Mentoring_u.png",
				value:0
			};
var arts = {
				idName: "arts", 
				displayName: "Arts", 
				allText:"Maximum quality of works of art.",
				zeroText:"Can paint small paintings paintings.", 
				thirtyText:"Can make a Deer trophy.", 
				sixtyText:"Can paint paintings and make a Moose trophy.", 
				ninetyText:"Can paint big paintings and make a Bear trophy.", 
				hundredText:"Permanent +5 bonus to luck while creating works of art.",
				skillType:"Minor",
				treeName:"artsTree",
				imageSrc:"images/Arts.png",
				disabledImageSrc:"images/Arts_u.png",
				value:0
			};
			
