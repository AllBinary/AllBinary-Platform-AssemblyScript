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
// import org.allbinary.game.configuration.event.GameFeatureEvent
// import org.allbinary.game.configuration.event.GameFeatureEventHandler
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class GameConfiguration extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameConfiguration";
    }
    @lazy static jv_MIN_VALUE: JInteger | null = null;
    @lazy static js_MIN_VALUE: bool = false;
    static get MIN_VALUE(): JInteger | null {
        if (!GameConfiguration.js_MIN_VALUE) {
            GameConfiguration.js_MIN_VALUE = true;
            GameConfiguration.jv_MIN_VALUE = new JInteger().jinit_JInteger_1(JInteger.MIN_VALUE);
        }
        return GameConfiguration.jv_MIN_VALUE;
    }
    static set MIN_VALUE(value: JInteger | null) {
        GameConfiguration.js_MIN_VALUE = true;
        GameConfiguration.jv_MIN_VALUE = value;
    }
    name: string | null = null;
    defaultValue: JInteger | null = null;
    value: JInteger | null = null;
    minValue: JInteger | null = null;
    maxValue: JInteger | null = null;
    modifiable: JBoolean | null = null;

    jfields_GameConfiguration(): void {
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    this.defaultValue = SmallIntegerSingletonFactory.getInstance()!.getAt(0);
    this.value = GameConfiguration.MIN_VALUE;
    this.minValue = this.defaultValue;
    this.maxValue = this.defaultValue;
    this.modifiable = BooleanFactory.getInstance()!.TRUE;
    }
    

    jinit_GameConfiguration_4(name: string | null, defaultValue: JInteger | null, minValue: JInteger | null, maxValue: JInteger | null): GameConfiguration {
        super.jinit_JObject_0();
        this.jfields_GameConfiguration();
        this.setName(name); if (JThrowable.pending !== null) return this;
        this.setDefaultValue(defaultValue); if (JThrowable.pending !== null) return this;
        this.value = this.getDefaultValue(); if (JThrowable.pending !== null) return this;
        this.setMinValue(minValue); if (JThrowable.pending !== null) return this;
        this.setMaxValue(maxValue); if (JThrowable.pending !== null) return this;
        GameConfigurationSingleton.getInstance()!.getHashtable()!.put(this.getName(), this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setValue(value: JInteger | null): void {
        if (this.value != value) {
            let oldValue: JInteger | null = this.value;
            this.value = value;
            GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent().jinit_GameFeatureEvent_2(this, JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.name)!.append(" value: from: ")!.appendint((<i32>(oldValue!.intValue())))!.append(" to ")!.appendint((<i32>(this.value!.intValue())))))); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getValue(): JInteger | null {
        return this.value;
    }
    

    setMaxValue(maxValue: JInteger | null): void {
        this.maxValue = maxValue;
    }
    

    getMaxValue(): JInteger | null {
        return this.maxValue;
    }
    

    setMinValue(minValue: JInteger | null): void {
        this.minValue = minValue;
    }
    

    getMinValue(): JInteger | null {
        return this.minValue;
    }
    

    setName(name: string | null): void {
        this.name = name;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    setDefaultValue(defaultValue: JInteger | null): void {
        this.defaultValue = defaultValue;
    }
    

    getDefaultValue(): JInteger | null {
        return this.defaultValue;
    }
    

    setDefault(): void {
        this.setValue(this.getDefaultValue()); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Name: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.name); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Min: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.getMinValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Max: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.getMaxValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Value: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Default: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.getDefaultValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Modifiable: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isModifiable()!.booleanValue()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    setModifiable(modifiable: JBoolean | null): void {
        this.modifiable = modifiable;
    }
    

    isModifiable(): JBoolean | null {
        return this.modifiable;
    }
}

