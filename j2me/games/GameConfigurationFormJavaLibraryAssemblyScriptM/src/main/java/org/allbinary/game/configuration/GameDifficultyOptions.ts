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
// import javax.microedition.lcdui.NullImage
// import org.allbinary.MIDPUtil
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.persistance.GameDifficultyFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList

@global export class GameDifficultyOptions extends CommandForm {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameDifficultyOptions";
    }
    meUtil: MIDPUtil | null = null;
    list: BasicArrayList | null = null;

    jfields_GameDifficultyOptions(): void {
    this.meUtil = MIDPUtil.getInstance();
    
    }
    

    jinit_GameDifficultyOptions_5(commandListener: CommandListener | null, title: string | null, list: BasicArrayList | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): GameDifficultyOptions {
        super.jinit_CommandForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        this.jfields_GameDifficultyOptions();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.list = list;
        this.update(); if (JThrowable.pending !== null) return this;
        this.initCommands(commandListener); if (JThrowable.pending !== null) return this;
        let gameDifficultyFactory: GameDifficultyFactory | null = GameDifficultyFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.setSelectedId(gameDifficultyFactory!.getLevel()); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    open(): void {
        super.open(); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        super.close(); if (JThrowable.pending !== null) return;
        this.save(); if (JThrowable.pending !== null) return;
    }
    

    save(): void {
        let gameDifficultyFactory: GameDifficultyFactory | null = GameDifficultyFactory.getInstance(); if (JThrowable.pending !== null) return;
        gameDifficultyFactory!.setLevel(this.getSelectedId()); if (JThrowable.pending !== null) return;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.deleteAll(); if (JThrowable.pending !== null) return;
        this.add(this.list, "Difficulty", Choice_JStatics.EXCLUSIVE); if (JThrowable.pending !== null) return;
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
        let METHOD_NAME: string | null = "addChoiceGroup";
        let NAME: string | null = "Adding Choice: ";
        let choiceGroup: ChoiceGroup | null = new ChoiceGroup().jinit_ChoiceGroup_4(name, option, StringUtil.getInstance()!.getArrayInstance(), NullImage.NULL_IMAGE_ARRAY); if (JThrowable.pending !== null) return null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        let anyType: Object | null = null;
        for (let index: i32 = 0; index < size; index++) {
            anyType = list!.objectArray![index];
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(NAME)!.append(JObject.jtoString(anyType))), this, METHOD_NAME); if (JThrowable.pending !== null) return null;
            choiceGroup!.append(JObject.jtoString(anyType), NullImage.NULL_IMAGE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return choiceGroup;
    }
    

    setSelectedId(id: i32): void {
        let choiceGroup: ChoiceGroup | null = changetype<ChoiceGroup | null>(this.get(0)); if (JThrowable.pending !== null) return;
        choiceGroup!.setSelectedIndex(id, true); if (JThrowable.pending !== null) return;
    }
    

    getSelectedId(): i32 {
        let choiceGroup: ChoiceGroup | null = changetype<ChoiceGroup | null>(this.get(0)); if (JThrowable.pending !== null) return 0;
        return choiceGroup!.getSelectedIndex();
    }
    

    getSelectedText(): i32 {
        let choiceGroup: ChoiceGroup | null = changetype<ChoiceGroup | null>(this.get(0)); if (JThrowable.pending !== null) return 0;
        let value: i32 = JInteger.valueOf1(choiceGroup!.getString(choiceGroup!.getSelectedIndex()))!.intValue(); if (JThrowable.pending !== null) return 0;
        return value;
    }
}

