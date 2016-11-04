var artisan = {
				idName: "artisan", 
				displayName: "工匠", 
				allText:"地质改造速度.砍树速度。", 
				zeroText:"可以降低或抬升地面的海拔高度。<br><br>可以剥树皮以及砍伐树木。<br><br>可以建立一个营地。<br><br>可以制造原始工具。<br><br>可以为建筑打磨石材。", 
				thirtyText:"可以平整地面。<br><br>可以根除树桩。", 
				sixtyText:"能够以两倍的速度砍树。", 
				ninetyText:"能够在树上获得稀有的材料（1%）。", 
				hundredText:"提高在树上获得稀有材料的几率（1.5%）。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Artisan.png",
				disabledImageSrc:"images/Artisan_u.png",
				value:0
			};
var carpentry = {
				idName: "carpentry", 
				displayName: "木匠", 
				allText:"制造木制品的最大品质",
				zeroText:"可以加工原木。<br><br>可以制作木制零件及小型家具。", 
				thirtyText:"可以使用工作台。", 
				sixtyText:"可以制作木质武器零件。", 
				ninetyText:"可以制作大型家具。", 
				hundredText:"可以制作装饰品。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Carpentry.png",
				disabledImageSrc:"images/Carpentry_u.png",
				value:0
			};
var construction = {
				idName: "construction", 
				displayName: "建造", 
				allText:"建筑物的最大质量及最大耐久。",
				zeroText:"可以铺设道路。", 
				thirtyText:"可以构建简单的木制对象。", 
				sixtyText:"可以建造简单的石质建筑及进阶木质建筑。", 
				ninetyText:"可以建造多种复杂的对象。", 
				hundredText:"可以雕刻雕像。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Construction.png",
				disabledImageSrc:"images/Construction_u.png",
				value:0
			};
var digging = {
				idName: "digging", 
				displayName: "挖掘", 
				allText:"隧道挖掘速度。",
				zeroText:"可以向前或向下挖掘隧道。", 
				thirtyText:"略微加快挖掘速度。可以向上挖掘隧道。", 
				sixtyText:"可以用木板加固隧道四壁。", 
				ninetyText:"可以加固隧道（建造支撑梁）。", 
				hundredText:"使支撑结构更坚固。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Digging.png",
				disabledImageSrc:"images/Digging_u.png",
				value:0
			};
var materialsPrep = {
				idName: "materialsPrep", 
				displayName: "建材制备", 
				allText:"建材制作速度。",
				zeroText:"可以制作简单的粘土模具。", 
				thirtyText:"可以用硬木块烧制木炭。", 
				sixtyText:"可以用玻璃制作物品并可以使用陶轮。", 
				ninetyText:"可以制作进阶粘土物品。", 
				hundredText:"可以制造城市标识。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Construction_Materials_Preparation.png",
				disabledImageSrc:"images/Construction_Materials_Preparation_u.png",
				value:0
			};
var bowcraft = {
				idName: "bowcraft", 
				displayName: "制弓", 
				allText:"制造弓弩的最大品质。",
				zeroText:"可以制作常规箭矢及弩矢。", 
				thirtyText:"可以制作常规弓弩。", 
				sixtyText:"可以制作进阶弓弩及进阶弹药。", 
				ninetyText:"可以制造优质（+20% 品质及独一无二的名字）武器（0.01% 概率）。", 
				hundredText:"可以制造优质（+20% 品质及独一无二的名字）武器（0.011% 概率）。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Bowcraft.png",
				disabledImageSrc:"images/Bowcraft_u.png",
				value:0
			};
var masonry = {
				idName: "masonry", 
				displayName: "砖石建筑", 
				allText:"建筑物的质量及耐久。",
				zeroText:"可以建造石质矮墙和基础砌石建筑。", 
				thirtyText:"可以建造石质防御工事。", 
				sixtyText:"可以建造大量木质及石质建筑。", 
				ninetyText:"可以建造进阶砌石建筑。", 
				hundredText:"可以设置旗帜及横幅。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Masonry.png",
				disabledImageSrc:"images/Masonry_u.png",
				value:0
			};
var mining = {
				idName: "mining", 
				displayName: "开采", 
				allText:"开采矿石的速度。<br><br>矿产勘探速度及范围。",
				zeroText:"可以开采铁矿以及铜矿。<br><br>可以勘探铜矿。", 
				thirtyText:"可以开采贵金属（金、银）<br><br>可以勘探铁矿。", 
				sixtyText:"有几率获得宝石（每次挖掘有 0.5% 的几率）。", 
				ninetyText:"能够从矿石中获得稀有材料（每次挖掘有 1%% 的几率）。", 
				hundredText:"提高从矿石中获得稀有材料的概率（每次挖掘有 1.1%% 的几率）。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Mining.png",
				disabledImageSrc:"images/Mining_u.png",
				value:0
			};
