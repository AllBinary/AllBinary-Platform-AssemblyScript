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
// package org.allbinary.logic.system.hardware.components

@global export class Component extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.Component";
    }
    name: string | null = null;

    jfields_Component(): void {
    
    }
    

    jinit_Component_1(componentName: string | null): Component {
        super.jinit_JObject_0();
        this.jfields_Component();
        this.name = componentName;
        return this;
    }
    

    toString(): string | null {
        return this.name;
    }
}

