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
// package org.allbinary.logic.io

@global export class AbIOSystem extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.AbIOSystem";
    }
    @lazy static jv_instance: AbIOSystem | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbIOSystem | null {
        if (!AbIOSystem.js_instance) {
            AbIOSystem.js_instance = true;
            AbIOSystem.jv_instance = new AbIOSystem().jinit_AbIOSystem_0();
        }
        return AbIOSystem.jv_instance;
    }
    static set instance(value: AbIOSystem | null) {
        AbIOSystem.js_instance = true;
        AbIOSystem.jv_instance = value;
    }
    type: string | null = null;

    jfields_AbIOSystem(): void {
    this.type = "java.io";
    }

    jinit_AbIOSystem_0(): AbIOSystem {
        super.jinit_JObject_0();
        this.jfields_AbIOSystem();
        return this;
    }
    

    static getInstance(): AbIOSystem | null {
        return AbIOSystem.instance;
    }
    

    getType(): string | null {
        return this.type;
    }
    

    isType(type: string | null): bool {
        if (JString.compareTo1(this.type, type) == 0) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

