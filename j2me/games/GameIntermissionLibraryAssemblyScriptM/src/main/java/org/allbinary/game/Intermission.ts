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
// package org.allbinary.game
// import org.allbinary.time.TimeDelayHelper

@global export class Intermission extends JObject implements IntermissionInterface {

    jclassName(): string {
        return "org.allbinary.game.Intermission";
    }
    enabled: bool = false;
    timeElapsedHelper: TimeDelayHelper | null = null;
    intermissionEnableListener: IntermissionEnableListenerInterface | null = null;

    jfields_Intermission(): void {
    this.enabled = false;
    this.timeElapsedHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    this.intermissionEnableListener = NullIntermissionEnableListener.getInstance();
    }
    

    jinit_Intermission_0(): Intermission {
        super.jinit_JObject_0();
        this.jfields_Intermission();
        return this;
    }
    

    setListener(enableListener: IntermissionEnableListenerInterface | null): void {
        this.intermissionEnableListener = enableListener;
    }
    

    getTimeDelayHelper(): TimeDelayHelper | null {
        return this.timeElapsedHelper;
    }
    

    setEnabled(enabled: bool): void {
        this.enabled = enabled;
        if (this.isEnabled()) {
            this.getTimeDelayHelper()!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.intermissionEnableListener!.notifyIntermission(enabled); if (JThrowable.pending !== null) return;
    }
    

    isEnabled(): bool {
        return this.enabled;
    }
}