var smelting = {
				idName: "smelting", 
				displayName: "熔炼", 
				allText:"产出金属的最大品质。",
				zeroText:"可以从矿石中提炼出铁和铜。", 
				thirtyText:"可以将稀有矿石熔炼成块。", 
				sixtyText:"可以炼钢。", 
				ninetyText:"可以熔化（回收）金属工具、武器及防具。<br><br>可以制作贵金属条及锭。<br><br>可以炼制乌金。", 
				hundredText:"减少回收金属制品时的损耗。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Smelting.png",
				disabledImageSrc:"images/Smelting_u.png",
				value:0
			};
var warfareEng = {
				idName: "warfareEng", 
				displayName: "军事工程", 
				allText:"制造战争器械的最大品质。",
				zeroText:"可以制作小型战争工具包。<br><br>可以制作燃烧弹。", 
				thirtyText:"可以制作中型战争工具包。", 
				sixtyText:"可以制作大型战争工具包。<br><br>可以部署工程炸药。", 
				ninetyText:"可以制作炸药。", 
				hundredText:"操作攻城器械时永久增加 5% 幸运值。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Warfare_Engineering.png",
				disabledImageSrc:"images/Warfare_Engineering_u.png",
				value:0
			};
var architecture = {
				idName: "architecture", 
				displayName: "建筑学", 
				allText:"建筑物的质量及耐久。",
				zeroText:"可以建造高墙(10m)。", 
				thirtyText:"可以建造塔楼及带顶棚的高墙。", 
				sixtyText:"可以建造其他种类的城堡防御工事及升级建筑物。", 
				ninetyText:"可以建造城堡要塞。", 
				hundredText:"可以建造喷泉。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Architecture.png",
				disabledImageSrc:"images/Architecture_u.png",
				value:0
			};	
var buildingMaintain = {
				idName: "buildingMaintain", 
				displayName: "建筑维护", 
				allText:"修理包及建筑维护动作的质量。",
				zeroText:"可以制作小型修理包。<br><br>可以修理建筑物。", 
				thirtyText:"可以制作中型修理包。", 
				sixtyText:"可以制作大型修理包。", 
				ninetyText:"略微加快修理速度。", 
				hundredText:"修理包及建筑维护动作的最大质量。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Building_Maintain.png",
				disabledImageSrc:"images/Building_Maintain_u.png",
				value:0
			};
var preciousProsp = {
				idName: "preciousProsp", 
				displayName: "珍宝勘探 (This skill has been removed)", 
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
				displayName: "珠宝匠", 
				allText:"产出首饰的最大品质。首饰的品质影响佩戴者的幸运。",
				zeroText:"可以制作简单的戒指。", 
				thirtyText:"可以制作戒指及护身符。", 
				sixtyText:"可以制作简单的珠宝首饰。", 
				ninetyText:"可以使用多种金属及宝石制作各种复杂的首饰。<br><br>可以制作优质首饰（+20% 品质及独一无二的名字）（0.01% 概率）。", 
				hundredText:"可以制作优质首饰（+20% 品质及独一无二的名字）（0.011% 概率）。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Jewelry.png",
				disabledImageSrc:"images/Jewelry_u.png",
				value:0
			};
var forging = {
				idName: "forging", 
				displayName: "锻造", 
				allText:"制造武器的最大品质。",
				zeroText:"可以制作家用物品。", 
				thirtyText:"可以用铁锻造武器。", 
				sixtyText:"可以用钢锻造武器。", 
				ninetyText:"可以制造优质的（+20% 品质及独一无二的名字）武器（0.01% 概率）并可以使用乌金锻造武器。", 
				hundredText:"可以制造优质的（+20% 品质及独一无二的名字）武器（0.011% 概率）。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Forging.png",
				disabledImageSrc:"images/Forging_u.png",
				value:0
			};
var armorsmithing = {
				idName: "armorsmithing", 
				displayName: "制甲", 
				allText:"制造防具的最大品质。",
				zeroText:"可以制造常规防具。", 
				thirtyText:"可以制造马甲。", 
				sixtyText:"可以制造进阶防具。", 
				ninetyText:"可以制造优质的（+20% 品质及独一无二的名字）防具（0.01% 概率）。", 
				hundredText:"可以制造皇家防具。",
				skillType:"Crafting",
				treeName:"artisanTree",
				imageSrc:"images/Armorsmithing.png",
				disabledImageSrc:"images/Armorsmithing_u.png",
				value:0
			};

