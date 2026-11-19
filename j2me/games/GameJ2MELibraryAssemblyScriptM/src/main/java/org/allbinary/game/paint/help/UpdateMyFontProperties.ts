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
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil

@global export class UpdateMyFontProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.game.paint.help.UpdateMyFontProperties";
    }
    actionStringArray: StaticArray<string | null> | null = null;
    keymappingBeginWidthArray: StaticArray<i32> | null = null;
    actionStringDeltaXArray: StaticArray<i32> | null = null;
    inputDeltaXArray: StaticArray<StaticArray<i32> | null> | null = null;
    sepArray: StaticArray<StaticArray<string | null> | null> | null = null;
    sepWidthArray: StaticArray<StaticArray<i32> | null> | null = null;
    charHeight: i32 = 0;

    jfields_UpdateMyFontProperties(): void {
    this.actionStringArray = StringUtil.getInstance()!.getArrayInstance();
    this.keymappingBeginWidthArray = NullUtil.getInstance()!.NULL_INT_ARRAY;
    this.actionStringDeltaXArray = NullUtil.getInstance()!.NULL_INT_ARRAY;
    this.inputDeltaXArray = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;
    this.sepArray = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY_OF_ARRAYS;
    this.sepWidthArray = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;
    this.charHeight = 0;
    }

    jinit_UpdateMyFontProperties_0(): UpdateMyFontProperties {
        super.jinit_JObject_0();
        this.jfields_UpdateMyFontProperties();
        return this;
    }
}

