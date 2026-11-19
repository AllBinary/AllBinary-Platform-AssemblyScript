/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.configuration.feature
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList

@global export class GameFeatureChoiceGroups extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.GameFeatureChoiceGroups";
    }
    @lazy static jv_gameFeatureChoiceGroupsExclusive: GameFeatureChoiceGroups | null = null;
    @lazy static js_gameFeatureChoiceGroupsExclusive: bool = false;
    static get gameFeatureChoiceGroupsExclusive(): GameFeatureChoiceGroups | null {
        if (!GameFeatureChoiceGroups.js_gameFeatureChoiceGroupsExclusive) {
            GameFeatureChoiceGroups.js_gameFeatureChoiceGroupsExclusive = true;
            GameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsExclusive = new GameFeatureChoiceGroups().jinit_GameFeatureChoiceGroups_0();
        }
        return GameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsExclusive;
    }
    static set gameFeatureChoiceGroupsExclusive(value: GameFeatureChoiceGroups | null) {
        GameFeatureChoiceGroups.js_gameFeatureChoiceGroupsExclusive = true;
        GameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsExclusive = value;
    }
    @lazy static jv_gameFeatureChoiceGroupsMultiple: GameFeatureChoiceGroups | null = null;
    @lazy static js_gameFeatureChoiceGroupsMultiple: bool = false;
    static get gameFeatureChoiceGroupsMultiple(): GameFeatureChoiceGroups | null {
        if (!GameFeatureChoiceGroups.js_gameFeatureChoiceGroupsMultiple) {
            GameFeatureChoiceGroups.js_gameFeatureChoiceGroupsMultiple = true;
            GameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsMultiple = new GameFeatureChoiceGroups().jinit_GameFeatureChoiceGroups_0();
        }
        return GameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsMultiple;
    }
    static set gameFeatureChoiceGroupsMultiple(value: GameFeatureChoiceGroups | null) {
        GameFeatureChoiceGroups.js_gameFeatureChoiceGroupsMultiple = true;
        GameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsMultiple = value;
    }
    hashtable: ABHashtable | null = null;

    jfields_GameFeatureChoiceGroups(): void {
    this.hashtable = StdUtil.getInstance()!.createHashtable();
    }
    

    jinit_GameFeatureChoiceGroups_0(): GameFeatureChoiceGroups {
        super.jinit_JObject_0();
        this.jfields_GameFeatureChoiceGroups();
        return this;
    }
    

    static getExclusiveInstance(): GameFeatureChoiceGroups | null {
        return GameFeatureChoiceGroups.gameFeatureChoiceGroupsExclusive;
    }
    

    static getMultipleInstance(): GameFeatureChoiceGroups | null {
        return GameFeatureChoiceGroups.gameFeatureChoiceGroupsMultiple;
    }
    

    get(): ABHashtable | null {
        return this.hashtable;
    }
    

    add(name: string | null, list: BasicArrayList | null): void {
        this.hashtable!.put(name, list); if (JThrowable.pending !== null) return;
    }
}

