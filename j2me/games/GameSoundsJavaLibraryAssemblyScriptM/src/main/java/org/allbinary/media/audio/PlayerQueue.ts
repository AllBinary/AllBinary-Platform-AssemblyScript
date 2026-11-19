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
// package org.allbinary.media.audio
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class PlayerQueue extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.PlayerQueue";
    }
    @lazy static readonly TOTAL: string | null = "Sounds In Queue: ";
    commonStrings: CommonStrings | null = null;
    list: BasicArrayList | null = null;
    max: i32 = 0;

    jfields_PlayerQueue(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    
    }
    

    jinit_PlayerQueue_1(max: i32): PlayerQueue {
        super.jinit_JObject_0();
        this.jfields_PlayerQueue();
        this.max = max;
        return this;
    }
    

    add(sound: Sound | null): void {
        do {
            if (!this.list!.contains(sound)) {
                this.list!.add(sound); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    process(): bool {
        let sound: Sound | null = NoSound.getInstance(); if (JThrowable.pending !== null) return false;
        do {
            let played: bool = false;
            if (this.list!.size() > 0) {
                sound = changetype<Sound | null>(this.list!.removeAt(0)); if (JThrowable.pending !== null) break;
                if (sound != null) {
                    sound!.getPlayerP()!.start(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                while (this.list!.size() > this.max) {
                    this.list!.removeAt(0); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                played = true;
            } if (JThrowable.pending !== null) break;
            return played;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let resource: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return false;
            if (sound != null) {
                resource = sound!.getResource(); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.EXCEPTION_LABEL)!.append(resource)), this, this.commonStrings!.PROCESS); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    clear(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(PlayerQueue.TOTAL)!.appendint(this.list!.size()));
    }
}

