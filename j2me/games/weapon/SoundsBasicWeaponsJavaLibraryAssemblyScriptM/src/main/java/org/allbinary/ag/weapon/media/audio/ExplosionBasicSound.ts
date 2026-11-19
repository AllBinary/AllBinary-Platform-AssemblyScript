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
// package org.allbinary.ag.weapon.media.audio
// import org.allbinary.media.audio.CompositeSound
// import org.allbinary.media.audio.Sound

@global export class ExplosionBasicSound extends CompositeSound {

    jclassName(): string {
        return "org.allbinary.ag.weapon.media.audio.ExplosionBasicSound";
    }
    @lazy static jv_soundInterface: Sound | null = null;
    @lazy static js_soundInterface: bool = false;
    static get soundInterface(): Sound | null {
        if (!ExplosionBasicSound.js_soundInterface) {
            ExplosionBasicSound.js_soundInterface = true;
            ExplosionBasicSound.jv_soundInterface = new ExplosionBasicSound().jinit_ExplosionBasicSound_0();
        }
        return ExplosionBasicSound.jv_soundInterface;
    }
    static set soundInterface(value: Sound | null) {
        ExplosionBasicSound.js_soundInterface = true;
        ExplosionBasicSound.jv_soundInterface = value;
    }
    

    jinit_ExplosionBasicSound_0(): ExplosionBasicSound {
        super.jinit_CompositeSound_1("resource:/wav/explosion.wav");
        return this;
    }
    

    static getInstance(): Sound | null {
        return ExplosionBasicSound.soundInterface;
    }
}

