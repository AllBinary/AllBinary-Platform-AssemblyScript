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
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.mapping.GameInputMapping
// import org.allbinary.game.input.mapping.PersistentInputMapping
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList

@global export class BasicInputMappingHelpPaintable extends HelpPaintable {

    jclassName(): string {
        return "org.allbinary.game.paint.help.BasicInputMappingHelpPaintable";
    }
    gameInputMappingArray: StaticArray<GameInputMapping | null> | null = null;
    NONE: GameKey | null = null;

    jfields_BasicInputMappingHelpPaintable(): void {
    
    this.NONE = GameKeyFactory.getInstance()!.NONE;
    }
    

    jinit_BasicInputMappingHelpPaintable_2(gameInputMappingArray: StaticArray<GameInputMapping | null> | null, basicColor: BasicColor | null): BasicInputMappingHelpPaintable {
        super.jinit_HelpPaintable_3("Help Screen", BasicColorFactory.getInstance()!.BLACK, basicColor);
        this.jfields_BasicInputMappingHelpPaintable();
        this.gameInputMappingArray = gameInputMappingArray;
        this.update(this.NONE, this.NONE); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    update(selectedGameKey: GameKey | null, selectedInput: Input | null): void {
        let gameKeyMapping: PersistentInputMapping | null = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance(); if (JThrowable.pending !== null) return;
        let EQUAL: string | null = " = ";
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let size: i32 = this.gameInputMappingArray!.length;
        let keyInfo: StaticArray<string | null> | null = new StaticArray<string | null>(size);
        let gameInputMapping: GameInputMapping | null = null;
        let gameKey: GameKey | null = null;
        let list: BasicArrayList | null = null;
        for (let index: i32 = 0; index < size; index++) {
            gameInputMapping = this.gameInputMappingArray![index];
            gameKey = gameInputMapping!.getGameKey(); if (JThrowable.pending !== null) return;
            list = gameKeyMapping!.getInputMapping()!.getMappedInput(gameKey); if (JThrowable.pending !== null) return;
            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
            keyInfo![index] = JObject.jtoString(stringMaker!.append(gameInputMapping!.getName())!.append(EQUAL)!.append(this.get(list))); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.setInputInfoP(keyInfo); if (JThrowable.pending !== null) return;
    }
    

    get(keyList: BasicArrayList | null): string | null {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let AND: string | null = "and ";
        let key: Input | null = null;
        let size: i32 = keyList!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            key = changetype<Input | null>(keyList!.objectArray![index]);
            stringBuffer!.append(key!.getName()); if (JThrowable.pending !== null) return null;
            if (index + 1 < keyList!.size()) {
                if (keyList!.size() == 2) {
                    stringBuffer!.append(commonSeps!.SPACE)!.append(AND); if (JThrowable.pending !== null) return null;
                } else {
                    if (index + 2 == keyList!.size()) {
                        stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
                        stringBuffer!.append(AND); if (JThrowable.pending !== null) return null;
                    } else {
                        stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
                    } if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