//Nature's Lore Tree
var naturesLore = {
				idName: "naturesLore", 
				displayName: "自然学", 
				allText:"采集速度及可食用的根茎和有用纤维的最大品质。<br><br>采集草药的最大质量。",
				zeroText:"可以搜寻并收集当前区块中可食用植物及有用的纤维。<br><br>可以找到并收集浆果和蘑菇（吃或者烹饪）。<br><br>可以通过损失品质来采集草药。<br><br>可以检查树木并折取树枝。", 
				thirtyText:"可以在当前地块中发现普通草药并且在动物尸体中发现材料。<br><br>可以采集普通草药（30品质）。", 
				sixtyText:"可以在当前地块中发现新鲜草药并在2格范围内发现普通草药。<br><br>可以采集新鲜草药（60品质）。", 
				ninetyText:"可以在当前地块中发现纯净草药并在2格范围内发现新鲜草药及在可以在4格范围内发现普通草药。<br><br>可以采集纯净草药（100品质）。", 
				hundredText:"可以在2格范围内发现纯净草药和新鲜草药并在5格范围内发现普通草药。<br><br>采集时永久增加 5 点辛运值。",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Nature's_Lore.png",
				disabledImageSrc:"images/Nature's_Lore_u.png",
				value:0
			};
var herbalism = {
				idName: "herbalism", 
				displayName: "本草学", 
				allText:"调配制剂的最大品质。",
				zeroText:"可以调配单一效果的制剂（最多用2种原料）。", 
				thirtyText:"可以调配单一效果的制剂（最多用3种原料）。", 
				sixtyText:"可以调配石脑油、调味料及助熔剂。<br><br>可以在草药园中种植及收获草药。", 
				ninetyText:"可以调配双重效果的制剂（最多用3种原料）。", 
				hundredText:"调配时永久+5点幸运。",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Herbalism.png",
				disabledImageSrc:"images/Herbalism_u.png",
				value:0
			};
var farming = {
				idName: "farming", 
				displayName: "农业", 
				allText:"农业工作速度。",
				zeroText:"可以犁地并收集基本的种子。", 
				thirtyText:"可以种植小麦、豌豆、洋葱、胡萝卜、亚麻。<br><br>可以收割所有作物。", 
				sixtyText:"可以种植卷心菜、葡萄、土豆。<br><br>可以种植苹果树和桑树。", 
				ninetyText:"可以给土壤施肥。", 
				hundredText:"耕作时永久+5点幸运。",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Farming.png",
				disabledImageSrc:"images/Farming_u.png",
				value:0
			};
var healing = {
				idName: "healing", 
				displayName: "医疗", 
				allText:"可治疗硬生命值的最大%。",
				zeroText:"可以帮助更快的恢复意识。可以治疗。", 
				thirtyText:"可以治疗四肢的伤口。", 
				sixtyText:"可以治疗四肢的骨折。", 
				ninetyText:"可以进行手术及治疗全身的伤口和骨折。", 
				hundredText:"医疗时永久+5点幸运。",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Healing.png",
				disabledImageSrc:"images/Healing_u.png",
				value:0
			};
var forestry = {
				idName: "forestry", 
				displayName: "林业", 
				allText:"采集树苗及植树的最大品质。",
				zeroText:"可以从树上获取树苗。", 
				thirtyText:"可以种植软木（云杉及松树）。", 
				sixtyText:"可以种植小型硬木（白桦及白杨）。", 
				ninetyText:"可以种植硬木（榆树、枫树及橡树)。", 
				hundredText:"使用林业技能时永久+5点幸运。",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Forestry.png",
				disabledImageSrc:"images/Forestry_u.png",
				value:0
			};
var advancedFarming = {
				idName: "advancedFarming", 
				displayName: "进阶农业", 
				allText:"制造物的品质。",
				zeroText:"可以研磨面粉。", 
				thirtyText:"可以提取蜂蜜。", 
				sixtyText:"可以使用犁。", 
				ninetyText:"可以抽丝。<br><br>可以使用石磨。", 
				hundredText:"产出物品的最大品质。",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Advanced_Farming.png",
				disabledImageSrc:"images/Advanced_Farming_u.png",
				value:0
			};
var alchemy = {
				idName: "alchemy", 
				displayName: "炼金术", 
				allText:"制作合剂的最大品质。",
				zeroText:"可以用3种原料调配双重效果的合剂。", 
				thirtyText:"可以调配有双重效果的合剂（1催化剂）。", 
				sixtyText:"可以调配有双重效果的合剂（1催化剂），可以制作石脑油爆炸物（品质大于60）、助熔剂及调味料。", 
				ninetyText:"可以使用各种原料和催化剂来调配各种合剂。", 
				hundredText:"可以点石成金（一天一块；1% 概率）。",
				skillType:"Crafting",
				treeName:"naturesLoreTree",
				imageSrc:"images/Alchemy.png",
				disabledImageSrc:"images/Alchemy_u.png",
				value:0
			};
var brewing = {
				idName: "brewing", 
				displayName: "酿造", 
				allText:"酿酒的最大品质。",
				zeroText:"可以酿造苹果酒。", 
				thirtyText:"可以酿造葡萄酒。", 
				sixtyText:"可以酿造蜂蜜酒。", 
				ninetyText:"可以酿造啤酒。", 
				hundredText:"可以酿造优质的（+20% 品质及独一无二的名字）酒（0.01% 概率）。",
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
