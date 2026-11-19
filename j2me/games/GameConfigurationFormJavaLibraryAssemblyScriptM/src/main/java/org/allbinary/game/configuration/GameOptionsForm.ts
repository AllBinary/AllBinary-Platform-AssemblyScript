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
// package org.allbinary.game.configuration
// import javax.microedition.lcdui.Choice
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.LcduiItem
// import javax.microedition.lcdui.TextField
// import org.allbinary.MIDPUtil
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.feature.GameFeatureChoiceGroups
// import org.allbinary.game.configuration.feature.GameFeatureFormUtil
// import org.allbinary.game.configuration.feature.GameFeatureItemCommandListener
// import org.allbinary.game.configuration.feature.GameFeatureItemStateListener
// import org.allbinary.game.configuration.feature.SensorFeatureFactory
// import org.allbinary.game.configuration.persistance.GameConfigurationPersistanceSingleton
// import org.allbinary.game.configuration.persistance.KeyValuePersistance
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.command.MyCommandsFactory
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.input.gyro.OrientationData
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.HashtableUtil
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

@global export class GameOptionsForm extends CommandForm {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameOptionsForm";
    }
    meUtil: MIDPUtil | null = null;

    jfields_GameOptionsForm(): void {
    this.meUtil = MIDPUtil.getInstance();
    }
    

    jinit_GameOptionsForm_4(commandListener: CommandListener | null, title: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): GameOptionsForm {
        super.jinit_CommandForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        this.jfields_GameOptionsForm();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.addConfiguration(); if (JThrowable.pending !== null) return this;
        let gameFeatureFormUtil: GameFeatureFormUtil | null = GameFeatureFormUtil.getInstance(); if (JThrowable.pending !== null) return this;
        gameFeatureFormUtil!.addChoiceGroup(this, GameFeatureChoiceGroups.getExclusiveInstance()!.get(), Choice_JStatics.EXCLUSIVE); if (JThrowable.pending !== null) return this;
        gameFeatureFormUtil!.addChoiceGroup(this, GameFeatureChoiceGroups.getMultipleInstance()!.get(), Choice_JStatics.MULTIPLE); if (JThrowable.pending !== null) return this;
        this.initCommands(commandListener); if (JThrowable.pending !== null) return this;
        this.setItemStateListener(new GameFeatureItemStateListener().jinit_GameFeatureItemStateListener_1(this)); if (JThrowable.pending !== null) return this;
        this.addTextFieldsIfSimulated(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    closeClientInformation(abeClientInformation: AbeClientInformationInterface | null): void {
        super.close(); if (JThrowable.pending !== null) return;
        this.save(abeClientInformation); if (JThrowable.pending !== null) return;
    }
    

    addTextFieldsIfSimulated(): void {
        let key: string | null = OrientationData.getInstance()!.ORIENTATION_SENSOR_INPUT; if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = GameFeatureChoiceGroups.getExclusiveInstance()!.get(); if (JThrowable.pending !== null) return;
        if (hashtable != null) {
            let listCanBeNull: Object | null = hashtable!.get(key); if (JThrowable.pending !== null) return;
            if (listCanBeNull != null) {
                let list: BasicArrayList | null = changetype<BasicArrayList | null>(listCanBeNull);
                if (list!.contains(SensorFeatureFactory.getInstance()!.SIMULATED_ORIENTATION_SENSORS)) {
                    this.addTextFields(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addTextFields(): void {
        let hashtable: ABHashtable | null = GameConfigurationTextInput.getHashtable(); if (JThrowable.pending !== null) return;
        let size: i32 = hashtable!.size(); if (JThrowable.pending !== null) return;
        let objectArray: StaticArray<Object | null> | null = HashtableUtil.getInstance()!.getKeysAsArray(hashtable); if (JThrowable.pending !== null) return;
        let gameConfigurationTextInput: GameConfigurationTextInput | null = null;
        let textField: TextField | null = null;
        for (let index: i32 = 0; index < size; index++) {
            gameConfigurationTextInput = changetype<GameConfigurationTextInput | null>(hashtable!.get(changetype<Object | null>(objectArray![index]))); if (JThrowable.pending !== null) return;
            textField = new TextField().jinit_TextField_4(gameConfigurationTextInput!.getLabel(), gameConfigurationTextInput!.getText(), 30, TextField.ANY); if (JThrowable.pending !== null) return;
            this.meUtil!.appendItem(this, textField); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addConfiguration(): void {
        let METHOD_NAME: string | null = "addConfiguration";
        let NAME: string | null = "Name: ";
        let list: BasicArrayList | null = GameConfigurationSingleton.getInstance()!.getOptionsBasicArrayList(); if (JThrowable.pending !== null) return;
        let GAUGE_CHANGE: Command | null = MyCommandsFactory.getInstance()!.GAUGE_CHANGE; if (JThrowable.pending !== null) return;
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let gameConfiguration: GameConfiguration | null = null;
        let gauge: GameConfigurationGauge | null = null;
        for (let index: i32 = 0; index < size; index++) {
            gameConfiguration = changetype<GameConfiguration | null>(list!.objectArray![index]);
            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringMaker!.append(NAME)!.append(JObject.jtoString(gameConfiguration))), this, METHOD_NAME); if (JThrowable.pending !== null) return;
            gauge = new GameConfigurationGauge().jinit_GameConfigurationGauge_1(gameConfiguration); if (JThrowable.pending !== null) return;
            gauge!.setDefaultCommand(GAUGE_CHANGE); if (JThrowable.pending !== null) return;
            gauge!.setItemCommandListener(new GameFeatureItemCommandListener().jinit_GameFeatureItemCommandListener_1(this)); if (JThrowable.pending !== null) return;
            this.meUtil!.appendItem(this, gauge); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.CLOSE_OPTIONS); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.DEFAULT_OPTIONS); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    save(abeClientInformation: AbeClientInformationInterface | null): void {
        let size: i32 = this.size(); if (JThrowable.pending !== null) return;
        let item: LcduiItem | null = null;
        for (let index: i32 = 0; index < size; index++) {
            item = this.get(index); if (JThrowable.pending !== null) return;
            if ((item instanceof GameConfigurationGauge)) {
                GameConfigurationUtil.getInstance()!.update(changetype<GameConfigurationGauge | null>(item)); if (JThrowable.pending !== null) return;
            } else if ((item instanceof TextField)) {
                GameConfigurationTextInput.update(changetype<TextField | null>(item)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        GameConfigurationUtil.getInstance()!.updateCompetitionValue(); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return;
        let SCALE: GameConfiguration | null = GameConfigurationCentral.getInstance()!.SCALE; if (JThrowable.pending !== null) return;
        hashtable!.put(SCALE!.getName(), JInteger.toString1(SCALE!.getValue()!.intValue())); if (JThrowable.pending !== null) return;
        let keyValuePersistance: KeyValuePersistance | null = GameConfigurationPersistanceSingleton.getInstance(); if (JThrowable.pending !== null) return;
        keyValuePersistance!.clear(); if (JThrowable.pending !== null) return;
        keyValuePersistance!.loadAll(abeClientInformation); if (JThrowable.pending !== null) return;
        let list: BasicArrayList | null = keyValuePersistance!.getIds(); if (JThrowable.pending !== null) return;
        keyValuePersistance!.save(abeClientInformation, hashtable); if (JThrowable.pending !== null) return;
        let size2: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let integer: JInteger | null = null;
        for (let index: i32 = 0; index < size2; index++) {
            integer = changetype<JInteger | null>(list!.objectArray![index]);
            keyValuePersistance!.delete_(abeClientInformation, integer!.intValue()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

