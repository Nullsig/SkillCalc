function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};

function Node(data) {
    this.data = data;
	this.parent = null;
	this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function 
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
         
        // step 1
    })(this._root);
}; 

Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
     
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
 
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
};

Node.prototype.render = function(target){
	var li = $("<li></li>");
    var theTemplateScript = $("#li-template").html();
	var theTemplate = Handlebars.compile(theTemplateScript);
	var theCompiledHtml = theTemplate(this.data);
	li.append(theCompiledHtml);
	li.appendTo(target);
	if(this.children.length > 0){
		var ul = $("<ul></ul>");
		ul.appendTo(li);
		$.each(this.children, function(key, val) {			
            val.render(ul);
        });
	}
}

Tree.prototype.render = function(target){
	var ul = $("<ul></ul>");
	this._root.render(ul);
	ul.appendTo(target);
}


function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}


function initializeNode(node){
	$( "#"+node.data.idName).spinner({min:0,
									  max:100,
									  page:10,
									  stop: function(event,ui){
													inputChange(this.id,this.value);
												},
									  icons: { up: "ui-icon-plus", down: "ui-icon-minus" }
									  });				
}

function repaintTreeText_callback(node){
	var sourceData = eval(node.data.idName);

	node.data.displayName = sourceData.displayName;
	node.data.allText = sourceData.allText;
	node.data.zeroText = sourceData.zeroText;
	node.data.thirtyText = sourceData.thirtyText;
	node.data.sixtyText = sourceData.sixtyText;
	node.data.ninetyText = sourceData.ninetyText;
	node.data.hundredText = sourceData.hundredText;
}

/*Crafting Trees*/
var artisanTree = new Tree(artisan);
artisanTree.add(carpentry,artisan,artisanTree.traverseBF);
artisanTree.add(bowcraft,carpentry,artisanTree.traverseBF);
artisanTree.add(warfareEng,bowcraft,artisanTree.traverseBF);
artisanTree.add(construction,artisan,artisanTree.traverseBF);
artisanTree.add(masonry,construction,artisanTree.traverseBF);
artisanTree.add(architecture,masonry,artisanTree.traverseBF);
artisanTree.add(buildingMaintain,masonry,artisanTree.traverseBF);
artisanTree.add(digging,artisan,artisanTree.traverseBF);
artisanTree.add(mining,digging,artisanTree.traverseBF);
artisanTree.add(preciousProsp,mining,artisanTree.traverseBF);
artisanTree.add(jewelry,mining,artisanTree.traverseBF);
artisanTree.add(materialsPrep,artisan,artisanTree.traverseBF);
artisanTree.add(smelting,materialsPrep,artisanTree.traverseBF);
artisanTree.add(forging,smelting,artisanTree.traverseBF);
artisanTree.add(armorsmithing,smelting,artisanTree.traverseBF);


var naturesLoreTree = new Tree(naturesLore);
naturesLoreTree.add(herbalism,naturesLore,naturesLoreTree.traverseBF);
naturesLoreTree.add(healing,herbalism,naturesLoreTree.traverseBF);
naturesLoreTree.add(alchemy,healing,naturesLoreTree.traverseBF);
naturesLoreTree.add(farming,naturesLore,naturesLoreTree.traverseBF);
naturesLoreTree.add(forestry,farming,naturesLoreTree.traverseBF);
naturesLoreTree.add(advancedFarming,farming,naturesLoreTree.traverseBF);
naturesLoreTree.add(brewing,advancedFarming,naturesLoreTree.traverseBF);
naturesLoreTree.add(cooking,advancedFarming,naturesLoreTree.traverseBF);

var huntingTree = new Tree(hunting);
huntingTree.add(animalLore,hunting,huntingTree.traverseBF);
huntingTree.add(procuration,animalLore,huntingTree.traverseBF);
huntingTree.add(warHorseHandling,procuration,huntingTree.traverseBF);
huntingTree.add(tailoring,procuration,huntingTree.traverseBF);

/*Combat Trees*/
var chivalryTree = new Tree(chivalry);
chivalryTree.add(spearMastery,chivalry,chivalryTree.traverseBF);
chivalryTree.add(mountedFightingMastery,chivalry,chivalryTree.traverseBF);
chivalryTree.add(bladesMastery,chivalry,chivalryTree.traverseBF);
chivalryTree.add(poleaxesMastery,spearMastery,chivalryTree.traverseBF);
chivalryTree.add(unitAndFormation,poleaxesMastery,chivalryTree.traverseBF);
chivalryTree.add(lancing,mountedFightingMastery,chivalryTree.traverseBF);
chivalryTree.add(heavyHorseHandling,mountedFightingMastery,chivalryTree.traverseBF);
chivalryTree.add(shieldMastery,bladesMastery,chivalryTree.traverseBF);
chivalryTree.add(piercingMastery,bladesMastery,chivalryTree.traverseBF);

var warriorTree = new Tree(warrior);
warriorTree.add(demolition,warrior,warriorTree.traverseBF);
warriorTree.add(twoHandedAxes,warrior,warriorTree.traverseBF);
warriorTree.add(crossbows,warrior,warriorTree.traverseBF);
warriorTree.add(bows,crossbows,warriorTree.traverseBF);
warriorTree.add(twoHandedBlades,twoHandedAxes,warriorTree.traverseBF);
warriorTree.add(twoHandedBlunt,twoHandedAxes,warriorTree.traverseBF);
warriorTree.add(combatPrep,crossbows,warriorTree.traverseBF);
warriorTree.add(warCries,twoHandedBlunt,warriorTree.traverseBF);

var chainmailArmorsTree = new Tree(chainmailArmors);
var scaleArmorsTree = new Tree(scaleArmors);
var plateArmorsTree = new Tree(plateArmors);
var equipmentMaintainTree = new Tree(equipmentMaintain);
var battleSurvivalTree = new Tree(battleSurvival);
var drillTree = new Tree(drill);


/*Minor Trees*/
var movementTree = new Tree(movement);
var generalActionsTree = new Tree(generalActions);
var swimmingTree = new Tree(swimming);
var authorityTree = new Tree(authority);
var horsebackRidingTree = new Tree(horsebackRiding);
var pietyTree = new Tree(piety);
var mentoringTree = new Tree(mentoring);
var artsTree = new Tree(arts);

