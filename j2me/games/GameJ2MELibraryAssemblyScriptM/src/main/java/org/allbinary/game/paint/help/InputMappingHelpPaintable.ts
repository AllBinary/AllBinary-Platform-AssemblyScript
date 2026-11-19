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
// package org.allbinary.game.paint.help
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.mapping.GameInputMapping
// import org.allbinary.game.input.mapping.PersistentInputMapping
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorUtil
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class InputMappingHelpPaintable extends HelpPaintable {

    jclassName(): string {
        return "org.allbinary.game.paint.help.InputMappingHelpPaintable";
    }
    @lazy static readonly AND: string | null = " and ";
    @lazy static readonly SEP: string | null = ", ";
    @lazy static readonly MORE_THAN_TWO_IN_LIST_AND: string | null = ", and ";
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    commonSeps: CommonSeps | null = null;
    stringUtil: StringUtil | null = null;
    basicColorFactory: BasicColorFactory | null = null;
    NONE: GameKey | null = null;
    EMPTY_STRING: string | null = null;
    gameInputMappingArray: StaticArray<GameInputMapping | null> | null = null;
    keyMappingArray: StaticArray<BasicArrayList | null> | null = null;
    actionBasicColor: StaticArray<BasicColor | null> | null = null;
    inputBasicColorArray: StaticArray<StaticArray<BasicColor | null> | null> | null = null;
    selectedBasicColor: BasicColor | null = null;
    updateMyFontProperties: UpdateMyFontProperties | null = null;

    jfields_InputMappingHelpPaintable(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.commonSeps = CommonSeps.getInstance();
    this.stringUtil = StringUtil.getInstance();
    this.basicColorFactory = BasicColorFactory.getInstance();
    this.NONE = GameKeyFactory.getInstance()!.NONE;
    this.EMPTY_STRING = StringUtil.getInstance()!.EMPTY_STRING;
    
    this.keyMappingArray = new StaticArray<BasicArrayList | null>(0);
    this.actionBasicColor = BasicColorUtil.getInstance()!.ZERO_ARRAY;
    this.inputBasicColorArray = JArrays.new2<BasicColor | null>(0, 0);
    this.selectedBasicColor = null;
    this.updateMyFontProperties = new UpdateMyFontProperties().jinit_UpdateMyFontProperties_0();
    }
    

    jinit_InputMappingHelpPaintable_3(gameInputMappingArray: StaticArray<GameInputMapping | null> | null, backgroundBasicColor: BasicColor | null, basicColor: BasicColor | null): InputMappingHelpPaintable {
        super.jinit_HelpPaintable_3("Input Mapping", backgroundBasicColor, basicColor);
        this.jfields_InputMappingHelpPaintable();
        this.gameInputMappingArray = gameInputMappingArray;
        this.update(this.NONE, this.NONE); if (JThrowable.pending !== null) return this;
        if (backgroundBasicColor == this.basicColorFactory!.WHITE || basicColor == this.basicColorFactory!.WHITE) {
            this.selectedBasicColor = this.basicColorFactory!.RED;
        } else {
            this.selectedBasicColor = this.basicColorFactory!.WHITE;
        }
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        let updateMyFontProperties: UpdateMyFontProperties | null = new UpdateMyFontProperties().jinit_UpdateMyFontProperties_0(); if (JThrowable.pending !== null) return;
        updateMyFontProperties!.charHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let inputInfo: StaticArray<string | null> | null = this.inputInfo;
        let size: i32 = inputInfo!.length;
        updateMyFontProperties!.actionStringArray = new StaticArray<string | null>(size);
        updateMyFontProperties!.keymappingBeginWidthArray = new StaticArray<i32>(size);
        updateMyFontProperties!.actionStringDeltaXArray = new StaticArray<i32>(size);
        updateMyFontProperties!.inputDeltaXArray = JArrays.new2<i32>(size, 0);
        updateMyFontProperties!.sepArray = JArrays.new2<string | null>(size, 0);
        updateMyFontProperties!.sepWidthArray = JArrays.new2<i32>(size, 0);
        let list: BasicArrayList | null = null;
        let keyMappings: string | null = null;
        let actionString: string | null = null;
        let input: Input | null = null;
        let size2: i32 = 0;
        for (let index: i32 = 0; index < size; index++) {
            list = this.keyMappingArray![index];
            keyMappings = this.get(list); if (JThrowable.pending !== null) return;
            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
            actionString = JObject.jtoString(stringMaker!.append(inputInfo![index])!.append(this.commonSeps!.COLON)!.append(this.commonSeps!.SPACE)!.append(this.commonSeps!.SPACE)); if (JThrowable.pending !== null) return;
            updateMyFontProperties!.actionStringArray![index] = actionString;
            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
            updateMyFontProperties!.keymappingBeginWidthArray![index] = (font!.stringWidth(JObject.jtoString(stringMaker!.append(updateMyFontProperties!.actionStringArray![index])!.append(keyMappings))) >> 1); if (JThrowable.pending !== null) return;
            updateMyFontProperties!.actionStringDeltaXArray![index] = font!.stringWidth(actionString); if (JThrowable.pending !== null) return;
            size2 = list!.size(); if (JThrowable.pending !== null) return;
            updateMyFontProperties!.inputDeltaXArray![index] = new StaticArray<i32>(size2);
            updateMyFontProperties!.sepArray![index] = new StaticArray<string | null>(size2);
            updateMyFontProperties!.sepWidthArray![index] = new StaticArray<i32>(size2);
            for (let index2: i32 = 0; index2 < size2; index2++) {
                input = changetype<Input | null>(list!.objectArray![index2]);
                updateMyFontProperties!.inputDeltaXArray![index]![index2] = font!.stringWidth(input!.getName()); if (JThrowable.pending !== null) return;
                updateMyFontProperties!.sepArray![index]![index2] = this.EMPTY_STRING;
                if (index2 + 1 < list!.size()) {
                    if (list!.size() == 2) {
                        updateMyFontProperties!.sepArray![index]![index2] = InputMappingHelpPaintable.AND;
                    } else {
                        if (index2 + 2 == list!.size()) {
                            updateMyFontProperties!.sepArray![index]![index2] = InputMappingHelpPaintable.MORE_THAN_TWO_IN_LIST_AND;
                        } else {
                            updateMyFontProperties!.sepArray![index]![index2] = InputMappingHelpPaintable.SEP;
                        } if (JThrowable.pending !== null) return;
                    } if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                if (updateMyFontProperties!.sepArray![index]![index2] != this.EMPTY_STRING) {
                    updateMyFontProperties!.sepWidthArray![index]![index2] = font!.stringWidth(updateMyFontProperties!.sepArray![index]![index2]); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.updateMyFontProperties = updateMyFontProperties;
        super.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
    }
    

    update(selectedGameKey: GameKey | null, selectedInput: Input | null): void {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append("selected GameKey: ")!.append(this.stringUtil!.toString1(selectedGameKey))!.append(" Input: ")!.append(this.stringUtil!.toString1(selectedInput))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
        let gameKeyMapping: PersistentInputMapping | null = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance(); if (JThrowable.pending !== null) return;
        let size: i32 = this.gameInputMappingArray!.length;
        let keyInfo: StaticArray<string | null> | null = new StaticArray<string | null>(size);
        let keyMappingArray: StaticArray<BasicArrayList | null> | null = new StaticArray<BasicArrayList | null>(size);
        let actionBasicColor: StaticArray<BasicColor | null> | null = new StaticArray<BasicColor | null>(size);
        let inputBasicColorArray: StaticArray<StaticArray<BasicColor | null> | null> | null = new StaticArray<StaticArray<BasicColor | null> | null>(size);
        let gameInputMapping: GameInputMapping | null = null;
        let gameKey: GameKey | null = null;
        let list: BasicArrayList | null = null;
        for (let index: i32 = 0; index < size; index++) {
            gameInputMapping = this.gameInputMappingArray![index];
            gameKey = gameInputMapping!.getGameKey(); if (JThrowable.pending !== null) return;
            list = gameKeyMapping!.getInputMapping()!.getMappedInput(gameKey); if (JThrowable.pending !== null) return;
            let size2: i32 = list!.size(); if (JThrowable.pending !== null) return;
            inputBasicColorArray![index] = new StaticArray<BasicColor | null>(size2);
            for (let index2: i32 = 0; index2 < size2; index2++) {
                inputBasicColorArray![index]![index2] = this.basicColor;
            }
            if (gameKey == selectedGameKey) {
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringMaker!.append("Found: selected GameKey: ")!.append(this.stringUtil!.toString1(selectedGameKey))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                actionBasicColor![index] = this.selectedBasicColor;
                let indexOfSelectedInput: i32 = list!.indexOf(selectedInput); if (JThrowable.pending !== null) return;
                if (indexOfSelectedInput >= 0) {
                    stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                    this.logUtil!.putF(JObject.jtoString(stringMaker!.append("Found: selected Input: ")!.append(this.stringUtil!.toString1(selectedInput))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                    inputBasicColorArray![index]![indexOfSelectedInput] = this.selectedBasicColor;
                } if (JThrowable.pending !== null) return;
            } else {
                actionBasicColor![index] = this.basicColor;
            } if (JThrowable.pending !== null) return;
            keyInfo![index] = gameInputMapping!.getName(); if (JThrowable.pending !== null) return;
            keyMappingArray![index] = list;
        } if (JThrowable.pending !== null) return;
        this.keyMappingArray = keyMappingArray;
        this.actionBasicColor = actionBasicColor;
        this.inputBasicColorArray = inputBasicColorArray;
        super.setInputInfoP(keyInfo); if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    get(keyList: BasicArrayList | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let key: Input | null = null;
        let size: i32 = keyList!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            key = changetype<Input | null>(keyList!.objectArray![index]);
            stringBuffer!.append(key!.getName()); if (JThrowable.pending !== null) return null;
            if (index + 1 < keyList!.size()) {
                if (keyList!.size() == 2) {
                    stringBuffer!.append(InputMappingHelpPaintable.AND); if (JThrowable.pending !== null) return null;
                } else {
                    if (index + 2 == keyList!.size()) {
                        stringBuffer!.append(InputMappingHelpPaintable.MORE_THAN_TWO_IN_LIST_AND); if (JThrowable.pending !== null) return null;
                    } else {
                        stringBuffer!.append(InputMappingHelpPaintable.SEP); if (JThrowable.pending !== null) return null;
                    } if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = this.displayInfo!.getLastHalfWidth(); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.basicColor!.intValue()); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.title, halfWidth - this.titleBeginWidth, this.updateMyFontProperties!.charHeight, this.anchor); if (JThrowable.pending !== null) return;
        let inputInfo: StaticArray<string | null> | null = this.inputInfo;
        let size: i32 = inputInfo!.length;
        let y: i32 = 0;
        let deltaX: i32 = 0;
        let size2: i32 = 0;
        let actionString: string | null = null;
        let input: Input | null = null;
        let list: BasicArrayList | null = null;
        let sep: string | null = null;
        let beginWidth: i32 = 0;
        for (let index: i32 = 0; index < size; index++) {
            y = (index + 3) * this.updateMyFontProperties!.charHeight;
            deltaX = 0;
            list = this.keyMappingArray![index];
            size2 = list!.size(); if (JThrowable.pending !== null) return;
            beginWidth = this.updateMyFontProperties!.keymappingBeginWidthArray![index];
            graphics!.setColor(this.actionBasicColor![index]!.intValue()); if (JThrowable.pending !== null) return;
            actionString = this.updateMyFontProperties!.actionStringArray![index];
            graphics!.drawString(actionString, halfWidth - beginWidth + deltaX, y, this.anchor); if (JThrowable.pending !== null) return;
            deltaX += this.updateMyFontProperties!.actionStringDeltaXArray![index];
            for (let index2: i32 = 0; index2 < size2; index2++) {
                input = changetype<Input | null>(list!.objectArray![index2]);
                graphics!.setColor(this.inputBasicColorArray![index]![index2]!.intValue()); if (JThrowable.pending !== null) return;
                graphics!.drawString(input!.getName(), halfWidth - beginWidth + deltaX, y, this.anchor); if (JThrowable.pending !== null) return;
                deltaX += this.updateMyFontProperties!.inputDeltaXArray![index]![index2];
                sep = this.updateMyFontProperties!.sepArray![index]![index2];
                graphics!.setColor(this.basicColor!.intValue()); if (JThrowable.pending !== null) return;
                graphics!.drawString(sep, halfWidth - beginWidth + deltaX, y, this.anchor); if (JThrowable.pending !== null) return;
                deltaX += this.updateMyFontProperties!.sepWidthArray![index]![index2];
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

