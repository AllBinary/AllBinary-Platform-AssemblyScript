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
// package org.allbinary.direction
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonPhoneStrings
// import org.allbinary.string.CommonSeps

@global export class DirectionFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.direction.DirectionFactory";
    }
    @lazy static jv_instance: DirectionFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DirectionFactory | null {
        if (!DirectionFactory.js_instance) {
            DirectionFactory.js_instance = true;
            DirectionFactory.jv_instance = new DirectionFactory().jinit_DirectionFactory_0();
        }
        return DirectionFactory.jv_instance;
    }
    static set instance(value: DirectionFactory | null) {
        DirectionFactory.js_instance = true;
        DirectionFactory.jv_instance = value;
    }
    NAME: string | null = null;
    LEFT: Direction | null = null;
    RIGHT: Direction | null = null;
    DOWN: Direction | null = null;
    UP: Direction | null = null;
    UP_LEFT: Direction | null = null;
    UP_RIGHT: Direction | null = null;
    DOWN_LEFT: Direction | null = null;
    DOWN_RIGHT: Direction | null = null;
    NOT_BORDERED_WITH: Direction | null = null;
    NO_DIRECTION: Direction | null = null;
    TOP: Direction | null = null;
    BOTTOM: Direction | null = null;
    ALL_DIRECTION: Direction | null = null;

    jfields_DirectionFactory(): void {
    this.NAME = "DIRECTION";
    this.LEFT = new Direction().jinit_Direction_4(CommonPhoneStrings.getInstance()!.LEFT, "WEST", 0, 1);
    this.RIGHT = new Direction().jinit_Direction_4(CommonPhoneStrings.getInstance()!.RIGHT, "EAST", 1, 0);
    this.DOWN = new Direction().jinit_Direction_4(CommonPhoneStrings.getInstance()!.DOWN, "SOUTH", 2, 0);
    this.UP = new Direction().jinit_Direction_4(CommonPhoneStrings.getInstance()!.UP, "NORTH", 3, 0);
    
    
    
    
    this.NOT_BORDERED_WITH = new Direction().jinit_Direction_4("NOT_BORDERED_WITH", "NOT_BORDERED_WITH", 8, 0);
    this.NO_DIRECTION = new Direction().jinit_Direction_4("NO_DIRECTION", "NO_DIRECTION", 9, 0);
    this.TOP = new Direction().jinit_Direction_4("TOP", "TOP", 10, 0);
    this.BOTTOM = new Direction().jinit_Direction_4("BOTTOM", "BOTTOM", 11, 0);
    this.ALL_DIRECTION = new Direction().jinit_Direction_4("ALL_DIRECTION", "ALL_DIRECTION", 12, 0);
    }
    

    static getInstance(): DirectionFactory | null {
        return DirectionFactory.instance;
    }
    

    jinit_DirectionFactory_0(): DirectionFactory {
        super.jinit_JObject_0();
        this.jfields_DirectionFactory();
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return this;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return this;
        this.UP_LEFT = new Direction().jinit_Direction_4("UP LEFT", JObject.jtoString(stringBuffer!.append(this.UP!.getOtherName())!.append(commonSeps!.SPACE)!.append(this.LEFT!.getOtherName())), 4, 0); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        this.UP_RIGHT = new Direction().jinit_Direction_4("UP RIGHT", JObject.jtoString(stringBuffer!.append(this.UP!.getOtherName())!.append(commonSeps!.SPACE)!.append(this.RIGHT!.getOtherName())), 5, 0); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        this.DOWN_LEFT = new Direction().jinit_Direction_4("DOWN LEFT", JObject.jtoString(stringBuffer!.append(this.DOWN!.getOtherName())!.append(commonSeps!.SPACE)!.append(this.LEFT!.getOtherName())), 6, 0); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        this.DOWN_RIGHT = new Direction().jinit_Direction_4("DOWN RIGHT", JObject.jtoString(stringBuffer!.append(this.DOWN!.getOtherName())!.append(commonSeps!.SPACE)!.append(this.RIGHT!.getOtherName())), 7, 0); if (JThrowable.pending !== null) return this;
        return this;
    }
}

