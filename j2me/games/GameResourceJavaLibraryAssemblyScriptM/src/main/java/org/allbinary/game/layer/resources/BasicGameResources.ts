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
// package org.allbinary.game.layer.resources
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class BasicGameResources extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.resources.BasicGameResources";
    }
    @lazy static jv_stringBuffer: StringMaker | null = null;
    @lazy static js_stringBuffer: bool = false;
    static get stringBuffer(): StringMaker | null {
        if (!BasicGameResources.js_stringBuffer) {
            BasicGameResources.js_stringBuffer = true;
            BasicGameResources.jv_stringBuffer = new StringMaker().jinit_StringMaker_0();
        }
        return BasicGameResources.jv_stringBuffer;
    }
    static set stringBuffer(value: StringMaker | null) {
        BasicGameResources.js_stringBuffer = true;
        BasicGameResources.jv_stringBuffer = value;
    }
    logUtil: LogUtil | null = null;
    RESOURCE: string | null = null;
    RESOURCE_DESTROY: string | null = null;

    jfields_BasicGameResources(): void {
    this.logUtil = LogUtil.getInstance();
    this.RESOURCE = StringUtil.getInstance()!.EMPTY_STRING;
    this.RESOURCE_DESTROY = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_BasicGameResources_0(): BasicGameResources {
        super.jinit_JObject_0();
        this.jfields_BasicGameResources();
        return this;
    }
    

    init(ROOT: string | null, SIZE: StaticArray<string | null> | null): void {
        do {
            let scale: i32 = GameConfigurationCentral.getInstance()!.SCALE!.getValue()!.intValue(); if (JThrowable.pending !== null) break;
            if (scale > 1 && scale - 1 < SIZE!.length) {
                this.append(ROOT, SIZE![scale - 1]); if (JThrowable.pending !== null) break;
            } else {
                { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Invalid Value: ")!.appendint(scale)))); break; }
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    append(ROOT: string | null, sizeString: string | null): void {
        let DESTROY: string | null = "_destroy";
        let string: string | null = this.getString(); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.delete_(0, BasicGameResources.stringBuffer!.length()); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.append(ROOT); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.append(string); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.append(sizeString); if (JThrowable.pending !== null) return;
        this.RESOURCE = JObject.jtoString(BasicGameResources.stringBuffer); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.delete_(0, BasicGameResources.stringBuffer!.length()); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.append(ROOT); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.append(DESTROY); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.append(string); if (JThrowable.pending !== null) return;
        BasicGameResources.stringBuffer!.append(sizeString); if (JThrowable.pending !== null) return;
        this.RESOURCE_DESTROY = JObject.jtoString(BasicGameResources.stringBuffer); if (JThrowable.pending !== null) return;
    }
    

    getString(): string | null {
        return GameGraphicsResourceUtil.getInstance()!.getName();
    }
}

