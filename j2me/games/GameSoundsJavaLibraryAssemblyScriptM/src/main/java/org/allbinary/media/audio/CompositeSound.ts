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

@global export class CompositeSound extends Sound {

    jclassName(): string {
        return "org.allbinary.media.audio.CompositeSound";
    }
    

    jinit_CompositeSound_1(resource: string | null): CompositeSound {
        super.jinit_Sound_1(resource);
        return this;
    }
    

    init(): void {
        this.setPlayerP(new PlayerComposite().jinit_PlayerComposite_2(AllBinaryMediaManager.createPlayer(this.getResource()), 570)); if (JThrowable.pending !== null) return;
    }
}

