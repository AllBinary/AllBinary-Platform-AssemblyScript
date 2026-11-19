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

@global export class DropWeaponSound extends CompositeSound {

    jclassName(): string {
        return "org.allbinary.ag.weapon.media.audio.DropWeaponSound";
    }
    @lazy static jv_soundInterface: Sound | null = null;
    @lazy static js_soundInterface: bool = false;
    static get soundInterface(): Sound | null {
        if (!DropWeaponSound.js_soundInterface) {
            DropWeaponSound.js_soundInterface = true;
            DropWeaponSound.jv_soundInterface = new DropWeaponSound().jinit_DropWeaponSound_0();
        }
        return DropWeaponSound.jv_soundInterface;
    }
    static set soundInterface(value: Sound | null) {
        DropWeaponSound.js_soundInterface = true;
        DropWeaponSound.jv_soundInterface = value;
    }
    

    jinit_DropWeaponSound_0(): DropWeaponSound {
        super.jinit_CompositeSound_1("resource:/wav/mine.wav");
        return this;
    }
    

    static getInstance(): Sound | null {
        return DropWeaponSound.soundInterface;
    }
}

