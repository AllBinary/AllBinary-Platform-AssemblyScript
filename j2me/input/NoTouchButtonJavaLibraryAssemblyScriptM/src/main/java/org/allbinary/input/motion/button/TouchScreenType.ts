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
// package org.allbinary.input.motion.button

@global export class TouchScreenType extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchScreenType";
    }
    name: string | null = null;

    jfields_TouchScreenType(): void {
    
    }
    

    jinit_TouchScreenType_1(name: string | null): TouchScreenType {
        super.jinit_JObject_0();
        this.jfields_TouchScreenType();
        this.name = name;
        return this;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    toString(): string | null {
        return this.getName();
    }
}

