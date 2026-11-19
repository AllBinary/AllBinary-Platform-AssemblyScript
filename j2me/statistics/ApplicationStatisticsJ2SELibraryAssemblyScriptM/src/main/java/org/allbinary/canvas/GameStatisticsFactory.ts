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
// package org.allbinary.canvas
// import org.allbinary.logic.string.StringMaker

//ActualPlatform
@global export class GameStatisticsFactory extends BaseGameStatistics {

    jclassName(): string {
        return "org.allbinary.canvas.GameStatisticsFactory";
    }
    @lazy static jv_instance: GameStatisticsFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameStatisticsFactory | null {
        if (!GameStatisticsFactory.js_instance) {
            GameStatisticsFactory.js_instance = true;
            GameStatisticsFactory.jv_instance = new GameStatisticsFactory().jinit_GameStatisticsFactory_0();
        }
        return GameStatisticsFactory.jv_instance;
    }
    static set instance(value: GameStatisticsFactory | null) {
        GameStatisticsFactory.js_instance = true;
        GameStatisticsFactory.jv_instance = value;
    }
    stringBuffer: StringMaker | null = null;

    jfields_GameStatisticsFactory(): void {
    this.stringBuffer = new StringMaker().jinit_StringMaker_0();
    }

    jinit_GameStatisticsFactory_0(): GameStatisticsFactory {
        super.jinit_BaseGameStatistics_0();
        this.jfields_GameStatisticsFactory();
        return this;
    }
    

    static getInstance(): GameStatisticsFactory | null {
        return GameStatisticsFactory.instance;
    }
    

    add(string: string | null): void {
        if (this.stringBuffer!.length() > 12000) {
            this.stringBuffer!.delete_(0, this.stringBuffer!.length()); if (JThrowable.pending !== null) return;
            this.stringBuffer!.append("Old Stats Cleared"); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.stringBuffer!.append(string); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(super.toString())!.append(JObject.jtoString(this.stringBuffer)));
    }
}

