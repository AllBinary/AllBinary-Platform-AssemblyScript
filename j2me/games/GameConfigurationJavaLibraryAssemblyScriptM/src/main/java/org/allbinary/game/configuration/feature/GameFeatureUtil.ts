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
// import java.util.Enumeration
// import javax.microedition.lcdui.ChoiceGroup
// import org.allbinary.TsUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.EnumerationUtil
// import org.allbinary.util.HashtableUtil

@global export class GameFeatureUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.GameFeatureUtil";
    }
    @lazy static jv_instance: GameFeatureUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameFeatureUtil | null {
        if (!GameFeatureUtil.js_instance) {
            GameFeatureUtil.js_instance = true;
            GameFeatureUtil.jv_instance = new GameFeatureUtil().jinit_GameFeatureUtil_0();
        }
        return GameFeatureUtil.jv_instance;
    }
    static set instance(value: GameFeatureUtil | null) {
        GameFeatureUtil.js_instance = true;
        GameFeatureUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    tsUtil: TsUtil | null = null;
    enumerationUtil: EnumerationUtil | null = null;
    ON_GAME_FEATURE_CHANGE: string | null = null;
    GAME_FEATURE_CHANGED: string | null = null;

    jfields_GameFeatureUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.tsUtil = TsUtil.getInstance();
    this.enumerationUtil = EnumerationUtil.getInstance();
    this.ON_GAME_FEATURE_CHANGE = "onGameFeatureChange";
    this.GAME_FEATURE_CHANGED = "Game Feature Changed: ";
    }

    jinit_GameFeatureUtil_0(): GameFeatureUtil {
        super.jinit_JObject_0();
        this.jfields_GameFeatureUtil();
        return this;
    }
    

    static getInstance(): GameFeatureUtil | null {
        return GameFeatureUtil.instance;
    }
    

    setDefault(choiceGroup: ChoiceGroup | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let METHOD_NAME: string | null = "setDefault";
        let SELECTED_ARRAY_RETURN: string | null = "selectedArray_return[";
        let SELECTED_SEP: string | null = "] = ";
        let selectedArray_return: StaticArray<bool> | null = new StaticArray<bool>(choiceGroup!.size()); if (JThrowable.pending !== null) return;
        let total: i32 = choiceGroup!.getSelectedFlags(selectedArray_return); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Multiple Total Choices: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(total); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < selectedArray_return!.length; index++) {
            let isSelected: bool = selectedArray_return![index];
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SELECTED_ARRAY_RETURN); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SELECTED_SEP); if (JThrowable.pending !== null) return;
            stringBuffer!.appendboolean(isSelected); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
            let selectedChoiceLabel: string | null = choiceGroup!.getString(index); if (JThrowable.pending !== null) return;
            let gameFeature: Feature | null = Feature.getInstance1(selectedChoiceLabel); if (JThrowable.pending !== null) return;
            if (features!.isDefault(gameFeature)) {
                features!.add(gameFeature); if (JThrowable.pending !== null) return;
                choiceGroup!.setSelectedIndex(index, true); if (JThrowable.pending !== null) return;
            } else {
                features!.remove(gameFeature); if (JThrowable.pending !== null) return;
                choiceGroup!.setSelectedIndex(index, false); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateMultiple(choiceGroup: ChoiceGroup | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let METHOD_NAME: string | null = "updateMultiple";
        let SELECTED_ARRAY_RETURN: string | null = "selectedArray_return[";
        let SELECTED_SEP: string | null = "] = ";
        let selectedArray_return: StaticArray<bool> | null = new StaticArray<bool>(choiceGroup!.size()); if (JThrowable.pending !== null) return;
        let total: i32 = choiceGroup!.getSelectedFlags(selectedArray_return); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Multiple Total Choices: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(total); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < selectedArray_return!.length; index++) {
            let isSelected: bool = selectedArray_return![index];
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SELECTED_ARRAY_RETURN); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SELECTED_SEP); if (JThrowable.pending !== null) return;
            stringBuffer!.appendboolean(isSelected); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
            let selectedChoiceLabel: string | null = choiceGroup!.getString(index); if (JThrowable.pending !== null) return;
            let gameFeature: Feature | null = Feature.getInstance1(selectedChoiceLabel); if (JThrowable.pending !== null) return;
            if (!isSelected && features!.isFeature(gameFeature)) {
                features!.remove(gameFeature); if (JThrowable.pending !== null) return;
            } else if (isSelected && !features!.isFeature(gameFeature)) {
                features!.add(gameFeature); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateExclusiveForChoiceGroup(choiceGroup: ChoiceGroup | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let METHOD_NAME: string | null = "updateExclusive";
        let SELECTED_ARRAY_RETURN: string | null = "selectedArray_return[";
        let SELECTED_SEP: string | null = "] = ";
        let selectedArray_return: StaticArray<bool> | null = new StaticArray<bool>(choiceGroup!.size()); if (JThrowable.pending !== null) return;
        let total: i32 = choiceGroup!.getSelectedFlags(selectedArray_return); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Exclusive Total Choices: 1=="); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(total); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < selectedArray_return!.length; index++) {
            let isSelected: bool = selectedArray_return![index];
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SELECTED_ARRAY_RETURN); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return;
            stringBuffer!.append(SELECTED_SEP); if (JThrowable.pending !== null) return;
            stringBuffer!.appendboolean(isSelected); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
            if (isSelected) {
                let selectedChoiceLabel: string | null = choiceGroup!.getString(index); if (JThrowable.pending !== null) return;
                this.updateExclusive(selectedChoiceLabel); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isExclusive(itemLabel: string | null): bool {
        let enumeration: JEnumeration | null = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.keys(); if (JThrowable.pending !== null) return false;
        let name: string | null = null;
        while (this.enumerationUtil!.hasMoreElements(enumeration)) {
            name = changetype<string | null>(this.enumerationUtil!.nextElement(enumeration)); if (JThrowable.pending !== null) return false;
            if (this.tsUtil!.compareTo(itemLabel, name) == 0) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    updateExclusive(selectedChoiceLabel: string | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(selectedChoiceLabel)), this, "updateExclusive"); if (JThrowable.pending !== null) return;
        let gameFeature: Feature | null = Feature.getInstance1(selectedChoiceLabel); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = GameFeatureChoiceGroups.getExclusiveInstance()!.get(); if (JThrowable.pending !== null) return;
        let objectArray: StaticArray<Object | null> | null = HashtableUtil.getInstance()!.getKeysAsArray(hashtable); if (JThrowable.pending !== null) return;
        let basicArrayList: BasicArrayList | null = null;
        let anyType: Object | null = null;
        let size: i32 = objectArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            anyType = changetype<Object | null>(objectArray![index]);
            basicArrayList = changetype<BasicArrayList | null>(hashtable!.get(anyType)); if (JThrowable.pending !== null) return;
            this.updateExclusiveList(gameFeature, basicArrayList); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateExclusiveList(gameFeature: Feature | null, list: BasicArrayList | null): void {
        if (list!.contains(gameFeature)) {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
            let addIndex: i32 = list!.indexOf(gameFeature); if (JThrowable.pending !== null) return;
            let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
            for (let index: i32 = 0; index < size; index++) {
                if (addIndex != index) {
                    features!.remove(changetype<Feature | null>(list!.objectArray![index])); if (JThrowable.pending !== null) return;
                } else {
                    features!.add(changetype<Feature | null>(list!.objectArray![index])); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

