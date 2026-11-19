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

@global export class InGameFeatureChoiceGroups extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.InGameFeatureChoiceGroups";
    }
    @lazy static jv_gameFeatureChoiceGroupsExclusive: InGameFeatureChoiceGroups | null = null;
    @lazy static js_gameFeatureChoiceGroupsExclusive: bool = false;
    static get gameFeatureChoiceGroupsExclusive(): InGameFeatureChoiceGroups | null {
        if (!InGameFeatureChoiceGroups.js_gameFeatureChoiceGroupsExclusive) {
            InGameFeatureChoiceGroups.js_gameFeatureChoiceGroupsExclusive = true;
            InGameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsExclusive = new InGameFeatureChoiceGroups().jinit_InGameFeatureChoiceGroups_0();
        }
        return InGameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsExclusive;
    }
    static set gameFeatureChoiceGroupsExclusive(value: InGameFeatureChoiceGroups | null) {
        InGameFeatureChoiceGroups.js_gameFeatureChoiceGroupsExclusive = true;
        InGameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsExclusive = value;
    }
    @lazy static jv_gameFeatureChoiceGroupsMultiple: InGameFeatureChoiceGroups | null = null;
    @lazy static js_gameFeatureChoiceGroupsMultiple: bool = false;
    static get gameFeatureChoiceGroupsMultiple(): InGameFeatureChoiceGroups | null {
        if (!InGameFeatureChoiceGroups.js_gameFeatureChoiceGroupsMultiple) {
            InGameFeatureChoiceGroups.js_gameFeatureChoiceGroupsMultiple = true;
            InGameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsMultiple = new InGameFeatureChoiceGroups().jinit_InGameFeatureChoiceGroups_0();
        }
        return InGameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsMultiple;
    }
    static set gameFeatureChoiceGroupsMultiple(value: InGameFeatureChoiceGroups | null) {
        InGameFeatureChoiceGroups.js_gameFeatureChoiceGroupsMultiple = true;
        InGameFeatureChoiceGroups.jv_gameFeatureChoiceGroupsMultiple = value;
    }
    hashtable: ABHashtable | null = null;

    jfields_InGameFeatureChoiceGroups(): void {
    this.hashtable = StdUtil.getInstance()!.createHashtable();
    }
    

    jinit_InGameFeatureChoiceGroups_0(): InGameFeatureChoiceGroups {
        super.jinit_JObject_0();
        this.jfields_InGameFeatureChoiceGroups();
        return this;
    }
    

    static getExclusiveInstance(): InGameFeatureChoiceGroups | null {
        return InGameFeatureChoiceGroups.gameFeatureChoiceGroupsExclusive;
    }
    

    static getMultipleInstance(): InGameFeatureChoiceGroups | null {
        return InGameFeatureChoiceGroups.gameFeatureChoiceGroupsMultiple;
    }
    

    get(): ABHashtable | null {
        return this.hashtable;
    }
    

    add(name: string | null, list: BasicArrayList | null): void {
        this.hashtable!.put(name, list); if (JThrowable.pending !== null) return;
    }
}

