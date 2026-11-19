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
// import javax.microedition.lcdui.ChoiceGroup
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.LcduiItem
// import javax.microedition.lcdui.NullImage
// import javax.microedition.lcdui.StringItem
// import org.allbinary.MIDPUtil
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.persistance.GamePersistanceSingleton
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList

@global export class LoadGameForm extends CommandForm {

    jclassName(): string {
        return "org.allbinary.game.configuration.LoadGameForm";
    }
    meUtil: MIDPUtil | null = null;
    areChoices: bool = false;

    jfields_LoadGameForm(): void {
    this.meUtil = MIDPUtil.getInstance();
    this.areChoices = false;
    }
    

    jinit_LoadGameForm_4(commandListener: CommandListener | null, title: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): LoadGameForm {
        super.jinit_CommandForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        this.jfields_LoadGameForm();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.update(); if (JThrowable.pending !== null) return this;
        this.initCommands(commandListener); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.LOAD_FILE); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.DELETE_FILE); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        let list: BasicArrayList | null = GamePersistanceSingleton.getInstance()!.getIds(); if (JThrowable.pending !== null) return;
        this.deleteAll(); if (JThrowable.pending !== null) return;
        if (list!.size() > 0) {
            this.add(list, "Select A Saved Game", Choice_JStatics.EXCLUSIVE); if (JThrowable.pending !== null) return;
            this.areChoices = true;
        } else {
            this.meUtil!.appendItem(this, new StringItem().jinit_StringItem_3("No Saved Games", StringUtil.getInstance()!.EMPTY_STRING, LcduiItem.PLAIN)); if (JThrowable.pending !== null) return;
            this.areChoices = false;
        } if (JThrowable.pending !== null) return;
        super.update(); if (JThrowable.pending !== null) return;
    }
    

    add(list: BasicArrayList | null, name: string | null, option: i32): void {
        let choiceGroup: ChoiceGroup | null = this.getChoiceGroup(list, name, option); if (JThrowable.pending !== null) return;
        if (list!.size() > 0) {
            choiceGroup!.setSelectedIndex(0, true); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.meUtil!.appendItem(this, choiceGroup); if (JThrowable.pending !== null) return;
    }
    

    getChoiceGroup(list: BasicArrayList | null, name: string | null, option: i32): ChoiceGroup | null {
        let METHOD_NAME: string | null = "getChoiceGroup";
        let ADDING_CHOICE: string | null = "Adding Choice: ";
        let choiceGroup: ChoiceGroup | null = new ChoiceGroup().jinit_ChoiceGroup_4(name, option, StringUtil.getInstance()!.getArrayInstance(), NullImage.NULL_IMAGE_ARRAY); if (JThrowable.pending !== null) return null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let anyType: Object | null = list!.objectArray![index];
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(ADDING_CHOICE)!.append(JObject.jtoString(anyType))), this, METHOD_NAME); if (JThrowable.pending !== null) return null;
            choiceGroup!.append(JObject.jtoString(anyType), NullImage.NULL_IMAGE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return choiceGroup;
    }
    

    getSelectedId(): i32 {
        if (this.areChoices) {
            let choiceGroup: ChoiceGroup | null = changetype<ChoiceGroup | null>(this.get(0)); if (JThrowable.pending !== null) return 0;
            return choiceGroup!.getSelectedIndex();
        } else {
            return -1;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    getSelectedText(): i32 {
        if (this.areChoices) {
            let choiceGroup: ChoiceGroup | null = changetype<ChoiceGroup | null>(this.get(0)); if (JThrowable.pending !== null) return 0;
            let value: i32 = JInteger.valueOf1(choiceGroup!.getString(choiceGroup!.getSelectedIndex()))!.intValue(); if (JThrowable.pending !== null) return 0;
            return value;
        } else {
            return -1;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
}

