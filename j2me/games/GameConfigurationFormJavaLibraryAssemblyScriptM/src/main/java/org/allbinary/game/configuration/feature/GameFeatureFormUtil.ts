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
// import javax.microedition.lcdui.ChoiceGroup
// import javax.microedition.lcdui.LcduiItem
// import javax.microedition.lcdui.NullImage
// import org.allbinary.MIDPUtil
// import org.allbinary.game.configuration.GameConfigurationGauge
// import org.allbinary.game.configuration.GameConfigurationUtil
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.HashtableUtil

@global export class GameFeatureFormUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.GameFeatureFormUtil";
    }
    @lazy static jv_instance: GameFeatureFormUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameFeatureFormUtil | null {
        if (!GameFeatureFormUtil.js_instance) {
            GameFeatureFormUtil.js_instance = true;
            GameFeatureFormUtil.jv_instance = new GameFeatureFormUtil().jinit_GameFeatureFormUtil_0();
        }
        return GameFeatureFormUtil.jv_instance;
    }
    static set instance(value: GameFeatureFormUtil | null) {
        GameFeatureFormUtil.js_instance = true;
        GameFeatureFormUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    meUtil: MIDPUtil | null = null;

    jfields_GameFeatureFormUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.meUtil = MIDPUtil.getInstance();
    }

    jinit_GameFeatureFormUtil_0(): GameFeatureFormUtil {
        super.jinit_JObject_0();
        this.jfields_GameFeatureFormUtil();
        return this;
    }
    

    static getInstance(): GameFeatureFormUtil | null {
        return GameFeatureFormUtil.instance;
    }
    

    getChoiceGroup(hashtable: ABHashtable | null, name: string | null, option: i32): ChoiceGroup | null {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let choiceGroup: ChoiceGroup | null = new ChoiceGroup().jinit_ChoiceGroup_4(name, option, StringUtil.getInstance()!.getArrayInstance(), NullImage.NULL_IMAGE_ARRAY); if (JThrowable.pending !== null) return null;
        let list: BasicArrayList | null = changetype<BasicArrayList | null>(hashtable!.get(changetype<Object | null>(name))); if (JThrowable.pending !== null) return null;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return null;
        let ADD_CHOICE: string | null = ": Adding Choice: ";
        let GET_CHOICE_GROUP: string | null = "getChoiceGroup";
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let gameFeature: Feature | null = changetype<Feature | null>(list!.objectArray![index]);
            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
            this.logUtil!.putF(JObject.jtoString(stringMaker!.append(name)!.append(ADD_CHOICE)!.append(JObject.jtoString(gameFeature))), this, GET_CHOICE_GROUP); if (JThrowable.pending !== null) return null;
            choiceGroup!.append(JObject.jtoString(gameFeature), NullImage.NULL_IMAGE); if (JThrowable.pending !== null) return null;
            if (features!.isFeature(gameFeature)) {
                choiceGroup!.setSelectedIndex(index, true); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return choiceGroup;
    }
    

    addChoiceGroup(form: CommandForm | null, hashtable: ABHashtable | null, option: i32): void {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let ADDING_CHOICE_GROUP: string | null = "Adding Choice Group: ";
        let ADD_CHOICE_GROUP: string | null = "addChoiceGroup";
        let size: i32 = hashtable!.size(); if (JThrowable.pending !== null) return;
        let objectArray: StaticArray<Object | null> | null = HashtableUtil.getInstance()!.getKeysAsArray(hashtable); if (JThrowable.pending !== null) return;
        let name: string | null = null;
        for (let index: i32 = 0; index < size; index++) {
            name = changetype<string | null>(objectArray![index]);
            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringMaker!.append(ADDING_CHOICE_GROUP)!.append(name)), this, ADD_CHOICE_GROUP); if (JThrowable.pending !== null) return;
            this.meUtil!.appendItem(form, this.getChoiceGroup(hashtable, name, option)); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setDefault(form: CommandForm | null): void {
        let size: i32 = form!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let item: LcduiItem | null = form!.get(index); if (JThrowable.pending !== null) return;
            if ((item instanceof GameConfigurationGauge)) {
                GameConfigurationUtil.getInstance()!.setDefault(changetype<GameConfigurationGauge | null>(item)); if (JThrowable.pending !== null) return;
            } else if ((item instanceof ChoiceGroup)) {
                GameFeatureUtil.getInstance()!.setDefault(changetype<ChoiceGroup | null>(item)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

